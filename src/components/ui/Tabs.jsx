
import { Container, Flex, HStack, Tabs } from "@chakra-ui/react"
import { LuFolder, LuUser } from "react-icons/lu"
import List from "./item-list/List"
import { Heart, List as ListIcon, TrendingUp} from "lucide-react"
import BgFilter from "./background/BgFilter"


export const SortingTabs = ({tabs}) => {
    
    const tabIcons = {
        all:  'all',
        favourites: 'favourites',
        trending: 'trending'
    }
    const getTabIcon = (tabName) => {
        const IconComponent = tabIcons[tabName.toLowerCase()]
        switch (IconComponent) {
            case 'all':
                return <ListIcon size={18} />
            case 'favourites':
                return <Heart size={18} />
            case 'trending':
                return <TrendingUp size={18} />
            default:
                return null
        }
    }
    return (
            <Tabs.Root mt={16} defaultValue={tabs[0].name.toLowerCase()} variant="line">
        <Tabs.List bg="#1c1919c5" rounded="l3" display={'flex'} alignItems={'center'} gap={[3, 40, 40, '430px']} mb={[6]} position={'fixed'} top={['80px', '100px', '120px']} zIndex={100} w={'92%'} left={['24px', '28px', '42px', '58px']}>
            {tabs.map((tab) => (
                
                <Tabs.Trigger value={tab.name.toLowerCase()} key={tab.name} pl={2}>
                {getTabIcon(tab.name)}
                {tab.name}
                </Tabs.Trigger>
            ))}
            {/* <Tabs.Indicator rounded="l2" /> */}
        </Tabs.List>
        {tabs.map((tab)=><Tabs.Content value={tab.name.toLowerCase()} key={tab.name}>
            <List items={tab.value}/>
        </Tabs.Content>)}
        </Tabs.Root>
    )
}
