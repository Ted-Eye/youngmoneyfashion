import { useEffect } from 'react';
import NavBar from '../../components/ui/navbar/NavBar'
import {Box, Button, Flex, Heading, HStack, Image, SimpleGrid, Text} from "@chakra-ui/react";
import BgFilter from '../../components/ui/background/BgFilter';
import { AlignHorizontalDistributeEndIcon, LucideAlarmSmoke } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LandingBg from '../../components/ui/background/LandingBg';
// import {video} from '../../assets/lv_0_20260312012436.mp4'

export default function Landing() {
    const navigate = useNavigate()
    const handleGallery = ()=>{
        navigate('/gallery')
    }
    useEffect(()=>{
        
    },[])

    return (
        <BgFilter>
            <Box position={'sticky'} top={[12, 20]} mt={28}
                zIndex={2}                 >
                <Heading 
                    
                    as="h1"
                    letterSpacing={'6px'}
                    fontWeight='bold'
                    fontSize={[28, 38, 60]}
                    textAlign={'center'} pb={0} mb={0} 
                    >
                    Represent your star 
                </Heading>
                <Text textAlign={'center'} mx={16} my={2} 
                fontSize={[14, 22]} letterSpacing={2} mt={2}
                fontWeight={'bold'}> CONFIDENTLY! </Text>    
            </Box>

            <Box>
                <Box h={[200, 250, 350]}   maxWidth={'50%'} position={'sticky'} top={18}                
                        bg={'rgba(199, 179, 134, 0.1)'} 
                        borderTopEndRadius={500} borderRight={'solid 38px #8f5628ff'} 
                        borderBottomEndRadius={500}>
                    <Heading mt={6} borderBottom={'solid 2px #874e4ebc'} px={2} >
                            Style with Young Money Fashion.
                        </Heading>
                </Box>
                
                <Box h={[600, 800, 1200]} backgroundImage={"url('bgs/andrea-donato-MNu0n-3BIKs-unsplash.jpg')"} backgroundPosition={'center'} backdropFilter={'revert'}>
                    <Box textAlign={'center'}  color={'white'} fontSize={24} fontWeight={'bold'} letterSpacing={2} bg={'#181d28b6'} h={'100%'}>
                        
                        <SimpleGrid columns={[1, 2, 4]} 
                                    columnSpan={{base:12}}
                                    gap={4} 
                                    alignItems={'center'} mt={-2} zIndex={200}>
                            <Text fontSize={14} letterSpacing={2} mt={2} bg={'rgba(224, 123, 7, 0.15)'}
                                fontWeight={'bold'} mx={4}  border={'solid 2px #906767bc'} borderRadius={12} p={4} borderTop={'solid 4px white'}> Explore our collection of trendy and stylish cuts, twists, dreadlocksand more. </Text>
                            <Text fontSize={14} letterSpacing={2} mt={2} bg={'rgba(224, 123, 7, 0.15)'}
                                fontWeight={'bold'} mx={4} color={'#ff990aff'} border={'solid 2px #906767bc'} borderRadius={12} p={4}> Elevate your self confidence with one of our curated selection of beautiful hairstyles. </Text>
                                <Text fontSize={14} letterSpacing={2} mt={2} bg={'rgba(224, 123, 7, 0.15)'}
                                fontWeight={'bold'} mx={4} color={'#ff990aff'} border={'solid 2px #906767bc'} borderRadius={12} p={4}> Elevate your self confidence with one of our curated selection of beautiful hairstyles. </Text>
                                <Text fontSize={14} letterSpacing={2} mt={2} bg={'rgba(224, 123, 7, 0.15)'}
                                fontWeight={'bold'} mx={4} color={'#ff990aff'} border={'solid 2px #906767bc'} borderRadius={12} p={4}> Elevate your self confidence with one of our curated selection of beautiful hairstyles. </Text>
                        </SimpleGrid>
                        <HStack justifyContent={'center'} mt={4} gap={6}>
                            <Button colorScheme={'orange'} size={'lg'} fontWeight={'bold'} borderColor={'#f39703ff'} letterSpacing={2} borderRadius={10} px={4} variant={'outline'} onClick={handleGallery}> Take a tour </Button>
                            <Button>Shop products</Button>
                        </HStack>
                    </Box>
                </Box>
            </Box>
        </BgFilter>
    )
}
