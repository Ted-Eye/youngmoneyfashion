import { useEffect } from 'react';
import NavBar from '../../components/ui/navbar/NavBar'
import {Box, Button, Container, Flex, Heading, HStack, Image, SimpleGrid, Span, Stack, Text} from "@chakra-ui/react";
import BgFilter from '../../components/ui/background/BgFilter';
import { AlignHorizontalDistributeEndIcon, FastForwardIcon, GalleryHorizontal, LucideAlarmSmoke, MessageSquareDashedIcon, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LandingBg from '../../components/ui/background/LandingBg';
import { OFFERS } from '../../KONSTANTS/offers';
import { bold } from '@cloudinary/url-gen/qualifiers/fontWeight';
import { DEFAULT_REVIEWS } from '../../KONSTANTS/reviews';
// import {video} from '../../assets/lv_0_20260312012436.mp4'

export default function Landing() {
    const navigate = useNavigate()
    const handleNaavigate = (route)=>{
        navigate(route)
    }
    const showList = OFFERS
    const reviews = DEFAULT_REVIEWS

    return (
        <BgFilter >
            
            <Box position={'sticky'} top={[12, 20]} mt={'78px'}
                zIndex={2} overflow={'clip'}>
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
            <HStack gap={2} position={'relative'} overflow={'clip'}>
                <Box h={[200, 250, 350]}   maxWidth={'50%'}              
                        bg={'#11183c76'} 
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
                    
                    <Container w={'100%'} alignItems={'center'} justifyContent={'center'} display={'flex'} color={'#ffffffff'} bg={'#11183c76'}>
                        <Stack gap={[18, 28]}  m={['12px', '38px']} direction={['column', 'row']} borderTop={'solid 4px'} pt={6} mt={8}>
                            <Box textAlign={'center'}>
                                <Heading pb={4}>
                                    Our Philosophy:
                                </Heading>
                                <Text>
                                We are a dedicated team of hairstylists and estheticians. Our goal is to deliver excellent service to the best of your satisfaction. We treat you like royalty because you are ! 
                            </Text>
                            </Box>
                            <Box textAlign={'center'} pb={4}>
                                <Heading>
                                    Our team:
                                </Heading>
                                <Text>
                                Top skilled fashion artists in the city.
                                Services we offer:
                                Hairstyling (Male and Female)
                                Manicure and pedicure.
                                Massage and sauna.
                                Facial treatment
                            </Text>
                            </Box>
                        </Stack>
                    </Container>
                    <Box textAlign={'center'}  width={'100%'} bg={'#11183c76'}>
                        <Box bg={'#ffffffc8'}  borderBottomRadius={'50%'} mx={0} borderBottomLeftRadius={'150px'} borderBottomRightRadius={'150px'} pb={10}>
                            <Heading p={4} fontSize={24}>
                            You're just a few clicks from 
                                <Span fontWeight={900} pl={1}
                                textTransform={'uppercase'}letterSpacing={6} color={'#00000038'}>rejuvenation!</Span>
                            
                        </Heading>
                        <Text>Let's walk the path...</Text>
                        </Box>
                        <SimpleGrid columns={[1, 2, 3]} 
                                    // columnSpan={[12, 6, 4, 3]}
                                    gap={4} px={2}
                                    mt={-4} >
                            {
                                showList.map((item)=><Box key={item.id} border={'solid 1px #f39703d0'}
                                color={'#f39703d0'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={['300px, 400px, 600px 750px']}
                                borderRadius={'5%'} pb={2}
                                flexDirection={'column'} 
                                >
                                    <Heading color={'#f39703d0'} mb={2} mt={4} letterSpacing={2} textTransform={'uppercase'}>{item.title}</Heading>
                                    <Stack justifyContent={'center'} alignItems={'center'} gap={2} px={1} overflow={'hidden'}>
                                        <Image src={item.img} w={200} h={200} borderRadius={'170px'}/>
                                        <Text mx={4} pb={1} overflow={'hidden'} >
                                            {item.text}
                                        </Text>
                                    </Stack>
                                    
                                    <Button colorScheme={'orange'} size={'lg'} fontWeight={'bold'} border={'solid 1px #f397036c'} bg={'white'} color ={'black'}borderRadius={'25px'} px={4} variant={'outline'} onClick={()=>handleNaavigate(item.route)} mt={2}>{item.action} 
                                        <Image src='arrow.svg'
                                            w={6} color={'#1e1c18f7'}
                                        />
                                    </Button>
                                </Box>)
                            }
                        </SimpleGrid>
                    </Box>
                </Box>
            </Box>
            <Box backgroundImage={"url('bgs/bg4.avif')"} backgroundSize={'cover'} backdropFilter={'revert'} backgroundAttachment={'fixed'} backgroundRepeat={'no-repeat'} backgroundBlendMode={'difference'} textAlign={'center'} w={'98%'} bg={'#2d2dcf28'} borderTopRadius={15} mx={'auto'} borderTop={'solid 1px'}>
                <Heading fontSize={18} mt={12}>What people are saying about us</Heading>
                <Stack>
                    {
                    reviews.map((review)=>(
                        <Box key={review.id} borderLeft={'solid 4px #a8661181'} mt={6} py={2} ml={4} px={4} fontSize={16}>
                            <Text>
                                {review.msg}
                            </Text>
                            <Text>
                                <i>
                                    {review.name}, { review.proffesion}
                                </i>
                            </Text>

                        </Box>
                    ))
                }
                </Stack>
            </Box>
            <Box>
                <Heading>
                    FAQ
                </Heading>
            </Box>
        </BgFilter>
    )
}
