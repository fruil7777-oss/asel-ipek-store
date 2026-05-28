'use client'

import { useThemeStore } from '@/store/themeStore'
import { motion } from 'framer-motion'
import { FiShoppingCart } from 'react-icons/fi'
import { useCartStore } from '@/store/cartStore'
import { useState } from 'react'
import Image from 'next/image'

const products = [
  {
    id: '1',
    name: 'Luxury Hijab Silk',
    nameAr: 'حجاب حرير فاخر',
    nameTr: 'Lüks İpek Başörtüsü',
    price: 150,
    image: 'https://images.unsplash.com/photo-1599184861919-e6244f172dba?w=500&h=500&fit=crop',
    colors: ['Black', 'White', 'Red', 'Blue', 'Pink'],
    rating: 5,
    reviews: 24,
  },
  {
    id: '2',
    name: 'Classic Chiffon Hijab',
    nameAr: 'حجاب شيفون كلاسيكي',
    nameTr: 'Klasik Şifon Başörtüsü',
    price: 150,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop',
    colors: ['Beige', 'Brown', 'Navy', 'Grey', 'Cream'],
    rating: 5,
    reviews: 18,
  },
  {
    id: '3',
    name: 'Premium Cotton Hijab',
    nameAr: 'حجاب قطن مميز',
    nameTr: 'Premium Pamuk Başörtüsü',
    price: 150,
    image: 'https://images.unsplash.com/photo-1619196367384-6d4f8aeb3562?w=500&h=500&fit=crop',
    colors: ['Black', 'White', 'Purple', 'Green', 'Orange'],
    rating: 5,
    reviews: 32,
  },
  {
    id: '4',
    name: 'Elegant Lace Hijab',
    nameAr: 'حجاب دانتيل أنيق',
    nameTr: 'Şık Dantel Başörtüsü',
    price: 150,
    image: 'https://images.unsplash.com/photo-1599184861919-e6244f172dba?w=500&h=500&fit=crop&q=80',
    colors: ['Black', 'White', 'Ivory', 'Navy', 'Maroon'],
    rating: 5,
    reviews: 15,
  },
  {
    id: '5',
    name: 'Summer Light Hijab',
    nameAr: 'حجاب صيفي خفيف',
    nameTr: 'Yaz Hafif Başörtüsü',
    price: 150,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop&q=75',
    colors: ['Pastel Pink', 'Pastel Blue', 'Pastel Green', 'Yellow', 'Coral'],
    rating: 5,
    reviews: 21,
  },
  {
    id: '6',
    name: 'Luxury Evening Hijab',
    nameAr: 'حجاب سهرة فاخر',
    nameTr: 'Lüks Akşam Başörtüsü',
    price: 150,
    image: 'https://images.unsplash.com/photo-1599184861919-e6244f172dba?w=500&h=500&fit=crop&q=85',
    colors: ['Gold', 'Silver', 'Rose Gold', 'Champagne', 'Bronze'],
    rating: 5,
    reviews: 28,
  },
]

export default function ShopPage() {
  const { isArabic, language, isRTL } = useThemeStore()
  const { addItem } = useCartStore()
  const [selectedColor, setSelectedColor] = useState<{ [key: string]: string }>({})

  const handleAddToCart = (product: typeof products[0]) => {
    const color = selectedColor[product.id] || product.colors[0]
    addItem({
      id: `${product.id}-${color}`,
      productId: product.id,
      product: product as any,
      quantity: 1,
      color,
    })
  }

  const getProductName = (product: typeof products[0]) => {
    if (language === 'ar') return product.nameAr
    if (language === 'tr') return product.nameTr
    return product.name
  }

  return (
    <div className={`max-w-7xl mx-auto px-4 py-12 ${isRTL() ? 'rtl' : 'ltr'}`}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-4"
      >
        {isArabic() ? 'المتجر' : language === 'tr' ? 'Mağaza' : 'Shop'}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gray-600 mb-12 max-w-2xl"
      >
        {isArabic()
          ? 'اكتشف مجموعتنا الفاخرة من الحجابات عالية الجودة'
          : language === 'tr'
          ? 'Yüksek kaliteli başörtülerden oluşan lüks koleksiyonumuzu keşfedin'
          : 'Discover our luxury collection of high-quality hijabs'}
      </motion.p>

      <motion.div
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="relative h-64 w-full overflow-hidden bg-gray-200">
              <Image
                src={product.image}
                alt={getProductName(product)}
                fill
                className="w-full h-full object-cover hover:scale-110 transition-transform"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{getProductName(product)}</h3>

              <div className="mb-4">
                <p className="text-sm font-bold mb-2">
                  {isArabic() ? 'الألوان' : language === 'tr' ? 'Renkler' : 'Colors'}:
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor({ ...selectedColor, [product.id]: color })}
                      className={`px-3 py-1 text-sm rounded border-2 transition-all ${
                        selectedColor[product.id] === color
                          ? 'border-rose-500 bg-rose-50'
                          : 'border-gray-300 hover:border-rose-300'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-rose-500">{product.price}₺</span>
                <div className="text-sm text-gray-600">
                  ⭐ {product.rating} ({product.reviews})
                </div>
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-rose-500 hover:bg-rose-600 text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
              >
                <FiShoppingCart size={20} />
                {isArabic() ? 'أضف للسلة' : language === 'tr' ? 'Sepete Ekle' : 'Add to Cart'}
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
