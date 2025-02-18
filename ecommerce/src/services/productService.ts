import apiClient from "./apiClient";

export interface Product {
  id: number;
  productName: string;
  category: string;
  price: number;
  quantity: number;
  size: string;
  description: string;
  image: string;
}

const productService = {
  getAll: async (): Promise<Product[]> => {
    const response = await apiClient.get("/products");
    console.log("API Response:", response.data);
    return response.data.data;
  },

  getById: async (productId: number): Promise<Product> => {
    const response = await apiClient.get(`/products/${productId}`);
    return response.data;
  },

  create: async (product: Omit<Product, "productId">): Promise<Product> => {
    const response = await apiClient.post("/products", product);
    return response.data;
  },

  update: async (
    productId: number,
    product: Partial<Product>
  ): Promise<Product> => {
    const response = await apiClient.put(`/products/${productId}`, product);
    return response.data;
  },

  delete: async (productId: number): Promise<void> => {
    await apiClient.delete(`/products/${productId}`);
  },
};

export default productService;
