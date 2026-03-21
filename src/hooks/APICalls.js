import { useEffect, useState } from "react"
import api from "../../api"
import axios from "axios";
import { useCatalog } from "../contexts/CatalogContext";
import { useAlert } from "../contexts/AlertContext";



export const useAPICall = (config) => {
    const [response, setResponse] = useState(null)
    // const {loading, fetching, doneFetching} = useAlert()
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const [hairstyles, setHairstyles] = useState([])
    const [error, setError] = useState(null)
    const [alert, setAlert] = useState({
        type: '', title: '', msg: ''})
    
    const callApi = async () => {
        switch(config.verb) {
            case 'post' :
                try {
                    const res = await api.post(endpoint, data);
                    setResponse(res)
                } catch (error) {
                    setResponse(error.response)
                } 
                break;

            case 'delete':
                try {
                    const res = await api.delete()
                } catch (error) {
                    console.log(error)
                }
                break;

            case 'patch' : 
                try {
                    const res = await api.patch(endpoint, data);
                    setResponse(res)
                } catch (error) {
                    setResponse(error.response)
                }
                break;

            default :            
                try {
                    
                    const res = await api.get(config.endpoint);
                    if(res.status===200) {
                        const fetchedData = res.data
                        setItems(fetchedData)
                        setLoading(false)
                    }
                } catch (error) {
                    setResponse(error)
                    // if(error.code==="ERR_NETWORK") {
                    //     setResponse('no internet')

                    //     setAlert()
                    // } else setResponse('unknown error')
                    
                } 
            }
    }

    const updateItems = (newData)=>{
        setItems(newData)
    }
    useEffect(()=>{
        callApi()
        
    }, []);
    // useEffect(()=>{
    //     setHairstyles(items)
    // },[items])
    // console.log(hairstyles)
    return {items, updateItems, response, error, loading, alert}
}