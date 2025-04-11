import { Categories } from "../utils/categories";

export interface productProps {
    name: string;
    price: number;
    description: string;
    image : string;
    category: typeof Categories[number]["name"]; // Clothes | Shoes | Bags | Accessories | Electronics | Beauty
    rating: number;
    id: string;
}

export const fakeProducts: productProps[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    price: 19000,
    description: "Comfortable and stylish white t-shirt made from 100% cotton.",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
    category: "Clothes",
    rating: 4.3
  },
  {
    id: "2",
    name: "Running Sneakers",
    price: 58000,
    description: "Lightweight sneakers designed for maximum performance.",
    image: "https://images.unsplash.com/photo-1585386959984-a41552262c34",
    category: "Shoes",
    rating: 4.6
  },
  {
    id: "3",
    name: "Leather Shoulder Bag",
    price: 87000,
    description: "Elegant leather bag perfect for everyday use.",
    image: "https://images.unsplash.com/photo-1618354691373-5ec94d815b35",
    category: "Bags",
    rating: 4.5
  },
  {
    id: "4",
    name: "Smart Watch X",
    price: 125000,
    description: "Track your fitness and notifications with this smart watch.",
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a",
    category: "Electronics",
    rating: 4.2
  },
  {
    id: "5",
    name: "Red Lipstick Matte",
    price: 14500,
    description: "Long-lasting matte lipstick for a bold look.",
    image: "https://images.unsplash.com/photo-1612817159948-b046c1c4c5f7",
    category: "Beauty",
    rating: 4.7
  },
  {
    id: "6",
    name: "Gold Hoop Earrings",
    price: 23000,
    description: "Timeless hoop earrings for any occasion.",
    image: "https://images.unsplash.com/photo-1634712282287-14cd18c67c0c",
    category: "Accessories",
    rating: 4.8
  },
  {
    id: "7",
    name: "Wireless Earbuds",
    price: 47000,
    description: "High-quality sound with noise cancellation.",
    image: "https://images.unsplash.com/photo-1580894732444-c7a92a48e6b1",
    category: "Electronics",
    rating: 4.4
  },
  {
    id: "8",
    name: "Denim Jacket",
    price: 71000,
    description: "Stylish denim jacket for any season.",
    image: "https://images.unsplash.com/photo-1611078489935-c3026d2cbbf8",
    category: "Clothes",
    rating: 4.1
  },
  {
    id: "9",
    name: "Sports Watch",
    price: 41000,
    description: "Durable sports watch with water resistance.",
    image: "https://images.unsplash.com/photo-1604467728089-89e53a6e44f4",
    category: "Accessories",
    rating: 4.0
  },
  {
    id: "10",
    name: "Moisturizing Face Cream",
    price: 21000,
    description: "Hydrates and smooths your skin daily.",
    image: "https://images.unsplash.com/photo-1618931224218-70890d6b6c1b",
    category: "Beauty",
    rating: 4.6
  },
  {
    id: "11",
    name: "Silk Scarf",
    price: 18000,
    description: "Elegant silk scarf with a vibrant print.",
    image: "https://images.unsplash.com/photo-1617042375876-54d98c0ef902",
    category: "Accessories",
    rating: 4.3
  },
  {
    id: "12",
    name: "Casual Canvas Shoes",
    price: 36000,
    description: "Perfect everyday canvas shoes in neutral colors.",
    image: "https://images.unsplash.com/photo-1618354692224-9e1bb4941469",
    category: "Shoes",
    rating: 4.5
  },
  {
    id: "13",
    name: "Compact Mirrorless Camera",
    price: 280000,
    description: "Take stunning photos with this lightweight camera.",
    image: "https://images.unsplash.com/photo-1555617989-d09347e92766",
    category: "Electronics",
    rating: 4.7
  },
  {
    id: "14",
    name: "Compact Crossbody Bag",
    price: 55000,
    description: "Small, chic crossbody bag for daily use.",
    image: "https://images.unsplash.com/photo-1620752362396-98036b7c7f91",
    category: "Bags",
    rating: 4.2
  },
  {
    id: "15",
    name: "Floral Dress",
    price: 68000,
    description: "A lightweight floral dress perfect for summer.",
    image: "https://images.unsplash.com/photo-1520975979642-56bdfa4cfb5c",
    category: "Clothes",
    rating: 4.6
  },
  {
    id: "16",
    name: "Bluetooth Speaker",
    price: 43000,
    description: "Portable speaker with strong bass and Bluetooth 5.0.",
    image: "https://images.unsplash.com/photo-1583225151843-4c97e20e878d",
    category: "Electronics",
    rating: 4.5
  },
  {
    id: "17",
    name: "Hydrating Lip Balm",
    price: 8500,
    description: "Nourishing balm to keep your lips soft and smooth.",
    image: "https://images.unsplash.com/photo-1617033174944-661c70d49ce9",
    category: "Beauty",
    rating: 4.3
  },
  {
    id: "18",
    name: "Ladies Sunglasses",
    price: 20000,
    description: "Stylish UV-protective sunglasses for sunny days.",
    image: "https://images.unsplash.com/photo-1517866654850-6e92fbf3d19d",
    category: "Accessories",
    rating: 4.4
  },
  {
    id: "19",
    name: "Leather Boots",
    price: 99000,
    description: "Rugged and fashionable leather boots.",
    image: "https://images.unsplash.com/photo-1610411155028-d25c0b4701e6",
    category: "Shoes",
    rating: 4.8
  },
  {
    id: "20",
    name: "Backpack Explorer",
    price: 67000,
    description: "Durable backpack great for travel and adventure.",
    image: "https://images.unsplash.com/photo-1514474959185-147d5d4f8e52",
    category: "Bags",
    rating: 4.7
  },
  {
    id: "21",
    name: "Men’s Casual Shirt",
    price: 34000,
    description: "Classic button-down shirt for any event.",
    image: "https://images.unsplash.com/photo-1618354691808-063abcf82c2e",
    category: "Clothes",
    rating: 4.2
  },
  {
    id: "22",
    name: "Nail Polish Set",
    price: 12000,
    description: "Vibrant colors and long-lasting shine.",
    image: "https://images.unsplash.com/photo-1609589241530-39e6a28a245d",
    category: "Beauty",
    rating: 4.6
  },
  {
    id: "23",
    name: "Pearl Necklace",
    price: 38000,
    description: "Elegant pearls to elevate your outfit.",
    image: "https://images.unsplash.com/photo-1633867743275-57c2e2b92d6c",
    category: "Accessories",
    rating: 4.9
  },
  {
    id: "24",
    name: "Slip-On Loafers",
    price: 49000,
    description: "Effortless comfort meets formal style.",
    image: "https://images.unsplash.com/photo-1560464024-54e4392f46a2",
    category: "Shoes",
    rating: 4.3
  },
  {
    id: "25",
    name: "Compact Makeup Kit",
    price: 29000,
    description: "All-in-one makeup set for on-the-go touchups.",
    image: "https://images.unsplash.com/photo-1619531522543-7aeb7e1a98b3",
    category: "Beauty",
    rating: 4.5
  },
  {
    id: "26",
    name: "Smartphone Stand",
    price: 8000,
    description: "Perfect for hands-free viewing and video calls.",
    image: "https://images.unsplash.com/photo-1585436082059-4888b6b5f5ba",
    category: "Electronics",
    rating: 4.2
  },
  {
    id: "27",
    name: "Patterned Tote Bag",
    price: 33000,
    description: "Trendy and practical tote bag.",
    image: "https://images.unsplash.com/photo-1600180758890-59c031d5e5dd",
    category: "Bags",
    rating: 4.3
  },
  {
    id: "28",
    name: "Summer Sandals",
    price: 29000,
    description: "Stay cool and stylish in the summer heat.",
    image: "https://images.unsplash.com/photo-1622396635822-8f3bd1fc7f1c",
    category: "Shoes",
    rating: 4.5
  },
  {
    id: "29",
    name: "Casual Hoodie",
    price: 46000,
    description: "Warm hoodie for lounging or going out.",
    image: "https://images.unsplash.com/photo-1618354691856-14bbf3c78467",
    category: "Clothes",
    rating: 4.4
  },
  {
    id: "30",
    name: "Cleansing Foam",
    price: 13500,
    description: "Gentle foaming cleanser for daily use.",
    image: "https://images.unsplash.com/photo-1600718374462-f6fb0ab6dc53",
    category: "Beauty",
    rating: 4.3
  },
  {
    id: "31",
    name: "Fitness Tracker Band",
    price: 38000,
    description: "Monitor your steps, heart rate, and sleep.",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
    category: "Electronics",
    rating: 4.5
  },
  {
    id: "32",
    name: "Charm Bracelet",
    price: 21000,
    description: "Personalized bracelet with adorable charms.",
    image: "https://images.unsplash.com/photo-1609942731819-6ccf426b46aa",
    category: "Accessories",
    rating: 4.6
  },
  {
    id: "33",
    name: "Cotton Pants",
    price: 39000,
    description: "Relaxed fit cotton pants for casual wear.",
    image: "https://images.unsplash.com/photo-1618354692058-79ac81f44c3b",
    category: "Clothes",
    rating: 4.1
  },
  {
    id: "34",
    name: "Mini Crossbody Bag",
    price: 51000,
    description: "Minimalist crossbody bag with gold accents.",
    image: "https://images.unsplash.com/photo-1612178994904-ec32b9b89e38",
    category: "Bags",
    rating: 4.4
  },
  {
    id: "35",
    name: "Hair Styling Kit",
    price: 31000,
    description: "Complete kit for all your hair needs.",
    image: "https://images.unsplash.com/photo-1613315757723-e1c0d0a6be77",
    category: "Beauty",
    rating: 4.5
  }
];
