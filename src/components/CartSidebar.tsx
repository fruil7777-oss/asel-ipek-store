'use client'

import { useUIStore } from '@/store/uiStore'
import { useCartStore } from '@/store/cartStore'
import { useThemeStore } from '@/store/themeStore'
import { motion } from 'framer-motion'
import { FiX, FiTrash2 } from 'react-icons/fi'
import Link from 'next/link'

export default function CartSidebar() {
  const { isCartOpen, setCartOpen } = useUIStore()
  const { items, removeItem, getTotalPrice, clearCart } = useCartStore()
  const { isRTL, isArabic, language } = useThemeStore()

  if (!isCartOpen) return null

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setCartOpen(false)}
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
      />
      <motion.div
        initial={{ x: isRTL() ? 400 : -400 }}
        animate={{ x: 0 }}
        exit={{ x: isRTL() ? 400 : -400 }}
        className={`fixed top-0 ${isRTL() ? 'right-0' : 'left-0'} h-full w-full max-w-md bg-white z-50 shadow-xl flex flex-col overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">{isArabic() ? 'السلة' : language === 'tr' ? 'Sepet' : 'Cart'}</h2>
          <button onClick={() => setCartOpen(false)} className="p-2 hover:bg-gray-100 rounded">
            <FiX size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center py-8">{isArabic() ? 'السلة فارغة' : language === 'tr' ? 'Sepet Boş' : 'Cart is empty'}</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-bold">{item.product.name}</h3>
                    <p className="text-sm text-gray-600">{item.quantity} x {item.product.price}₺</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:bg-red-50 p-2 rounded"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between text-xl font-bold">
              <span>{isArabic() ? 'الإجمالي' : language === 'tr' ? 'Toplam' : 'Total'}:</span>
              <span>{getTotalPrice().toFixed(2)}₺</span>
            </div>
            <Link
              href="/checkout"
              onClick={() => setCartOpen(false)}
              className="block w-full bg-rose-500 text-white py-3 rounded-lg font-bold text-center hover:bg-rose-600"
            >
              {isArabic() ? 'الدفع' : language === 'tr' ? 'Ödeme' : 'Checkout'}
            </Link>
            <button onClick={() => clearCart()} className="w-full border-2 border-gray-300 py-3 rounded-lg font-bold hover:bg-gray-50">
              {isArabic() ? 'تفريغ السلة' : language === 'tr' ? 'Sepeti Boşalt' : 'Clear Cart'}
            </button>
          </div>
        )}
      </motion.div>
    </>
  )
}
