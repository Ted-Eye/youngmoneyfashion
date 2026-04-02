
import React from 'react'
import BgFilter from '../background/BgFilter'
import { Button, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import {FOOTE_NOTES, DEVELOPER} from '../../../KONSTANTS/footnotes'
import { LuGithub } from 'react-icons/lu';
import { FaFacebook } from 'react-icons/fa6';

const Footer = () => {
    return (
        <>
            <HStack justifyContent={'center'} >
                <Text fontSize={14}>
                    Developed by {DEVELOPER.name}
                </Text>
                <Text fontSize={14}>
                    +{DEVELOPER.phone}
                </Text>
                <Text fontSize={14}>
                    {DEVELOPER.email}
                </Text>
                <Button variant={'ghost'} pl={1}>
                    <LuGithub/> {DEVELOPER.github}
                </Button>
                <Button variant={'ghost'} pl={1}>
                    <FaFacebook/> Ted Eye Legacies
                </Button>
            </HStack>
            <SimpleGrid columns={[1, 2, 3]}>

            </SimpleGrid>
        </>
    )
}

export default Footer
