import React, { useState } from 'react'
import api from '../../../api';
import { Box, Button, Heading, Input, Text, Link, NumberInputLabel, FieldLabel, HStack } from '@chakra-ui/react';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';


const Checkout = () => {
    const [formState, setFormState] = useState(
        {   name: "",
            phone: "",
            status: "idle",
            reference: null
        }
    )
    const [newAppointment, setNewAppointment] = useState(null)
    const navigate = useNavigate()

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((formState)=>({...formState, [name]: value}))
    }
    const startPolling = (ref) => {
    const interval = setInterval(async () => {
        try {
            const res = await api.get(`/payment/status/${ref}/`)
            const data = res.data
            if (data.status === "PENDING") {
                setFormState((formState) => ({ ...formState, status: "pending" }))
            }
            if (data.status === "SUCCESS") {
                setFormState((formState) => ({ ...formState, status: "success" }))
                clearInterval(interval)
            }
            if (data.status === "FAILED") {
                setFormState((formState) => ({ ...formState, status: "failed" }))
                clearInterval(interval)
            }
        } catch (error) {
            console.error(error)
            clearInterval(interval)
            setFormState((formState) => ({ ...formState, status: "failed" }))
        }
    }, 5000)

    setTimeout(() => {
        clearInterval(interval)
    }, 120000)
}

    const initiatePayment = async () => {
        try{
            setFormState((formState)=>({...formState, status: "initiating"}))
            const res = await api.post("/payment/initiate/", {phone: formState.phone, amount: 2, name: formState.name, selection: "tnzf7srznvqkifzorr3x"})
            const data = res.data
            const newRef = data.reference
            const appointment = data.appointment
            appointment&& setNewAppointment(appointment)
            setFormState((formState)=>({...formState, reference: newRef, status: "pending"}))
            
            console.log('NEW APPOINTMENT:...', appointment)
            startPolling(newRef)
        } catch (error) {
            if (error.response) {
      // Server responded with a status code outside 2xx
            console.error("Response error:", error.response.status, error.response.data);
            } else if (error.request) {
            // Request was made but no response received
            console.error("No response received:", error.request);
            } else {
            // Something else happened
            console.error("Error message:", error.message);
            }
            console.error("Full error object:", error); // Inspect everything
            setFormState((formState)=>({...formState, status: "failed"}))
        }
    }
    return (
        <Box textAlign={'center'} mx={4} bg={'#7c4e02ad'} p={4} border={'solid 1px #f5eded44'} borderRadius={4}>
            <Heading fontSize={14}>
                Payment steps:
            </Heading>
            <Text fontSize={12} mb={8}>
                    1. Enter your name and phone number and submit payment<br/>
                    2. Confirm the payment and get your ticket on the next page
                </Text>
            <Input name='name'
                    pl={4} pt={2}
                    value={formState.name}
                    placeholder='Enter your name'
                    onChange={handleChange}
                    m={'auto'}
                    mb={3}
            />
            <Input name='phone'
                    pl={4} pt={2}
                    value={formState.phone}
                    placeholder='Enter number'
                    onChange={handleChange}
                    m={'auto'}
            />
        <Button type='submit'
            mt={2}
            onClick={initiatePayment}
            paddingBottom={0} px={4}
            w={'100%'}
        >
            {formState.status==='success'? 'Get your ticket': 'Submit payment'}
        </Button>
        {
            formState.status==='initiating' && (<Text>Initiatiating payment...</Text>)
        }
        {
            formState.status==='pending' && (<Text>Waiting confirmation...</Text>)
        }
        {
            formState.status==='success' && (
            <Box>
                <Text>Payment successful!</Text>
                <HStack>
                    <Text onClick={()=>navigate('/bookings', {state: {newAppointment}})}>GET YOUR TICKET..</Text>
                    <ArrowRightIcon/>
                </HStack>
            </Box> 
        )
        }
        {
            formState.status==='failed' && (<Text>Payment failed!</Text>)
        }
        </Box>
    )
}

export default Checkout
