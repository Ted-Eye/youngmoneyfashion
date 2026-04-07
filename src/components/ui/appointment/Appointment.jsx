import { Box, Button, CloseButton, Container, Dialog, Heading, HStack, Image, Input, Portal, RadioGroup, Stack, Text, VStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import DatePicker, { MyTimePicker } from "../../DatePicker"
import MyDatePicker from "../../DatePicker"
import { useState } from "react"

export default function Appointment({item}) {
    
    const [cart, setCart] = useState({
        item: item,
        date: (() => {
            const today = new Date();
            const year = String(today.getFullYear()).slice(-2);
            const month = String(today.getMonth() + 1).padStart(2, 0);
            const day = String(today.getDate()).padStart(2, 0);
            return `${year}:${month}:${day}`;
        })(),
        time: "15:00",
        venue: "salon"
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCart((cart)=>({...cart, [name]: value}))
    }
    const handleValueChange = (name) => (value) => {
        // Handle both raw values and objects with value property (like RadioGroup)
        const actualValue = value && typeof value === 'object' && 'value' in value ? value.value : value;
        setCart((cart)=>({...cart, [name]: actualValue}))
    }
    const navigate = useNavigate()
    const handlleClick = (e)=>{
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        navigate('/checkout', {state: cart})
    }
    console.log(cart)
    return (
    <>
        <Dialog.Root>
        <Dialog.Trigger asChild>
            <Button variant="outline" size="sm" border={'solid 1px #948264ff'} width={'80%'} borderRadius={50} color={'white'} mt={2} bg={'#835306c3'}
            >
            Book appointment
            </Button>
        </Dialog.Trigger>
        <Portal>
            <Dialog.Backdrop bg={'#6d510cf3'}/>
            <Dialog.Positioner position={'fixed'} top={[0, 20]}>
            <Dialog.Content bg={'#d5dae1ff'}>
                <Dialog.Header>
                    <VStack py={1} gap={1} w={['100%']} bg={'#000000ff'}>
                        <Image src="doctor.png" w={120} borderBottom={'solid 1px'} pb={1}/>
                        <Dialog.Title  color={'white'} fontSize={[16, 20]} >Schedule your appointment</Dialog.Title>
                    </VStack>
                </Dialog.Header>

                <Dialog.Body py={1} px={2} color={'#835306ff'} m={2}>
                    <Heading mb={1} fontSize={[14, 16]}>Choice preview:</Heading>
                    <HStack w={'100%'} gap={2} border={'solid 0.5px #5750247b'} borderRadius={4} p={2}>
                        <Image
                    w={100} h={['100px', '140px']} borderRadius={100}
                    src={item.image_url}
                    border={'none'}
                    
                />
                        <Box px={1}>
                            
                            <Text fontSize={[14, 18]}>{item.name}</Text>
                            <Text fontSize={[14, 18]}>
                                Price: {item.price} XAF
                            </Text>
                            <Text fontSize={[14, 18]}>
                                Service Duration: {item.treatment_duration} minutes
                            </Text>
                        </Box>
                    </HStack>
                    <HStack alignItems={'center'} justifyContent={'left'} mt={[1]} gap={[4]}>
                    <Heading fontSize={[14, 16]} >Venue:</Heading>
                    <Box>
                                <RadioGroup.Root variant={'solid'} colorPalette={'#575024d5'}
                                name="venue"
                                value={cart.venue}
                                onValueChange={handleValueChange('venue')}
                                mt={2} border={'solid 0.5px #5750247b'} borderRadius={4} p={2}>
                                    <HStack gap={4}>
                                        <RadioGroup.Item value="salon" >
                                            <RadioGroup.ItemHiddenInput/>
                                            <RadioGroup.ItemIndicator/>
                                            <RadioGroup.ItemText fontSize={[14, 16]}>
                                                Salon
                                            </RadioGroup.ItemText>
                                        </RadioGroup.Item>
                                        <RadioGroup.Item value="home" minW={'120px'}>
                                            <RadioGroup.ItemHiddenInput/>
                                            <RadioGroup.ItemIndicator/>
                                            <RadioGroup.ItemText fontSize={[14, 16]}>
                                                My location
                                            </RadioGroup.ItemText>
                                        </RadioGroup.Item>
                                    </HStack>
                                </RadioGroup.Root>
                                {/* <Heading fontSize={18}>
                                    Service  location: At the salon.
                                </Heading> */}
                            </Box>
                    </HStack>
                    <Heading mt={2} fontSize={16}>Schedule:</Heading>
                <VStack  border={'solid 0.5px #5750247b'} borderRadius={4} mt={1} pb={2} mb={2}>
                
                    <Box py={1}>
                </Box>
                <Stack direction={['column', 'column']} alignItems={'left'} gap={4} w={'100%'} px={4} mb={2}>
                    <MyDatePicker onChange={handleValueChange('date')} name="date" value={cart.date}/>
                    <MyTimePicker onChange={handleValueChange('time')} name="time" value={cart.time}/>
                </Stack>
                </VStack>
                </Dialog.Body>
                <Dialog.Footer >
                <Dialog.ActionTrigger asChild>
                    <Button variant="outline" px={6}border={'none'} color={'#fa0808ff'}>Cancel</Button>
                </Dialog.ActionTrigger>
                <Button variant={'outline'} px={6} border={'none'} color={'#835306ff'} bg={''} onClick={handlleClick}>{ 'Continue' }</Button>
                </Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" color={'#fa0808ff'}/>
                </Dialog.CloseTrigger>
            </Dialog.Content>
            </Dialog.Positioner>
        </Portal>
        </Dialog.Root>
    </>
    )
}
