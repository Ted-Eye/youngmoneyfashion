import {Image, Heading, Card, Button, Text, Stack, HStack, Box} from '@chakra-ui/react'
import { ThumbsUp } from "lucide-react"
import { useEffect, useState } from 'react'
import Appointment from '../appointment/Appointment'
import { FaArchive, FaClock, FaHeart, FaThumbsUp, FaTimesCircle } from 'react-icons/fa'
import { FaTimeline } from 'react-icons/fa6'
import { useCatalog } from '../../../contexts/CatalogContext'

export default function ItemCard({item}) {
    const {toggleFav, favs, deleteHairstyle} = useCatalog()
    const isFav = favs?.some((fav)=>fav.id===item.id? true: false)
    // const getFavStatus = ()=>{
    //     if(favs.some((fav)=>fav.id===item.id)) {
    //         setisFav(true)
    //     }
    // }
    // useEffect(()=>{
    //     getFavStatus()
    // },[])

    // const buttonLabel = ()=>{
    //     setFavStatus(handleFavStatus)
    // }
    const optimizedImage = item.image_url.replace("/upload/", "/upload/w_400, q_auto, f_auto/" )
    return (
        <>
            
            <Card.Root bg={'#7c4e02ad'} borderRadius={8} border={'solid 0.5px #5750247b'} color={'white'}>
                <Image
                    h={'250px'}
                    src={item.image_url}
                    border={'solid 1px #5750247b'}
                    borderBottom={'none'}
                    borderTopRadius={8}
                    
                />
                <Card.Body textAlign={'left'} position={'relative'}>
                    <Button 
                        bg={'#c1bbab04'}
                        position={'absolute'} top={2} left={6}
                        onClick={()=>(toggleFav(item.id) )}
                        h={8}>
                        <Text >
                            <FaThumbsUp size={42} color={isFav? '#f69b09ff': '#f2b76562'}/>
                        </Text>
                    </Button>
                    <Card.Title ml={16} fontSize={16}>
                        <Box ml={4}>
                            {item.name}
                            <Stack direction={'row'} alignItems={'center'}>
                                <FaClock color='white'/>
                                <Text py={0} my={0}>{item.treatment_duration}</Text>
                            </Stack>
                            <HStack >
                        <Text textStyle="xl" fontWeight="medium" letterSpacing="tight" fontSize={18} color={'#f69b097b'}>
                    {`${item.price} FCFA` }
                    </Text>
                    <Text textStyle="xl" fontWeight="medium" letterSpacing="tight" fontSize={18} textDecoration={'line-through'} color={'white'}>
                    {`${item.price + 2000} FCFA` }
                    </Text>
                    </HStack>
                        </Box>
                    </Card.Title>
                    
                </Card.Body>
                <Card.Footer justifyContent={'center'} pb={4}>
                    <Appointment item={item}/>
                    <Button onClick={()=>deleteHairstyle(item.id)}>Delete</Button>
                </Card.Footer>
            </Card.Root>
            
        </>      
    )
}
