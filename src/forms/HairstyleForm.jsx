import React, { useState } from 'react'
import { createHairstyle } from '../services/HairstyleServices';
import { Box, Field, FileUpload, Input, Button, Span } from '@chakra-ui/react';
import { HiUpload } from "react-icons/hi"



export const HairstyleForm = () => {
    const [file, setFile] = useState(null);
    const [hairstyleData, setHairstyleData] = useState({
        name: '',
        price: '',
        description: '',
        treatment_duration: '',
    });

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHairstyleData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert('Please select an image file.');
            return;
        }
        try {
            await createHairstyle(file, hairstyleData);
            console.log('Hairstyle created:');
        } catch (error) {
            console.error('Error creating hairstyle:', error);
        }
    }
    return (
        <Box as="form" onSubmit={handleSubmit} p={4} borderWidth={1} borderRadius={4} boxShadow="lg" mt={8} border={'solid 1px #b078077b'} bg={'#ffffffff'} color={'#f69b097b'}>

            <Field.Root mb={2}>
                <Field.Label>Select new hairstyle image</Field.Label>
                <FileUpload.Root>
                <FileUpload.HiddenInput name='image_url' value={hairstyleData.image_url} onChange={handleFileChange}/>
                <FileUpload.Trigger asChild>
                    <Button variant="outline" size="sm">
                    <HiUpload /> Upload
                    </Button>
                </FileUpload.Trigger>
                <FileUpload.List />
            </FileUpload.Root>
            </Field.Root>
            
            <Field.Root>
                <Field.Label fontSize={14}>Name</Field.Label>
                <Input type="text" name="name"  placeholder="Hairstyle name" value={hairstyleData.name} 
                onChange={handleInputChange} />
            </Field.Root>
            <Field.Root >
                <Field.Label color={'#f69b097b'} fontSize={14}>Price</Field.Label>
                <Input type="text" name="price" placeholder="Price" value={hairstyleData.price} onChange={handleInputChange} />
            </Field.Root>
            <Field.Root>
                <Field.Label>Description</Field.Label>
                <Input type="text" name="description" placeholder="Description" value={hairstyleData.description} onChange={handleInputChange} />
            </Field.Root>
            <Field.Root>
                <Field.Label>Treatment Duration</Field.Label>
                <Input type="text" name="treatment_duration" placeholder="Treatment Duration" value={hairstyleData.treatment_duration} onChange={handleInputChange} />
            </Field.Root>
            <Button type="submit">Create Hairstyle</Button>
        </Box>
    )
}




