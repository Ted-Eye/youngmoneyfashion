import { useEffect } from 'react';
import NavBar from '../../components/ui/navbar/NavBar'
import {Box, Button, Flex, Heading, HStack, Image, SimpleGrid, Span, Text} from "@chakra-ui/react";
import BgFilter from '../../components/ui/background/BgFilter';
import { AlignHorizontalDistributeEndIcon, FastForwardIcon, GalleryHorizontal, LucideAlarmSmoke, MessageSquareDashedIcon, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LandingBg from '../../components/ui/background/LandingBg';
import { OFFERS } from '../../KONSTANTS/offers';
import { bold } from '@cloudinary/url-gen/qualifiers/fontWeight';
// import {video} from '../../assets/lv_0_20260312012436.mp4'

export default function Landing() {
    const navigate = useNavigate()
    const handleNaavigate = (route)=>{
        navigate(route)
    }
    const showList = OFFERS
    useEffect(()=>{
        
    },[])

    return (
        <BgFilter >
            
            <Box position={'sticky'} top={[12, 20]} mt={28}
                zIndex={2} overflow={'overlay'}>
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
            <HStack gap={2} position={'relative'}>
                <Box h={[200, 250, 350]}   maxWidth={'50%'}              
                        bg={'rgba(199, 179, 134, 0.02)'} 
                        borderTopEndRadius={500}  
                        borderBottomEndRadius={500}>
                    {/* <Heading mt={6} borderBottom={'solid 2px #874e4ebc'} px={2} >
                            Style with Young Money Fashion.
                        </Heading> */}
                </Box>
                <Box borderRadius={'100%'} position={'absolute'} top={{base:-4, sm: '-79px', md: '-10'}} right={12} overflow={'hidden'}>
                    <Image 
                    w={{base: 250, sm: 450, md: 500}}
                    src='intro3.png' opacity={'40%'}/>
                </Box>
            </HStack>
            <Box>
                
                <Box h={[600, 800, 1200]} backgroundImage={"url('bgs/bg4.avif')"} backgroundSize={'cover'} backdropFilter={'revert'} backgroundAttachment={'fixed'} backgroundRepeat={'no-repeat'} backgroundBlendMode={'difference'} color={'#1a2f4da1'}>
                    <Box textAlign={'center'}  width={'100%'} bg={'#11183cc8'}>
                        <Box bg={'#ffffffff'}  borderBottomRadius={'50%'} borderTop={'none'} mx={0} borderBottomLeftRadius={'150px'} borderBottomRightRadius={'150px'} pb={10} borderBottom={'solid 18px #070707ff'}>
                            <Heading p={4} fontSize={24}>
                            You're just a few clicks from 
                                <Span fontWeight={900} pl={1}
                                textTransform={'uppercase'}letterSpacing={6} color={'#00000074'}>rejuvenation!</Span>
                            
                        </Heading>
                        <Text>Let's walk the path...</Text>
                        </Box>
                        <SimpleGrid columns={[1, 2, 3]} 
                                    // columnSpan={[12, 6, 4, 3]}
                                    gap={4} px={4}
                                    mb={4} mt={-10} >
                            {
                                showList.map((item)=><Box key={item.id} bg={'#ed830b6b'}
                                color={'black'} display={'flex'} justifyContent={'center'}  alignItems={'center'} height={['300px, 400px, 600px 750px']}
                                borderRadius={'5%'} pb={2}
                                flexDirection={'column'} borderBottomRadius={70}
                                >
                                    <HStack gap={4} mt={8} overflow={'hidden'} py={0} mb={2} borderRadius={70} pr={2}>
                                        <Image 
                                        w={'74px'} borderRadius={'45%'} padding={2}
                                        src={item.img}/>
                                        <Heading color={'white'} mb={8} mt={8} letterSpacing={2} textTransform={'uppercase'}>{item.title}</Heading>
                                    </HStack>
                                    <Text mx={4} pb={2} overflow={'hidden'}>
                                            {item.text}
                                        </Text>
                                    <Button colorScheme={'orange'} size={'lg'} fontWeight={'bold'} borderColor={'#f39703ff'} bg={'black'} color ={'gold'}borderRadius={'25px'} px={4} variant={'outline'} onClick={()=>handleNaavigate(item.route)} mt={4}>{item.action} 
                                        <Image src='arrow.svg'
                                            w={8}
                                        />
                                    </Button>
                                </Box>)
                            }
                        </SimpleGrid>
                    </Box>
                </Box>
            </Box>
        </BgFilter>
    )
}
