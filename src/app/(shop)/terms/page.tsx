'use client'

import { useThemeStore } from '@/store/themeStore'
import { motion } from 'framer-motion'

export default function TermsPage() {
  const { isArabic, language, isRTL } = useThemeStore()

  return (
    <div className={`max-w-4xl mx-auto px-4 py-12 ${isRTL() ? 'rtl' : 'ltr'}`}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-8"
      >
        {isArabic() ? 'الشروط والأحكام' : language === 'tr' ? 'Şartlar ve Koşullar' : 'Terms & Conditions'}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-md space-y-6 text-gray-700"
      >
        <section>
          <h2 className="text-2xl font-bold mb-4">
            {isArabic() ? 'الشروط العامة' : language === 'tr' ? 'Genel Şartlar' : 'General Terms'}
          </h2>
          <p>
            {isArabic()
              ? 'باستخدام هذا الموقع، توافق على جميع شروطنا.'
              : language === 'tr'
              ? 'Bu siteyi kullanarak, tüm koşullarımızı kabul etmiş olursunuz.'
              : 'By using this site, you agree to all our terms.'}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            {isArabic() ? 'المسؤولية' : language === 'tr' ? 'Sorumluluk' : 'Liability'}
          </h2>
          <p>
            {isArabic()
              ? 'نحن غير مسؤولين عن أي خسائر غير مباشرة.'
              : language === 'tr'
              ? 'Dolaylı kayıplar için sorumlu değiliz.'
              : 'We are not liable for any indirect losses.'}
          </p>
        </section>
      </motion.div>
    </div>
  )
}
