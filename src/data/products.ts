import { Categories } from '../utils/categories';
import image from "../assets/images/products/Classic Denim Jacket.jpg"
import image2 from "../assets/images/products/Smartwatch X10.jpg"
export interface productProps {
    name: string;
    description: string;
    image: string;
    Category: typeof Categories[number]['name']; // Clothes | Shoes | Bags | Accessories | Electronics | Beauty
    amount: number;
    rating: number;
}

export const faceProducts: productProps[] = [
    {
        name: "Classic Denim Jacket",
        description: "A timeless denim jacket perfect for any season.",
        image: image,
        Category: "Clothes",
        amount: 25000,
        rating: 4.5
    },
    {
        name: "Smartwatch X10",
        description: "Track your health and stay connected on the go.",
        image: image2,
        Category: "Electronics",
        amount: 120000,
        rating: 4.2
    },
    {
        name: "Elegant Leather Handbag",
        description: "High-quality leather bag suitable for all occasions.",
        image: "https://via.placeholder.com/150",
        Category: "Bags",
        amount: 85000,
        rating: 4.7
    },
    {
        name: "Wireless Earbuds Pro",
        description: "Experience music wirelessly with high-definition sound.",
        image: "https://via.placeholder.com/150",
        Category: "Electronics",
        amount: 95000,
        rating: 4.6
    },
    {
        name: "Running Sneakers V2",
        description: "Comfortable and durable sneakers for all terrains.",
        image: "https://via.placeholder.com/150",
        Category: "Shoes",
        amount: 65000,
        rating: 4.1
    },
    {
        name: "Floral Summer Dress",
        description: "Stay cool and stylish with this floral dress.",
        image: "https://via.placeholder.com/150",
        Category: "Clothes",
        amount: 30000,
        rating: 4.3
    },
    {
        name: "Luxury Perfume Mist",
        description: "A fresh and long-lasting fragrance for daily use.",
        image: "https://via.placeholder.com/150",
        Category: "Beauty",
        amount: 45000,
        rating: 4.8
    },
    {
        name: "Gold Hoop Earrings",
        description: "Elegant gold-plated hoops for any occasion.",
        image: "https://via.placeholder.com/150",
        Category: "Accessories",
        amount: 18000,
        rating: 4.2
    },
    {
        name: "Digital Alarm Clock",
        description: "Multi-functional clock with temperature display.",
        image: "https://via.placeholder.com/150",
        Category: "Electronics",
        amount: 22000,
        rating: 4.0
    },
    {
        name: "Unisex Sports Cap",
        description: "Protect yourself from the sun in style.",
        image: "https://via.placeholder.com/150",
        Category: "Accessories",
        amount: 15000,
        rating: 4.4
    },
    {
        name: "Trendy Messenger Bag",
        description: "A durable and stylish crossbody bag.",
        image: "https://via.placeholder.com/150",
        Category: "Bags",
        amount: 32000,
        rating: 4.1
    },
    {
        name: "Men’s Casual Loafers",
        description: "Comfort and style combined for everyday wear.",
        image: "https://via.placeholder.com/150",
        Category: "Shoes",
        amount: 48000,
        rating: 4.3
    },
    {
        name: "Blush & Contour Kit",
        description: "Bring out your natural glow with this beauty kit.",
        image: "https://via.placeholder.com/150",
        Category: "Beauty",
        amount: 28000,
        rating: 4.6
    },
    {
        name: "Silk Neck Scarf",
        description: "Add a touch of elegance to your outfit.",
        image: "https://via.placeholder.com/150",
        Category: "Accessories",
        amount: 12000,
        rating: 4.0
    },
    {
        name: "Bluetooth Speaker Mini",
        description: "Compact speaker with powerful sound.",
        image: "https://via.placeholder.com/150",
        Category: "Electronics",
        amount: 40000,
        rating: 4.7
    },
    {
        name: "Formal Leather Belt",
        description: "Classic black belt for formal attire.",
        image: "https://via.placeholder.com/150",
        Category: "Accessories",
        amount: 16000,
        rating: 4.1
    },
    {
        name: "Kids’ Cartoon Sneakers",
        description: "Fun and comfy shoes for little feet.",
        image: "https://via.placeholder.com/150",
        Category: "Shoes",
        amount: 27000,
        rating: 4.2
    },
    {
        name: "Compact Makeup Mirror",
        description: "Perfect for on-the-go touch-ups.",
        image: "https://via.placeholder.com/150",
        Category: "Beauty",
        amount: 8000,
        rating: 4.0
    },
    {
        name: "Casual Summer Shorts",
        description: "Lightweight and breathable shorts.",
        image: "https://via.placeholder.com/150",
        Category: "Clothes",
        amount: 20000,
        rating: 4.3
    },
    {
        name: "Waterproof Laptop Bag",
        description: "Protect your electronics with this sleek bag.",
        image: "https://via.placeholder.com/150",
        Category: "Bags",
        amount: 65000,
        rating: 4.5
    },
    {
        name: "LED Ring Light",
        description: "Ideal for video calls and content creation.",
        image: "https://via.placeholder.com/150",
        Category: "Electronics",
        amount: 55000,
        rating: 4.6
    },
    {
        name: "Stretchy Yoga Pants",
        description: "Flexible and comfortable fit for workouts.",
        image: "https://via.placeholder.com/150",
        Category: "Clothes",
        amount: 27000,
        rating: 4.4
    },
    {
        name: "Classic Aviator Sunglasses",
        description: "Timeless design with UV protection.",
        image: "https://via.placeholder.com/150",
        Category: "Accessories",
        amount: 30000,
        rating: 4.5
    },
    {
        name: "Compact Hair Dryer",
        description: "Lightweight and travel-friendly.",
        image: "https://via.placeholder.com/150",
        Category: "Beauty",
        amount: 38000,
        rating: 4.2
    },
    {
        name: "Ladies’ Flat Sandals",
        description: "Comfortable for everyday use.",
        image: "https://via.placeholder.com/150",
        Category: "Shoes",
        amount: 29000,
        rating: 4.3
    },
    {
        name: "Casual Cotton T-Shirt",
        description: "Soft and breathable cotton fabric.",
        image: "https://via.placeholder.com/150",
        Category: "Clothes",
        amount: 18000,
        rating: 4.1
    },
    {
        name: "Makeup Brush Set",
        description: "A complete set for professional application.",
        image: "https://via.placeholder.com/150",
        Category: "Beauty",
        amount: 25000,
        rating: 4.4
    },
    {
        name: "Leather Shoulder Bag",
        description: "Stylish and spacious for daily use.",
        image: "https://via.placeholder.com/150",
        Category: "Bags",
        amount: 72000,
        rating: 4.6
    },
    {
        name: "Men’s Business Watch",
        description: "Sleek, modern, and reliable.",
        image: "https://via.placeholder.com/150",
        Category: "Accessories",
        amount: 98000,
        rating: 4.5
    },
    {
        name: "Wireless Keyboard & Mouse",
        description: "Combo set for office or home use.",
        image: "https://via.placeholder.com/150",
        Category: "Electronics",
        amount: 75000,
        rating: 4.4
    }
];
