import {Box} from '@chakra-ui/react'
import { useCatalog } from "../../../contexts/CatalogContext"
import BgFilter from "../background/BgFilter"
import { SortingTabs} from "../Tabs"
import { HairstyleForm } from "../../../forms/HairstyleForm"

export default function Hairstyles() {
    const {items, products, favs, loading} = useCatalog()
    const tabs = [{name: 'All', value: items}, {name: 'Favourites', value: favs}, {name: 'Trending', value: items.slice(1, 5)}]
    
    return (
        <BgFilter>
            <Box >
                
                <SortingTabs tabs={tabs}/>
                <HairstyleForm/>
            </Box>
        </BgFilter>
    )
}
