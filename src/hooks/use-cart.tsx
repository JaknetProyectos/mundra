"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { Tour } from "@/types/tour";
import { CartItem } from "@/types/cart-item";

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  totalQuantity: number;
  total: number;
  addItem: (
    product: Tour,
    date: Date,
    people: number,
    quantity?: number
  ) => void;
  removeItem: (productId: string, date?: Date) => void;
  updateQuantity: (productId: string, quantity: number, date?: Date) => void;
  clearCart: () => void;
  isInCart: (productId: string, date?: Date) => boolean;
  getItemQuantity: (productId: string, date?: Date) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const CART_STORAGE_KEY = "mundra-cart";

// Helper para comparar si dos fechas corresponden al mismo día
function isSameDate(d1: Date | string, d2: Date | string): boolean {
  const date1 = new Date(d1).toISOString().split("T")[0];
  const date2 = new Date(d2).toISOString().split("T")[0];
  return date1 === date2;
}

function normalizeCartItems(items: CartItem[]): CartItem[] {
  const map = new Map<string, CartItem>();

  for (const item of items) {
    // Re-hidratamos la fecha a un objeto Date real
    const itemDate = new Date(item.date);
    const key = `${item.product.id}_${itemDate.toISOString().split("T")[0]}`;

    const existing = map.get(key);

    if (existing) {
      map.set(key, {
        ...existing,
        quantity: existing.quantity + item.quantity,
      });
    } else {
      map.set(key, {
        ...item,
        date: itemDate,
      });
    }
  }

  return Array.from(map.values());
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Cargar el carrito e hidratar strings a Date objetos reales
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);

      if (savedCart) {
        const parsed = JSON.parse(savedCart) as CartItem[];
        setItems(normalizeCartItems(parsed));
      }
    } catch (error) {
      console.error("Error loading cart from storage:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // 2. Guardar carrito en localStorage
  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Error saving cart to storage:", error);
    }
  }, [items, isLoaded]);

  // 3. addItem corregido (Acepta date y people)
  const addItem = useCallback(
    (product: Tour, date: Date, people: number, quantity: number = 1) => {
      setItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex(
          (item) =>
            item.product.id === product.id && isSameDate(item.date, date)
        );

        if (existingItemIndex > -1) {
          return prevItems.map((item, index) =>
            index === existingItemIndex
              ? {
                  ...item,
                  people, // Actualiza el número de personas si cambió
                  quantity: item.quantity + quantity,
                }
              : item
          );
        }

        // Se retornan todas las propiedades requeridas por CartItem
        const newItem: CartItem = {
          product,
          date,
          people,
          quantity,
        };

        return [...prevItems, newItem];
      });
    },
    []
  );

  const removeItem = useCallback((productId: string, date?: Date) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.product.id === productId &&
            (date ? isSameDate(item.date, date) : true)
          )
      )
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, quantity: number, date?: Date) => {
      if (quantity <= 0) {
        removeItem(productId, date);
        return;
      }

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.product.id === productId &&
          (date ? isSameDate(item.date, date) : true)
            ? { ...item, quantity }
            : item
        )
      );
    },
    [removeItem]
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const isInCart = useCallback(
    (productId: string, date?: Date) => {
      return items.some(
        (item) =>
          item.product.id === productId &&
          (date ? isSameDate(item.date, date) : true)
      );
    },
    [items]
  );

  const getItemQuantity = useCallback(
    (productId: string, date?: Date) => {
      const item = items.find(
        (item) =>
          item.product.id === productId &&
          (date ? isSameDate(item.date, date) : true)
      );
      return item?.quantity ?? 0;
    },
    [items]
  );

  const itemCount = useMemo(() => items.length, [items]);

  const totalQuantity = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  // Calcula el total considerando el precio base multiplicado por el número de personas y la cantidad
  const total = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.product.price * item.people * item.quantity,
        0
      ),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      itemCount,
      totalQuantity,
      total,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      isInCart,
      getItemQuantity,
    }),
    [
      items,
      itemCount,
      totalQuantity,
      total,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      isInCart,
      getItemQuantity,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error(
      "useCart debe ser utilizado estrictamente dentro de un CartProvider"
    );
  }
  return context;
}