import apiClient from "./apiClient";

export interface Category {
  categoryId: number;
  productId: number;
  categoryName: string;
}

const categoryService = {
  getAll: async (): Promise<Category[]> => {
    const response = await apiClient.get("/categories");
    return response.data;
  },

  getById: async (categoryId: number): Promise<Category> => {
    const response = await apiClient.get(`/categories/${categoryId}`);
    return response.data;
  },

  create: async (category: Omit<Category, "categoryId">): Promise<Category> => {
    const response = await apiClient.post("/categories", category);
    return response.data;
  },

  update: async (
    categoryId: number,
    category: Partial<Category>
  ): Promise<Category> => {
    const response = await apiClient.put(`/categories/${categoryId}`, category);
    return response.data;
  },

  delete: async (categoryId: number): Promise<void> => {
    await apiClient.delete(`/categories/${categoryId}`);
  },
};

export default categoryService;
