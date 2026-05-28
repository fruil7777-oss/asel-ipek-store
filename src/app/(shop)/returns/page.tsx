'use client'

import { useThemeStore } from '@/store/themeStore'
import { motion } from 'framer-motion'

export default function ReturnsPage() {
  const { isArabic, language, isRTL } = useThemeStore()

  return (
    <div className={`max-w-4xl mx-auto px-4 py-12 ${isRTL() ? 'rtl' : 'ltr'}`}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-8"
      >
        {isArabic() ? 'سياسة الإرجاع' : language === 'tr' ? 'İade Politikası' : 'Returns Policy'}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-md space-y-6 text-gray-700"
      >
        <section>
          <h2 className="text-2xl font-bold mb-4">
            {isArabic() ? 'شروط الإرجاع' : language === 'tr' ? 'İade Şartları' : 'Return Conditions'}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              {isArabic()
                ? 'يمكن إرجاع المنتجات خلال 30 يوم من الشراء'
                : language === 'tr'
                ? 'Ürünler satın alma tarihinden itibaren 30 gün içinde iade edilebilir'
                : 'Products can be returned within 30 days of purchase'}
            </li>
            <li>
              {isArabic()
                ? 'يجب أن تكون المنتجات في حالة جديدة'
                : language === 'tr'
                ? 'Ürünler yeni durumda olmalıdır'
                : 'Items must be in new condition'}
            </li>
          </ul>
        </section>
      </motion.div>
    </div>
  )
}
