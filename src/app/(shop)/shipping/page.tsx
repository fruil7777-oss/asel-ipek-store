'use client'

import { useThemeStore } from '@/store/themeStore'
import { motion } from 'framer-motion'

export default function ShippingPage() {
  const { isArabic, language, isRTL } = useThemeStore()

  return (
    <div className={`max-w-4xl mx-auto px-4 py-12 ${isRTL() ? 'rtl' : 'ltr'}`}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-8"
      >
        {isArabic() ? 'سياسة الشحن' : language === 'tr' ? 'Kargo Politikası' : 'Shipping Policy'}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-md space-y-6 text-gray-700"
      >
        <section>
          <h2 className="text-2xl font-bold mb-4">
            {isArabic() ? 'أوقات التسليم' : language === 'tr' ? 'Teslimat Süreleri' : 'Delivery Times'}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              {isArabic()
                ? 'الداخل: 3-5 أيام عمل'
                : language === 'tr'
                ? 'Yurt içi: 3-5 iş günü'
                : 'Domestic: 3-5 business days'}
            </li>
            <li>
              {isArabic()
                ? 'الخارج: 7-14 يوم عمل'
                : language === 'tr'
                ? 'Uluslararası: 7-14 iş günü'
                : 'International: 7-14 business days'}
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            {isArabic() ? 'تكاليف الشحن' : language === 'tr' ? 'Kargo Ücretleri' : 'Shipping Costs'}
          </h2>
          <p>
            {isArabic()
              ? 'الشحن مجاني للطلبات فوق 500 ليرة. للطلبات الأقل تكلفة الشحن 50 ليرة.'
              : language === 'tr'
              ? '500 TL üzerindeki siparişlerde ücretsiz kargo. Daha az siparişlerde kargo ücreti 50 TL.'
              : 'Free shipping on orders over 500₺. Shipping cost is 50₺ for smaller orders.'}
          </p>
        </section>
      </motion.div>
    </div>
  )
}
