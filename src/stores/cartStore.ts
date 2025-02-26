import { create } from "zustand";

interface CartItem {
  documentId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (i) => i.documentId === item.documentId
      );

      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
            i.documentId === item.documentId
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }

      return {
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
    }),
}));
