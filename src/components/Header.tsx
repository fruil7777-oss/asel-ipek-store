'use client'

import Link from 'next/link'
import { useThemeStore } from '@/store/themeStore'
import { useUIStore } from '@/store/uiStore'
import { useCartStore } from '@/store/cartStore'
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Header() {
  const { language, setLanguage, isRTL } = useThemeStore()
  const { isSidebarOpen, setSidebarOpen, setCartOpen } = useUIStore()
  const { getTotalItems } = useCartStore()

  const cartCount = getTotalItems()

  const menuItems = {
    en: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/shop' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    ar: [
      { label: 'الرئيسية', href: '/' },
      { label: 'المتجر', href: '/shop' },
      { label: 'من نحن', href: '/about' },
      { label: 'تواصل معنا', href: '/contact' },
    ],
    tr: [
      { label: 'Ana Sayfa', href: '/' },
      { label: 'Mağaza', href: '/shop' },
      { label: 'Hakkında', href: '/about' },
      { label: 'İletişim', href: '/contact' },
    ],
  }

  const currentMenu = menuItems[language]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md ${isRTL() ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-luxury-700 bg-clip-text text-transparent"
            >
              Asel Ipek
            </motion.div>
          </Link>

          <nav className="hidden md:flex gap-8">
            {currentMenu.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-700 hover:text-rose-500 transition">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {(['en', 'ar', 'tr'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 text-sm rounded ${
                    language === lang ? 'bg-rose-500 text-white' : 'text-gray-600'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-gray-700 hover:text-rose-500"
            >
              <FiShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </motion.button>

            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
