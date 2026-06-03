'use client'

import { useThemeStore } from '@/store/themeStore'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AdminPage() {
  const { isArabic, language, isRTL } = useThemeStore()

  return (
    <div className={`max-w-4xl mx-auto px-4 py-12 ${isRTL() ? 'rtl' : 'ltr'}`}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-8"
      >
        {isArabic() ? 'لوحة التحكم' : language === 'tr' ? 'Yonetim Paneli' : 'Admin Dashboard'}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            {isArabic() ? 'الطلبات' : language === 'tr' ? 'Siparisler' : 'Orders'}
          </h2>
          <p className="text-gray-600 mb-4">
            {isArabic() ? 'إدارة جميع الطلبات' : language === 'tr' ? 'Tum siparisleri yonetme' : 'Manage all orders'}
          </p>
          <Link href="/admin/orders" className="text-rose-500 hover:text-rose-600 font-bold">
            {isArabic() ? 'عرض الطلبات' : language === 'tr' ? 'Siparisleri Goster' : 'View Orders'} →
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            {isArabic() ? 'المنتجات' : language === 'tr' ? 'Urunler' : 'Products'}
          </h2>
          <p className="text-gray-600 mb-4">
            {isArabic() ? 'إضافة وتعديل المنتجات' : language === 'tr' ? 'Urun ekle ve duzenle' : 'Add and manage products'}
          </p>
          <Link href="/admin/products" className="text-rose-500 hover:text-rose-600 font-bold">
            {isArabic() ? 'عرض المنتجات' : language === 'tr' ? 'Urunleri Goster' : 'View Products'} →
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            {isArabic() ? 'الإحصائيات' : language === 'tr' ? 'Istatistikler' : 'Statistics'}
          </h2>
          <p className="text-gray-600 mb-4">
            {isArabic() ? 'عرض الإحصائيات والتقارير' : language === 'tr' ? 'Istatistikleri ve raporlari goster' : 'View statistics and reports'}
          </p>
          <Link href="/admin/stats" className="text-rose-500 hover:text-rose-600 font-bold">
            {isArabic() ? 'عرض الإحصائيات' : language === 'tr' ? 'Istatistikleri Goster' : 'View Stats'} →
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            {isArabic() ? 'الإعدادات' : language === 'tr' ? 'Ayarlar' : 'Settings'}
          </h2>
          <p className="text-gray-600 mb-4">
            {isArabic() ? 'إدارة إعدادات المتجر' : language === 'tr' ? 'Magazanin ayarlarini yonetme' : 'Manage store settings'}
          </p>
          <Link href="/admin/settings" className="text-rose-500 hover:text-rose-600 font-bold">
            {isArabic() ? 'الإعدادات' : language === 'tr' ? 'Ayarlara Git' : 'Go to Settings'} →
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 bg-blue-50 p-8 rounded-lg border border-blue-200"
      >
        <h3 className="text-xl font-bold text-blue-900 mb-4">
          {isArabic() ? 'معلومات النظام' : language === 'tr' ? 'Sistem Bilgisi' : 'System Information'}
        </h3>
        <ul className="text-blue-800 space-y-2">
          <li>✅ {isArabic() ? 'نظام الدفع: جاهز' : language === 'tr' ? 'Odeme Sistemi: Hazir' : 'Payment System: Ready'}</li>
          <li>✅ {isArabic() ? 'قاعدة البيانات: متصلة' : language === 'tr' ? 'Veri Tabani: Bagli' : 'Database: Connected'}</li>
          <li>✅ {isArabic() ? 'سلة التسوق: تعمل' : language === 'tr' ? 'Alisveris Sepeti: Calisyor' : 'Shopping Cart: Working'}</li>
          <li>✅ {isArabic() ? 'اللغات: 3 لغات مدعومة' : language === 'tr' ? 'Diller: 3 dil destekleniyor' : 'Languages: 3 languages supported'}</li>
        </ul>
      </motion.div>
    </div>
  )
}
