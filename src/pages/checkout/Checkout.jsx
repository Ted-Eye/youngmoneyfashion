import React, { useEffect, useState } from 'react'
import api from '../../../api';
import { Box, Button, Heading, Input, Text, Link, NumberInputLabel, FieldLabel, HStack, InputGroup } from '@chakra-ui/react';
import {Link as RouterLink, useLocation, useNavigate} from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';


const Checkout = ({method}) => {
    const [loading, setLoading] = useState(false)
    const [formState, setFormState] = useState(
        {   name: "",
            phone: "",
            status: "idle",
            reference: null
        }
    )
    const {state} = useLocation()
    const cart = state
    console.log('client:...', formState, 'cart:...', cart)
    // console.log('ITEM:...', state)
    const TransactionState = formState.status === "initiating" ? "Initiating payment..." : formState.status === "pending" ? "Waiting confirmation..." : formState.status === "success" ? "Payment completed successfully!" : formState.status === "failed" ? "Payment failed!" : ""
    const [newAppointment, setNewAppointment] = useState(null)
    const navigate = useNavigate()

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((formState)=>({...formState, [name]: value}))
    }
    useEffect(()=>{
        if(formState.status === "success" && newAppointment){
            navigate('/bookings', {state: {newAppointment, TransactionState}})
        }
    },[formState.status])
    const startPolling = (ref) => {
    const interval = setInterval(async () => {
        try {
            const res = await api.get(`/payment/status/${ref}/`)
            const data = res.data;
            console.log('API Response:...', data)
            if (data.status === "PENDING") {
                setFormState((formState) => ({ ...formState, status: "pending" }))
            }
            if (data.status === "SUCCESS") {
                setFormState((formState) => ({ ...formState, status: "success" }))
                // setLoading(false)
                clearInterval(interval)
                navigate('/bookings', {state: {newAppointment, TransactionState}})
            }
            if (data.status === "FAILED") {
                setFormState((formState) => ({ ...formState, status: "failed" }))
                setLoading(false)
                clearInterval(interval)
            }
        } catch (error) {
            console.error(error)
            clearInterval(interval)
            setFormState((formState) => ({ ...formState, status: "failed" }))
            setLoading(false)
        }
    }, 5000)

    setTimeout(() => {
        clearInterval(interval)
        setFormState((formState) => ({ ...formState, status: "failed" }))
        setLoading(false)
    }, 120000)
}

    const initiatePayment = async () => {
            setLoading(true)
        try{
            setFormState((formState)=>({...formState, status: "initiating"}))

            // Convert date and time strings to datetime objects for Django backend
            const appointmentDate = cart.date ? (() => {
                // Convert YY:MM:DD to YYYY-MM-DD
                const [yy, mm, dd] = cart.date.split(':');
                return `20${yy}-${mm}-${dd}`;
            })() : null;

            const appointmentTime = cart.time ? `${cart.time}:00` : null;

            const res = await api.post("/payment/initiate/", {
                phone: `237${formState.phone}`,
                amount: 2,
                name: formState.name,
                selection: cart.item.public_id,
                date: appointmentDate,  // Send as date object
                time: appointmentTime,  // Send as time object
                venue: cart.venue
            })
            const data = res.data
            const newRef = data.reference
            const appointment = data.appointment
            appointment&& setNewAppointment(appointment)
            setFormState((formState)=>({...formState, reference: newRef, status: "pending"}))

            console.log('NEW APPOINTMENT:...', appointment)
            startPolling(newRef)
        } catch (error) {
            if (error.message==='Network Error' || error.message==='timeout exceeded' ) {
                alert('No internet. Check your connection and try again')
                setLoading(false)
                setFormState((formState) => ({ ...formState, status: "idle" }))
            }
            
            else if (error.response) {
      // Server responded with a status code outside 2xx
                console.error("Response error:", error.response.status, error.response.data);
                setLoading(false)
            } else {
            // Something else happened
                console.error("Error:", error);
                setLoading(false)
            }
            console.error("Full error object:", error); // Inspect everything
        }
    }
    
    return (
        <>
            <Heading mt={4} fontSize={18}  borderBottom={'solid 2px #c8630cb2'} >
                {`Paying ${cart.item.price} CFA with ${method.short}`}
            </Heading>
            <Box textAlign={'center'} mx={6} bg={'#d5dae1ff'} p={4} border={'solid 1px #853e3e49'} borderRadius={4} pb={1} mt={[4, 6]}>

            <Input name='name'
                    pl={1} pt={2}
                    pb={0}
                    color={'#1f1c1c6b'}
                    value={formState.name}
                    placeholder={method.id===3? 'Enter wallet tag or Affair Nkap username' : 'Enter your name'}
                    onChange={handleChange}
                    m={'auto'}
                    mb={3}
            />
            {
                method.id===1 || method.id===2?
                <InputGroup startElement='+237' >
                    <Input name='phone'
                    value={formState.phone}
                    placeholder={method.id===1? 'Enter your MoMo number': 'Enter your OM number'}
                    color={'#1f1c1c6b'}
                    onChange={handleChange}
                    m={'auto'}
            />
                </InputGroup>
                
            : null
            }
        <Button type='submit'
            disabled={loading}
            mt={4}
            onClick={initiatePayment}
            paddingBottom={0} px={4}
            w={'100%'} bg={loading? '#575252ff': '#7c4e02ad'} color={'#ffde0bff'} border={'solid 1px #595050c5'}
        >
        {loading ? 'Processing...' : 'Submit payment'}
        </Button>
        <Text mt={4} color={`${formState.status==='failed'&& '#de3939ff'}`} fontSize={16}>{TransactionState}</Text>
        </Box>
        </>
    )
}

export default Checkout
