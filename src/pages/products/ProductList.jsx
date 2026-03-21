import { useEffect, useState } from 'react'
import axios from 'axios'
import { data } from 'react-router-dom'

export default function ProductList() {
    const [products, setProducts] = useState([])

    const getItems = async () => {
        try{
            const response = await fetch('http://127.0.0.1:8000/catalog/products/');
            const result = await response.json()
            setProducts(result)
        }catch(e){
            console.log(e.message)
        }
        

    }
    useEffect(()=>{
        getItems()
    },[])
    console.log(products)
    return (
        <div>
            Purchase products for your hair needs
        </div>
    )
}
