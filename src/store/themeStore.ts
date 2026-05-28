import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Language = 'en' | 'ar' | 'tr'
type Theme = 'light' | 'dark'

interface ThemeStore {
  language: Language
  theme: Theme
  setLanguage: (lang: Language) => void
  setTheme: (theme: Theme) => void
  isArabic: () => boolean
  isRTL: () => boolean
}

export const useThemeStore = create<ThemeStore>()(persist(
  (set, get) => ({
    language: 'ar' as Language,
    theme: 'light' as Theme,
    setLanguage: (lang) => set({ language: lang }),
    setTheme: (theme) => set({ theme }),
    isArabic: () => get().language === 'ar',
    isRTL: () => get().language === 'ar',
  }),
  {
    name: 'theme-store',
  }
))
