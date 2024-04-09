import { TProduct } from "@/constants";
import { create } from "zustand";

type Store = {
  cart: TProduct[];
  addToCart: (id: number, product: TProduct) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  total: number;
  itemAmount: number;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
};

export const useStore = create<Store>()((set) => ({
  cart: [],
  addToCart: (id, product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        );
        return { cart: updatedCart };
      } else {
        return { cart: [...state.cart, { ...product, amount: 1 }] };
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),

  clearCart: () => set({ cart: [] }),

  total: 0,
  itemAmount: 0,

  increaseAmount: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      ),
    })),

  decreaseAmount: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id
            ? { ...item, amount: item.amount > 1 ? item.amount - 1 : 1 }
            : item
        )
        .filter((item) => item.amount !== 0),
    })),
}));
