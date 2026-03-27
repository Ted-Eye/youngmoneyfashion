import {Container} from '@chakra-ui/react'
import React from 'react'

export default function BgFilter({children}) {
    return (
        <Container bg={'#0d1620da'} h={'100dvh'}
                bgSize="cover" maxWidth={'100%'} p={0}m={0}>
                    {children}
        </Container>
    )
}
