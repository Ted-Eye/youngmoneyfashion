import { GalleryHorizontal } from "lucide-react";

// const getIcon = (id) => {
//     switch (id) {
//         case 1:
//             return (<GalleryHorizontal/>)
//             break;
//         case 2:
//             return 
//     }
// }
export const OFFERS = [
    {
        id: 1, 
        icon: 'gallery.svg',
        title: "Show room",
        img: 'galleryThumbnail.jpg',
        text: 'Browse our catalog and pick your desired hairstyle',
        action: 'Take a tour',
        route: '/gallery'
    },
    {
        id: 2, 
        icon: 'cart.svg',
        title: "Products",
        img: 'products.webp',
        text: 'Manicure and pedicure kits, haire treatment products, face treatment products and more...',
        action: 'Shop products',
        route: '/products'
    },
    {
        id: 3, 
        icon: 'swift.svg',
        title: "Instant service",
        img: 'barberskit.jpg',
        text: 'Busy? Perhaps you have a tight schedule. We bring the service to you on the spot.',
        action: 'Get one',
        route: '/products'
    },
    {
        id: 4, 
        icon: 'spa-svgrepo-com.svg',
        title: "SPA and Sauna",
        img: 'spa.avif',
        text: 'Proffessional massage, spa and sauna',
        action: 'book slot',
        route: '/products'
    },
    {
        id: 5,
        icon: 'spa-svgrepo-com.svg', 
        title: "Manicure and Pedicure",
        img: 'manicure.webp',
        text: 'Get the best deals for manicure and pedicure kits, haire treatment products, face treatment products and more...',
        action: 'Shop products',
        route: '/products'
    },
    {
        id: 6, 
        icon: 'spa-svgrepo-com.svg',
        title: "Hair extensions",
        img: 'extensions.jpg',
        text: 'Human hair, eye lash extensions and make ups',
        action: 'Shop products',
        route: '/products'
    },
]

export const PAYMENT_OPTIONS = [
        {
            id: 1,  
            name: 'MTN Mobile Money', 
            img: 'momo.jpg', 
            short: 'MoMo'
        }, 
        {
            id: 2, 
            name: 'Orange Money', 
            img: 'om.jpg', 
            short: 'OM'
        },
        {
            id: 3, 
            name: 'Nkap Pay', 
            img: 'nkap.png', 
            short: 'Nkap'
        }
    ]