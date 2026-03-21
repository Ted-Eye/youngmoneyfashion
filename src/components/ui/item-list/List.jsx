import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import ItemCard from '../item-card/ItemCard'

const List = ({items}) => {
    
    return (
        <SimpleGrid 
            columns={[1, 2, 4]} 
            gap={4} 
            alignItems={'center'} 
            >
                {
                    items.map((item)=> 
                    <ItemCard 
                        key={item.id}
                        item={item}/>)    
                }
        </SimpleGrid>
    )
}

export default List
