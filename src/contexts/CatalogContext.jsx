import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useAPICall } from "../hooks/APICalls";
import api from "../../api";

const FETCH_URL_CONFIG = {
    verb: 'get', endpoint:'catalog/hairstyles/'
}
const API_CALL_CONFIGS = {
    get: {
        verb: 'get', endpoint:'catalog/hairstyles/'
    },
    post: {
        verb: 'post', endpoint:'catalog/hairstyles/', data: {}
    },
    patch: {
        verb: 'patch', endpoint:'catalog/hairstyles/', id: ''
    },
    delete: {
        verb: 'delete', endpoint:'catalog/hairstyles/', id: ''
    }
}
const CatalogContext = createContext();

export const CatalogProvider = ({children}) => {
    
    
    const {items, updateItems, error, loading } = useAPICall( API_CALL_CONFIGS.get)
    const getList = (data) => {
        return data
    }
    const [hairstyles, setHairstyles] = useState([])
    const [products, setProducts] = useState([])
    const [favs, setFavs] = useState(()=>{
        return JSON.parse(localStorage.getItem('favourites')) || []
    })
    const [label, setLabel] = useState("Add to favourites")
    useEffect(()=>{
        localStorage.setItem('favourites', JSON.stringify(favs))
    },[])
    const newItems = items.map((item)=>{
        return item.image_url !== null? item: null
    })
    
    const deleteHairstyle = async (id) => {
        try {
            const res = await api.delete(`catalog/hairstyles/${id}/`)
            console.log('deleted', res.status)
            updateItems(items.filter((item)=>item.id!==id))
        } catch (error) {
            console.log('Delete hairstyle error:', error.response ? error.response.data : error)
        }
    }
    
    const toggleFav = (getCurrentId)=>{
        if(favs.some(fav=>fav.id === getCurrentId)){
            const [unFaved] = favs.filter((fav)=>fav.id===getCurrentId)
            const updatedItem = {...unFaved, isFav: false}
            const updatedItems = items.map((item)=>item.id===updatedItem.id? updatedItem: item)
            updateItems(updatedItems)
            const newFavs = favs.filter((fav)=> fav.id !== getCurrentId)
            setFavs(newFavs)
            localStorage.setItem("favourites", JSON.stringify(newFavs))
            console.log(getCurrentId, " Removed from favourites")
            setLabel(label)
            
        }else{
            // let fullCatalog = [...hairstyles, ...products]
            
            const [newFav] = items.filter((item)=>item.id === getCurrentId)
            const updatedItem = {...newFav, isFav: true}
            // setGallery((galley)=>[...galley,...hairstyles])
            const updatedGallery = items.map((item)=>item.id===updatedItem.id? updatedItem: item)
            updateItems(updatedGallery)
            const updatedFavs = [...favs, updatedItem]
            setFavs(updatedFavs)
            localStorage.setItem("favourites", JSON.stringify(updatedFavs))
            console.log("Added to favourites")
            setLabel("Remove favourite")
            
        }
        
        }
    useEffect(()=>{
        setFavs(JSON.parse(localStorage.getItem('favourites')))
    },[items])
    const value = {products, items, favs, toggleFav, deleteHairstyle, loading}
    return <CatalogContext.Provider value={value}>
        {children}
    </CatalogContext.Provider>
};
export const useCatalog = () => {
    return useContext(CatalogContext)
}