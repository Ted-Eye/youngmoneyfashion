
import { Button, Code, Menu, Portal, Stack, useMenu } from "@chakra-ui/react"
import { useRef } from "react"
import {Link as RouterLink} from 'react-router-dom'


export const MobileMenu = ({ children }) => {
    const menu = useMenu()
    const pages = ['Gallery', 'Products', 'Favourites', 'Bookings']
    return (
        <Menu.RootProvider value={menu}>
            <Menu.Trigger asChild>
            {/* <Button variant="outline" size="sm">
                Open
            </Button> */}
            {children}
            </Menu.Trigger>
            <Portal>
            <Menu.Positioner>
                <Menu.Content bg={'#7c4d02ff'} border={'solid 1px #83530651'} borderRadius={8} p={2} alignContent={'center'}>
                {pages.map((page) => (
                    <Menu.Item key={page} as={RouterLink} to={`/${page.toLowerCase()}`} color={'#white'} p={2} borderRadius={4} _hover={{bg: '#8353068f'}}>
                    {page}
                    </Menu.Item>
                ))}
                </Menu.Content>
            </Menu.Positioner>
            </Portal>
        </Menu.RootProvider>
    )
}
