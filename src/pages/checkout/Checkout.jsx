import React, { useState } from 'react'
import api from '../../../api';
import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';

const Checkout = () => {
    // const [phone, setPhone] = useState("");
    // const [satatus, setStatus] = useState("idle")
    // const [reference, setReference] = useState(null)
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
        const interval = setInterval(async ()=>{
            try{
                const res = await api.get(`/peyment/status/${ref}/`)
                const data = await res.data
                if (data.status === "SUCCESS"){
                    setFormState((formState)=>({...formState, status: "pending"}))
                    clearInterval(interval)
                }
                if (data.status === "FAILED") {
                    setFormState((formState)=>({...formState, status: "failed"}))
                    clearInterval(interval)
                }
            }catch (error) {
                console.error(error)
                clearInterval(interval)
                setFormState((formState)=>({...formState, status: "failed"}))
            }
        }, 5000);

        setTimeout(()=>{
            clearImmediate(interval)
        }, 120000)
    }
    const initiatePayment = async () => {
        try{
            setFormState((formState)=>({...formState, status: "initiating"}))
            const res = await api.post("/payment/initiate/", {phone: formState.phone, amount: 10})
            const data = res.data
            const newRef = data.reference
            setFormState((formState)=>({...formState, reference: newRef, status: "pending"}))
            
            startPolling(newRef)
        } catch (error) {
            console.log("FULL ERROR:", error);
            if (error.response) {
                console.log("STATUS:", error.response.status);
                console.log("DATA:", error.response.data);
            } else if (error.request) {
                console.log("NO RESPONSE RECEIVED:", error.request);
            } else {
                console.log("ERROR MESSAGE:", error.message);
            }
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
