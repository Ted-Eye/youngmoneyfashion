import React, { useState } from 'react'
import NavBar from '../../components/ui/navbar/NavBar'
import { Box, Button, Container, Heading, HStack, Image, Text } from '@chakra-ui/react'
import BgFilter from '../../components/ui/background/BgFilter'
import DatePicker from '../../components/DatePicker'
import Checkout from '../checkout/Checkout'
import {PAYMENT_OPTIONS} from '../../KONSTANTS/offers'
export default function addBooking() {
    const [selected, setSelected] = useState(1)
    const [payments, setPayments] = useState(PAYMENT_OPTIONS)

    const handlSelect = (id) => {
        setSelected(id)
    }
    
    const paymentMethod = payments.filter((p)=>p.id===selected)[0]
    console.log(paymentMethod)
    return (
        <BgFilter>
            <Container mt={'68px'} display={'flex'} alignItems={'center'} flexDirection={'column'} gap={0}>
                <Heading color={'white'} fontSize={20}>
                    Complete Your Booking
                </Heading>
                <Box px={4} fontSize={14} mt={'2px'} >
                    <Text>
                        Select preferred payment method and continue
                    </Text>
                    <HStack gap={3} mt={2} justifyContent={'center'}>
                        {
                            payments.map((payment)=>(
                                <Box key={payment.id} borderBottom={payment.id===selected? 'solid 4px #ffffff8d' : 'none'} pb={3} h={'40px'} overflow={'hidden'} px={2} mb={2}>
                                    <Button
                                onClick={()=>handlSelect(payment.id)} overflow={'hidden'}>
                                    <Image src={payment.img} w={50} />
                                </Button>
                                </Box>    
                            ))
                        }
                    </HStack>
                    {/* <DatePicker/> */}
                </Box>
                <Checkout method = {paymentMethod}/>
            </Container>
        </BgFilter>
    )
}
