import { useEffect, useState } from 'react'
import axios from 'axios'
import { data } from 'react-router-dom'
import BgFilter from '../../components/ui/background/BgFilter'
import { Box, Heading } from '@chakra-ui/react'

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
        <BgFilter>
            <Box display={'flex'} mt={12} alignItems={'center'} justifyContent={'center'}>
                <Heading mt={8}>
                    Purchase products for your hair needs
                </Heading>
            </Box>
        </BgFilter>
    )
}
