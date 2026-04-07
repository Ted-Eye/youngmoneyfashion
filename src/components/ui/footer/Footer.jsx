
import React from 'react'
import BgFilter from '../background/BgFilter'
import { Box, Button, HStack, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import {FOOTE_NOTES, DEVELOPER} from '../../../KONSTANTS/footnotes'
import { LuGithub } from 'react-icons/lu';
import { FaFacebook } from 'react-icons/fa6';
import {Link as RouterLink} from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <Stack justifyContent={'center'}  alignItems={'center'} bg={'#542e03ef'} pt={8} mt={8}>
                <Text fontSize={14}>
                    <Link as={RouterLink} to={'/#'} color={'#f397036c'}>Membership and admins</Link>
                </Text>
                <Text fontSize={14}>
                    <Link as={RouterLink} to={'/#'} color={'#f397036c'}>Terms and conditions of use</Link>
                </Text>
                <Text fontSize={14}>
                    <Link as={RouterLink} to={'/#'} color={'#f397036c'}>User agreement</Link>
                </Text>
                <Text fontSize={14}>
                    Powered by Ted Eye Legacies.
                </Text>
                <Text fontSize={14}>
                    &copy; 2026. All rights reserved.
                </Text>
                <Box textAlign={'center'} mb={4}>
                    <Text fontSize={14}>
                    Contact developer:                </Text>
                    <HStack>
                        <Text fontSize={14}>
                            Phone: {DEVELOPER.phone}
                        </Text>
                        <Text fontSize={14}>
                            Email: {DEVELOPER.email}
                        </Text>
                    </HStack>
                </Box>
                {/* <Button variant={'ghost'} pl={1}>
                    <LuGithub/> {DEVELOPER.github}
                </Button> */}
            </Stack>
            <SimpleGrid columns={[1, 2, 3]}>

            </SimpleGrid>
        </>
    )
}

export default Footer
