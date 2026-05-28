'use client'

import { useThemeStore } from '@/store/themeStore'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const { isArabic, isRTL } = useThemeStore()

  return (
    <div className={`max-w-5xl mx-auto px-4 py-12 ${isRTL() ? 'rtl' : 'ltr'}`}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-8"
      >
        {isArabic() ? 'من نحن' : 'About Us'}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <p className="text-gray-700 text-lg mb-4">
          {isArabic()
            ? 'Asel Ipek متخصصة في بيع الحجابات الفاخرة والأنيقة بأعلى جودة عالمية. نؤمن بأن الحجاب هو تعبير عن الشخصية والأناقة، لذلك نختار بعناية أفضل المواد والألوان والتصاميم.'
            : 'Asel Ipek specializes in selling luxury and elegant headscarves with the highest international quality. We believe that the hijab is an expression of personality and elegance, so we carefully select the best materials, colors, and designs.'}
        </p>
      </motion.div>
    </div>
  )
}
