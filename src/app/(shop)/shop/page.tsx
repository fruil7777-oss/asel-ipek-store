'use client'

import { useThemeStore } from '@/store/themeStore'
import { motion } from 'framer-motion'

export default function ShopPage() {
  const { isArabic } = useThemeStore()

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-8"
      >
        {isArabic() ? 'المتجر' : 'Shop'}
      </motion.h1>
      <p className="text-gray-600">
        {isArabic()
          ? 'قريباً - سيتم إضافة المنتجات قريباً جداً'
          : 'Coming Soon - Products will be added very soon'}
      </p>
    </div>
  )
}
