import hairProduct from "../assets/hair-care-products.jpg";
import bodyProduct from "../assets/body-care-products.jpg";
import beautyProduct from "../assets/beauty-essentials.jpg";
import accessoryProduct from "../assets/beauty-accessories.jpg";

export const products = [
  {
    id: 1,
    name: "Hair Care",
    category: "Hair",
    price: "$25",
    image: hairProduct,
    imageWidth: 736,
    imageHeight: 1308,
    inStock: true,
    description: "Premium everyday hair care essentials.",
  },

  {
    id: 2,
    name: "Body Care",
    category: "Wellness",
    price: "$20",
    image: bodyProduct,
    imageWidth: 736,
    imageHeight: 981,
    inStock: true,
    description: "Simple products for your self-care ritual.",
  },

  {
    id: 3,
    name: "Beauty Essentials",
    category: "Beauty",
    price: "$30",
    image: beautyProduct,
    imageWidth: 736,
    imageHeight: 1104,
    inStock: true,
    description: "Curated beauty essentials for your routine.",
  },

  {
    id: 4,
    name: "Beauty Accessories",
    category: "Style",
    price: "$15",
    image: accessoryProduct,
    imageWidth: 736,
    imageHeight: 1104,
    inStock: true,
    description: "Finishing touches for your INBLACK look.",
  },
];
