import React, { useEffect, useState } from 'react'
import ItemCard from '../../components/ui/item-card/ItemCard'
import {Box, Flex, Image, Heading, Card, Button, Text, SimpleGrid, VStack, Spinner} from '@chakra-ui/react'
import { Heart, ThumbsUp } from "lucide-react"
import { useCatalog } from '../../contexts/CatalogContext'
import BgFilter from '../../components/ui/background/BgFilter'
import List from '../../components/ui/item-list/List'

export default function Favourites() {
    const {favs} = useCatalog()
    
    return (
        <BgFilter>
            <Box p={8} mt={12} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
                <Heading mt={4}>
                    Your favourites
                </Heading>
                {   favs?.length === 0 ? (
                    
                    <Box mt={8}>
                    <Image w={400} color={"white"}
                    src='empty.svg'/>
                    <Text mt={4}>
                        Empty! Items You liked will be displayed here...
                    </Text>
                </Box>)
                : <Text>You have {favs.length} favourite items</Text>
                    
                }
                {/* <SimpleGrid columns={[1, 2, 6]} >
                    {   favs.map((fav) => <ItemCard item={fav} key={fav.id}/>)
                    }
                </SimpleGrid> */}
                <List items={favs}/>
            </Box>
        </BgFilter>
    )
}
