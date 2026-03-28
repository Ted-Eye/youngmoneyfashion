import React, { useState } from 'react'
import api from '../../../api';
import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';

const Checkout = () => {
    const [formState, setFormState] = useState(
        {
            phone: "",
            status: "idle",
            reference: null
        }
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((formState)=>({...formState, [name]: value}))
    }
    const startPolling = (ref) => {
    const interval = setInterval(async () => {
        try {
            const res = await api.get(`/payment/status/${ref}/`)
            const data = res.data
            console.log(res)
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
            const res = await api.post("/payment/initiate/", {phone: formState.phone, amount: 2, name: "John Doe", hairstyle: "tnzf7srznvqkifzorr3x"})
            const data = res.data
            const newRef = data.reference
            const appointment = data.appointment
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
        <Box>
            <Heading>
                PAYMENT GATEWAY
            </Heading>
            <Input name='phone'
                    value={formState.phone}
                    onChange={handleChange}
            />
        <Button type='submit'
            onClick={initiatePayment}
        >
            Submit payment
        </Button>
        {
            formState.status==='initiating' && (<Text>Initiatiating payment...</Text>)
        }
        {
            formState.status==='pending' && (<Text>Waiting confirmation...</Text>)
        }
        {
            formState.status==='success' && (<Text>Payment successful!</Text>)
        }
        {
            formState.status==='failed' && (<Text>Payment failed!</Text>)
        }
        </Box>
    )
}

export default Checkout
