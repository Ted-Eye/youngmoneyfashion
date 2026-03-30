import { Flex, Box, Image, HStack, Text, Button, Spacer, Link } from "@chakra-ui/react";
import { useState } from "react";
import {Link as RouterLink} from 'react-router-dom'
import { MobileMenu } from "./MobileMenu";

export default function NavBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const pages = ['Gallery', 'Products', 'Favourites', 'My bookings']
    const handleClick = () => {
        return <addBooking/>
    }
    return (
        <Flex 
            as={"nav"}
            p={'8px 26px'}
            // p={'10px'}
            bg={'#7c4e02ad'}
            align={'center'}
            position={'fixed'}
            w={'100%'}
            borderBottom={'solid 0.5px #cebfa854'}
            zIndex={50}
            >

            <Link as = {RouterLink} to="/">
                <Box  w={[150, 250, 300, 320]} flexGrow={{base:1}}>
                <Image 
                pt={'5px'} bg={'#0b0b0bf2'} borderRadius={50}
                src="/doctor.png" pl={2}
                />    
                </Box>
            </Link>
            
            <Spacer></Spacer>
            <Box display={{base: 'none', sm: 'flex'}}>
                {
                    pages.map((page, index)=>(
                        <Link key={index} as={RouterLink} to={page==="My bookings"? '/bookings': `/${page.toLowerCase()}`} color={'#ffffffff'} padding={['4px 12px', '4px 14px', '4px 16px']}>
                            <Text>{page}</Text>
                        </Link>
                    ))
                }
            {/* <Link href="/about" color={'#c29b65ff'}>
                <Text p={'4px'}>
                    About Us
                </Text> 
            </Link> */}
            </Box>
                <MobileMenu>
                    <Box display={{sm: 'none'}}>
                <Button textTransform={'uppercase'} onClick={handleClick} fontSize={28} pb={2} borderRadius={40} width={2} h={6} color={'#fefcf9ff'} bg={'black'}>...</Button>
            </Box>
                </MobileMenu>
        </Flex>
    )
}

// export default function NavigationBar() {
//     const [anchorElNav, setAnchorElNav] = useState(null);
//     const [anchorElUser, setAnchorElUser] = useState(null);
//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const pages = ['Gallery', 'Products', 'Favourites', 'Appointments'];
    
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };
//     return (
//         <AppBar position="fixed" sx={{ bgcolor: '#383638ff', zIndex: 50}}>
//             <Container maxWidth="xl">
//                 <Toolbar disableGutters>
//                     {/* <AndroidLogoIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
//                     <Typography sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
//                         {/* <AndroidLogoIcon/> */}
                        
//                     </Typography>
                    
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component={NavLink}
//                         to={'/'}
//                         sx={{
//                         mr: 2,
//                         display: { xs: 'none', md: 'flex' },
//                         fontFamily: 'monospace',
//                         fontWeight: 700,
//                         letterSpacing: '.3rem',
//                         color: 'inherit',
//                         textDecoration: 'none',
//                         }}
//                     >
//                         <img width={100} src="logo.png" alt="Logo" />
//                     </Typography>
//                         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                         size="large"
//                         aria-label="account of current user"
//                         aria-controls="menu-appbar"
//                         aria-haspopup="true"
//                         onClick={handleOpenNavMenu}
//                         color="inherit"
//                         >
//                         <DotsThreeCircleIcon color="#ae7407ff" weight="fill"/>
//                         </IconButton>
//                         <Menu
//                         id="menu-appbar"
//                         anchorEl={anchorElNav}
//                         anchorOrigin={{
//                             vertical: 'bottom',
//                             horizontal: 'left',
//                         }}
//                         keepMounted
//                         transformOrigin={{
//                             vertical: 'top',
//                             horizontal: 'left',
//                         }}
//                         open={Boolean(anchorElNav)}
//                         onClose={handleCloseNavMenu}
//                         sx={{ display: { xs: 'block', md: 'none' } }}
//                         >
//                         {pages.map((link, index) => (
//                                             <MenuItem 
//                                             component= {NavLink}
//                                             to={`/${link}`}
//                                             key={link} 
//                                             onClick={handleCloseNavMenu}>
//                                             <Typography sx={{ textAlign: "center" }}>{link}</Typography>
//                                             </MenuItem>
//                                         ))}
//                         </Menu>
//                     </Box>
                    
//                     <Typography sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} >
//                         {/* <AndroidLogoIcon/> */}
//                         {/* <img width={50} src="fen_s logo.png" alt="" /> */}
//                     </Typography>
                    
//                     <Typography
//                         variant="h5"
//                         noWrap
//                         component={NavLink}
//                         to={'/'}
//                         sx={{
//                         mr: 2,
//                         display: { xs: 'flex', md: 'none' },
//                         flexGrow: 1,
//                         fontFamily: 'monospace',
//                         fontWeight: 700,
//                         letterSpacing: '.3rem',
//                         color: 'inherit',
//                         textDecoration: 'none',
//                         }}
//                     >
                        
//                         <img width={100} src="logo.png" alt="Logo" />
//                     </Typography>
//                 <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
//                     {pages.map((page) => (
//                     <Button
//                                         key={page}
//                                         component={NavLink}
//                                         to={`/${page.toLowerCase()}`}
//                                         onClick={handleCloseNavMenu}
//                                         sx={{ my: 2, color: "#eda113ff", display: "block" }}
//                                     >
//                                         {page}
//                                     </Button>
//                     ))}
//                 </Box>
                
//                 </Toolbar>
//         </Container>
//     </AppBar>
//     );
// }