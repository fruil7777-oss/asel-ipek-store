import { create } from 'zustand'

interface UIStore {
  isSidebarOpen: boolean
  isCartOpen: boolean
  isSearchOpen: boolean
  setSidebarOpen: (open: boolean) => void
  setCartOpen: (open: boolean) => void
  setSearchOpen: (open: boolean) => void
}

export const useUIStore = create<UIStore>((set) => ({
  isSidebarOpen: false,
  isCartOpen: false,
  isSearchOpen: false,
  setSidebarOpen: (open) => set({ isSidebarOpen: open }),
  setCartOpen: (open) => set({ isCartOpen: open }),
  setSearchOpen: (open) => set({ isSearchOpen: open }),
}))
