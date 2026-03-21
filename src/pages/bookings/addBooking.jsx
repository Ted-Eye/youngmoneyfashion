import React, { useState } from 'react'
import NavBar from '../../components/ui/navbar/NavBar'
import { Box, Container, Heading, HStack, Image, Text } from '@chakra-ui/react'
import BgFilter from '../../components/ui/background/BgFilter'
import DatePicker from '../../components/DatePicker'

export default function addBooking() {
    const [selected, setSelected] = useState(1)
    const tabs = [
        {momo: 
            {
            id: 1,  name: 'MTN Mobile Money', dp: ''
            }
        }, 
        {
            om: {id: 2, name: 'Orange Money', dp: ''}
        },
        {
            nkap: {id: 3, name: 'Nkap Pay', dp: ''}
        }
    ]
    const handlSelect = (tab) => {
        setSelected(tab)
    }
    return (
        <BgFilter>
            <Container mt={100} display={'flex'} alignItems={'center'} flexDirection={'column'}>
                <Heading color={'white'} fontSize={20}>
                    Complete Your Booking
                </Heading>
                <Box px={4} fontSize={16} mt={4} pb={8}>
                    <Text mb={4}>
                        Select preferred payment method and continue
                    </Text>
                    <HStack gap={2} mt={5}>
                        <Box border={'solid 1px #e48b055f'}
                        p={'4px 12px'} borderRadius={8}>
                            <Image src='logo.png' w={100}/>
                        </Box>
                        <Box 
                        p={'4px 12px'}>
                            <Image src='Screenshot_2026-03-10-14-02-24-565_com.android.chrome-edit.jpg' w={100}/>
                        </Box>
                        <Box 
                        p={'4px 12px'}>
                            <Image src='Screenshot_2026-03-10-14-03-57-738_com.android.chrome-edit.jpg' w={140} h={'80px'}/>
                        </Box>
                    </HStack>
                    {/* <DatePicker/> */}
                </Box>
            </Container>
        </BgFilter>
    )
}
