import { Box } from '@chakra-ui/react'
import React from 'react'

const LandingBg = ({children}) => {
    return (
        <Box bg={''}>
            <Image n src='bgs/andrea-donato-MNu0n-3BIKs-unsplash.jpg'/>
            {children}
        </Box>
    )
}

export default LandingBg
