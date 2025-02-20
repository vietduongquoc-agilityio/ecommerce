import { Meta, StoryObj } from "@storybook/react";
import RelatedProduct from "../RoutingDetailPage";
import { Product } from "@/services/productService";

const mockProducts: Product[] = [
  {
    productName: "Sofa Luxury",
    description: "A comfortable luxury sofa.",
    price: 250000,
    image: "/images/sofa1.jpg",
    id: 2,
    category: "",
    quantity: 0,
    size: "",
  },
  {
    productName: "Modern Chair",
    description: "A stylish modern chair.",
    price: 120000,
    image: "/images/chair1.jpg",
    id: 4,
    category: "",
    quantity: 0,
    size: "",
  },
  {
    productName: "Wooden Table",
    description: "High-quality wooden table.",
    price: 180000,
    image: "/images/table1.jpg",
    id: 6,
    category: "",
    quantity: 0,
    size: "",
  },
  {
    productName: "Bed Frame",
    description: "Elegant bed frame.",
    price: 320000,
    image: "/images/bed1.jpg",
    id: 8,
    category: "",
    quantity: 0,
    size: "",
  },
];

const meta: Meta<typeof RelatedProduct> = {
  title: "Components/RelatedProduct",
  component: RelatedProduct,
  tags: ["autodocs"],
  parameters: {
    mockData: mockProducts,
  },
};

export default meta;

type Story = StoryObj<typeof RelatedProduct>;

export const Default: Story = {};
