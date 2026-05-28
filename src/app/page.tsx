'use client'

import { motion } from 'framer-motion'
import { useThemeStore } from '@/store/themeStore'
import Link from 'next/link'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  const { isArabic, isRTL } = useThemeStore()

  return (
    <div>
      <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-luxury-50 via-white to-rose-50 px-4">
        <div className={`max-w-5xl mx-auto text-center ${isRTL() ? 'rtl' : 'ltr'}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-500 to-luxury-700 bg-clip-text text-transparent">
                Asel Ipek
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {isArabic()
                ? 'متجر متخصص في بيع الحجابات الفاخرة والأنيقة بأعلى جودة عالمية'
                : 'Specialized in selling luxury and elegant headscarves with the highest international quality.'}
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div variants={item}>
              <Link
                href="/shop"
                className="inline-block px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg font-bold hover:shadow-lg transition-all"
              >
                {isArabic() ? 'تسوق الآن' : 'Shop Now'}
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link
                href="/about"
                className="inline-block px-8 py-3 border-2 border-luxury-600 text-luxury-600 rounded-lg font-bold hover:bg-luxury-50 transition-all"
              >
                {isArabic() ? 'تعرف علينا' : 'Learn More'}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              {
                title: isArabic() ? 'جودة فاخرة' : 'Luxury Quality',
                desc: isArabic() ? 'أفضل المواد الخام والحرفية الفنية' : 'Best raw materials and craftsmanship',
              },
              {
                title: isArabic() ? 'شحن سريع' : 'Fast Shipping',
                desc: isArabic() ? 'توصيل سريع وآمن لجميع أنحاء العالم' : 'Quick and safe delivery worldwide',
              },
              {
                title: isArabic() ? 'ضمان الجودة' : 'Quality Guarantee',
                desc: isArabic() ? 'ضمان استرجاع 100% إذا لم تكن راضياً' : '100% satisfaction guarantee',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-luxury-700">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            {isArabic() ? 'قريباً المزيد' : 'More Coming Soon'}
          </h2>
          <p className="text-gray-600 mb-8">
            {isArabic()
              ? 'نحن نعمل على إضافة تشكيلة جديدة رائعة من الحجابات الفاخرة'
              : 'We are working on adding a wonderful new collection of luxury headscarves'}
          </p>
        </motion.div>
      </section>
    </div>
  )
}
