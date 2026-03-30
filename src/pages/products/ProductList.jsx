import { useEffect, useState } from 'react'
import axios from 'axios'
import { data, useNavigate } from 'react-router-dom'
import BgFilter from '../../components/ui/background/BgFilter'
import { Box, Button, Heading, Span, Stack, Text } from '@chakra-ui/react'
import { TimerIcon } from 'lucide-react'

export default function ProductList() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
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
    
    return (
        <BgFilter>
            <Box display={'flex'} mt={[16, 24]} alignItems={'center'} textAlign={'center'} flexDirection={'column'} gap={4} mx={3}>
                <Heading fontSize={[18, 24]} px={[4, 8]} lineHeight={[1.2]}>
                    Purchase products for your hair grooming, face treatments and general esthetics
                </Heading>
                
                <Stack direction={'row'} py={[2, 8]} px={['20px', '110px']} border={'solid 1px #7c4e02ad'} borderRadius={4} bg={'#0a0908ff'} gap={3} alignItems={'center'}>
                    <TimerIcon size={45}/>
                    <Text >
                    Come back later. Our product inventory will be loaded soon
                </Text>
                </Stack>
                <Button w={'74%'} onClick={()=>navigate('/gallery')} bg={'#7c4d02ff'}>Back to gallery</Button>
            </Box>
        </BgFilter>
    )
}
