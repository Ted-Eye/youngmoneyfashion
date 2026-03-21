import axios from "axios";
import api from "../../api";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export const createHairstyle = async (file, hairstyleData) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, formData);
        const imageUrl = response.data.secure_url;
        const publicId = response.data.public_id;

        const hairstyleResponse = await api.post('catalog/hairstyles/', {
            ...hairstyleData,
            image_url: imageUrl,
            public_id: publicId,
        });
        
        return hairstyleResponse.data;
    } catch (error) {
        console.error('Error creating hairstyle:', error);
        throw error;
    }
}