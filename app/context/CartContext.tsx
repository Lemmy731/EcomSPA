"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from '../types/product';
import {
  cartAdd,
  cartUpdate,
  cartRemove,
} from "../lib/cartApi";


interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const addToCart = async (product: Product) => {
    await cartAdd(product.productId, 1);
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

const increaseQty = async (id: string) => {
  const item = cart.find((i) => i.id === id);
  if (!item) return;

   const newQty = item.quantity + 1;

  await cartAdd(item.productId, 1);

  setCart((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, quantity: newQty } : item
    )
  );
};

  const decreaseQty = async (id: string) => {
  const item = cart.find((i) => i.id === id);
  if (!item) return;

  const newQty = item.quantity - 1;

  await cartUpdate(item.productId);

  setCart((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, quantity: newQty }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};

  const removeItem = async (id: string) => {
   await cartRemove(id);

  setCart((prev) =>
    prev.filter((item) => item.id !== id)
  );
};

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQty, decreaseQty, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("Must use inside CartProvider");
  return context;
};