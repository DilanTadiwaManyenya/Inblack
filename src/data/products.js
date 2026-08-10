import hairProduct from "../assets/hair-product.jpg";
import bodyProduct from "../assets/body-product.jpg";
import beautyProduct from "../assets/beauty-product.jpg";
import accessoryProduct from "../assets/accessory.jpg";

export const products = [
  {
    id: 1,
    name: "Hair Care",
    category: "Hair",
    price: "$25",
    image: hairProduct,
    inStock: true,
    description: "Premium everyday hair care essentials.",
  },

  {
    id: 2,
    name: "Body Care",
    category: "Wellness",
    price: "$20",
    image: bodyProduct,
    inStock: true,
    description: "Simple products for your self-care ritual.",
  },

  {
    id: 3,
    name: "Beauty Essentials",
    category: "Beauty",
    price: "$30",
    image: beautyProduct,
    inStock: true,
    description: "Curated beauty essentials for your routine.",
  },

  {
    id: 4,
    name: "Beauty Accessories",
    category: "Style",
    price: "$15",
    image: accessoryProduct,
    inStock: true,
    description: "Finishing touches for your INBLACK look.",
  },
];