'use client'

import { useThemeStore } from '@/store/themeStore'
import { motion } from 'framer-motion'

export default function PrivacyPage() {
  const { isArabic, language, isRTL } = useThemeStore()

  return (
    <div className={`max-w-4xl mx-auto px-4 py-12 ${isRTL() ? 'rtl' : 'ltr'}`}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-8"
      >
        {isArabic() ? 'سياسة الخصوصية' : language === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-md space-y-6 text-gray-700"
      >
        <section>
          <h2 className="text-2xl font-bold mb-4">
            {isArabic() ? 'مقدمة' : language === 'tr' ? 'Giriş' : 'Introduction'}
          </h2>
          <p>
            {isArabic()
              ? 'في Asel Ipek، نحترم خصوصيتك ونلتزم بحماية بيانات شخصية.'
              : language === 'tr'
              ? 'Asel Ipek\\'te, gizliliğinize saygı duyuyor ve kişisel verilerinizi korumayı taahhüt ediyoruz.'
              : 'At Asel Ipek, we respect your privacy and are committed to protecting your personal data.'}
          </p>
        </section>
      </motion.div>
    </div>
  )
}
