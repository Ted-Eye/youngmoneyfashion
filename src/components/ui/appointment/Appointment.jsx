import { Box, Button, CloseButton, Container, Dialog, Heading, HStack, Image, Portal, Text, VStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import DatePicker from "../../DatePicker"

export default function Appointment({item}) {
    
    const navigate = useNavigate()
    const handlleClick = ()=>{
        navigate('/checkout')
    }
    return (
    <>
        <Dialog.Root>
        <Dialog.Trigger asChild>
            <Button variant="outline" size="sm" border={'solid 1px #948264ff'} width={'80%'} borderRadius={50} color={'white'} mt={2} bg={'#835306ff'}
            >
            Book appointment
            </Button>
        </Dialog.Trigger>
        <Portal>
            <Dialog.Backdrop bg={'#e5e8ebed'}/>
            <Dialog.Positioner position={'fixed'} top={20}>
            <Dialog.Content w={'90%'} alignItems={'center'} py={4} bg={'#0d1620ff'}>
                <Dialog.Header>
                    <VStack mt={1} gap={"0.2"}>
                        <Image src="doctor.png" w={120} borderBottom={'solid 1px'} pb={2}/>
                        <Dialog.Title  color={'white'} fontSize={20} pt={2}>Schedule your appointment</Dialog.Title>
                    </VStack>
                </Dialog.Header>

                <Dialog.Body py={1} px={2} color={'#835306ff'}>
                    <Heading mb={1} fontSize={16}>Choice preview:</Heading>
                    <HStack w={'100%'} gap={4} border={'solid 0.5px #5750247b'} borderRadius={4}>
                        <Image
                    h={'120px'}
                    src={item.image}
                    borderBottom={'none'}
                    borderTopRadius={4}
                    
                />
                        <Box px={2}>
                            
                <Heading fontSize={14}>{`Execution: ${ item.treatment_duration } `}</Heading>
                <Heading fontSize={18}>
                    Price: {item.price} XAF
                </Heading>
                        </Box>
                    </HStack>
                    <Heading mt={6} fontSize={16}>Schedule:</Heading>
                <VStack  border={'solid 0.5px #5750247b'} borderRadius={4} mt={1} pb={2} mb={2}>
                
                    <Box py={4}>
                </Box>
                <Box>
                    <label htmlFor="time">Time: </label>
                    <input type="time" />
                </Box>
                </VStack>
                </Dialog.Body>
                <Dialog.Footer >
                <Dialog.ActionTrigger asChild>
                    <Button variant="outline" px={6}border={'none'} color={'#b39a8170'}>Cancel</Button>
                </Dialog.ActionTrigger>
                <Button variant={'outline'} px={6} border={'none'} color={'#835306ff'} bg={''} onClick={handlleClick}>{ '>- Continue' }</Button>
                </Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
                </Dialog.CloseTrigger>
            </Dialog.Content>
            </Dialog.Positioner>
        </Portal>
        </Dialog.Root>
    </>
    )
}
