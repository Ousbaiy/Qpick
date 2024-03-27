import React, { createContext, useEffect, useState } from "react";

import { TProduct } from "@/constants";

type CartContextType = {
  cart: TProduct[];
  addToCart: (id: number, product: TProduct) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  total: number;
  itemAmount: number;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  total: 0,
  itemAmount: 0,
  increaseAmount: () => {},
  decreaseAmount: () => {},
});

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<TProduct[]>(cartFromLocalStorage);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const total = cart.reduce(
      (acc, curItem) => acc + curItem.price * curItem.amount,
      0
    );
    setTotal(total);
    const amount = cart.reduce((acc, curItem) => acc + curItem.amount, 0);
    setItemAmount(amount);
  }, [cart]);

  const addToCart = (id: number, product: TProduct) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  // increase amount
  const increaseAmount = (id: number) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
      .filter((item) => item.amount !== 0);
    setCart(updatedCart);
  };

  // decrease amount
  const decreaseAmount = (id: number) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, amount: item.amount > 1 ? item.amount - 1 : 1 }
          : item
      )
      .filter((item) => item.amount !== 0);
    setCart(updatedCart);
  };

  // remove from cart
  const removeFromCart = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        total,
        itemAmount,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
