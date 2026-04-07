
import React from 'react'
import BgFilter from '../../components/ui/background/BgFilter'
import { Box, Button, Flex, Heading, HStack, Input, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

const Bookings = () => {
    const {state} = useLocation()
    const appointment = state?.newAppointment
    return (
        <BgFilter>
            {
                        appointment? 
                            (<Box mt={20} textAlign={'center'}>
                                <Heading>
                                    Thanks for patronizing !
                                </Heading>
                                <Text>
                                    See you on appointment date
                                </Text>
                                <Heading mt={4} fontSize={22}>
                                    Appointment details:
                                    </Heading>
                                <Box mt={8} display={'flex'} flexDirection={'column'} gap={2} alignItems={'center'} border={'solid 1px #995f127a'} py={8} mx={6} borderRadius={4} bg={'#4b4a47e6'} color={'#ffffffff'}>
                                    
                                    <Text>{`Ticket number: ${appointment.ticket_number}`}</Text>
                                    <Text>{`Customer name: ${appointment.bearer}`}</Text>
                                    <Text>{`Scheduled date: ${new Date(appointment.scheduled_date).toLocaleDateString()}`}</Text>
                                    <Text>{`Time: ${appointment.scheduled_time}`}</Text>
                                </Box>
                                <Box>
                                    <Button mt={8} bg={'#995e12ff'} color={'white'} onClick={()=>window.print()} px={4}>
                                        Download ticket
                                    </Button>
                                </Box>
                            </Box>)
                            : (<Flex mt={[16, 20, 28]} alignItems={'center'} direction={'column'} h={'80%'} overflow={'hidden'} >
                <Heading fontSize={['14px', '28px', '32px', '48px']} >
                Enter your ticket number to check booking details
            </Heading>
            <Box alignContent={'center'} textAlign={'center'}>
                <HStack mt={5} gap={0} as={'form'} w={'80%'}>
                    <Input border={'solid 1px #7c4e02ad'} borderRadius={'1px'} ml={10}>
                    </Input>
                    <Button ml={-20} w={20} bg={'#7c4e02ad'}>
                        Search
                    </Button>
                </HStack>
                <Box>
                    <Heading mt={20} >
                        You currently have no appointments or orders !
                    </Heading>
                </Box>
            </Box>
            </Flex>)
                    }
            
        </BgFilter>
    )
}

export default Bookings
