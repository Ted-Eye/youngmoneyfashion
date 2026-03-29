import React, { useState } from 'react'
import api from '../../../api';
import { Box, Button, Heading, Input, Text, Link, NumberInputLabel, FieldLabel, HStack } from '@chakra-ui/react';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';


const Checkout = () => {
    const [formState, setFormState] = useState(
        {
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
            const res = await api.post("/payment/initiate/", {phone: formState.phone, amount: 2, name: "John Doe", selection: "tnzf7srznvqkifzorr3x"})
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
            <Heading>
                Enter you name and number 
            </Heading>
            
            <Input name='phone'
                    pl={4} pt={2}
                    value={formState.phone}
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
