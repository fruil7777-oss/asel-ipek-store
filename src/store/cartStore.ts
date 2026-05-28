import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem } from '@/types'

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

export const useCartStore = create<CartStore>()(persist(
  (set, get) => ({
    items: [],
    addItem: (item) => {
      const items = get().items
      const existingItem = items.find(
        (i) => i.productId === item.productId && i.color === item.color && i.size === item.size
      )
      if (existingItem) {
        set({
          items: items.map((i) =>
            i.id === existingItem.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        })
      } else {
        set({ items: [...items, item] })
      }
    },
    removeItem: (itemId) => {
      set({ items: get().items.filter((i) => i.id !== itemId) })
    },
    updateQuantity: (itemId, quantity) => {
      if (quantity <= 0) {
        get().removeItem(itemId)
        return
      }
      set({
        items: get().items.map((i) =>
          i.id === itemId ? { ...i, quantity } : i
        ),
      })
    },
    clearCart: () => {
      set({ items: [] })
    },
    getTotalPrice: () => {
      return get().items.reduce(
        (total, item) =>
          total + (item.product.discountPrice || item.product.price) * item.quantity,
        0
      )
    },
    getTotalItems: () => {
      return get().items.reduce((total, item) => total + item.quantity, 0)
    },
  }),
  {
    name: 'cart-store',
  }
))
