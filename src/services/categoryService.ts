import axios from "axios";

import { Category } from "@/Interface/category";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllCategory = async (): Promise<Category[]> => {
  const response = await axios.get(`${BASE_URL}/categories"`);
  return response.data.data;
};

export const getCategoryById = async (
  categoryId: number
): Promise<Category> => {
  const response = await axios.get(`${BASE_URL}/categories/${categoryId}`);
  return response.data;
};

export const createCategory = async (
  category: Omit<Category, "categoryId">
): Promise<Category> => {
  const response = await axios.post(
    `${BASE_URL}/categories", category`,
    category
  );
  return response.data;
};

export const updateCategory = async (
  categoryId: number,
  category: Partial<Category>
): Promise<Category> => {
  const response = await axios.put(
    `${BASE_URL}/categories/${categoryId}`,
    category
  );
  return response.data;
};

export const deleteCategory = async (categoryId: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/categories/${categoryId}`);
};
