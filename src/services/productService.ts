import axios from "axios";

import { Product } from "@/Interface/product";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data.data;
};

export const getProductById = async (documentId: string): Promise<Product> => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${documentId}`);

    return response.data.data;
  } catch (error) {
    console.error("Error in getProductById:", error);
    throw error;
  }
};

export const createProduct = async (
  product: Omit<Product, "documentId">
): Promise<Product> => {
  const response = await axios.post(`${BASE_URL}/products`, product);
  return response.data;
};

export const updateProduct = async (
  productId: string,
  product: Partial<Product>
): Promise<Product> => {
  const response = await axios.put(
    `${BASE_URL}/products/${productId}`,
    product
  );
  return response.data;
};

export const deleteProduct = async (productId: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/products/${productId}`);
};
