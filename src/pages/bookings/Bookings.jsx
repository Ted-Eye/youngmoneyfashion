
import React from 'react'
import BgFilter from '../../components/ui/background/BgFilter'
import { Box, Button, Flex, Heading, HStack, Input } from '@chakra-ui/react'
import { Form } from 'react-router-dom'

const Bookings = () => {
    return (
        <BgFilter>
            <Flex mt={[16, 20, 28]} alignItems={'center'} direction={'column'} h={'80%'} overflow={'hidden'} >
                <Heading fontSize={['14px', '28px', '32px', '48px']} >
                Enter your ticket number to check booking details
            </Heading>
            <Box >
                <HStack mt={5} gap={0} as={'form'} w={'100%'}>
                    <Input border={'solid 1px #995e12ff'} >
                    </Input>
                    <Button ml={-10} w={20} bg={'#995e12ff'}>
                        Search
                    </Button>
                </HStack>
                <Box>
                    <Heading mt={20} >
                        You currently have no appointments or orders !
                    </Heading>
                </Box>
            </Box>
            </Flex>
        </BgFilter>
    )
}

export default Bookings
