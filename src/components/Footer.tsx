'use client'

import Link from 'next/link'
import { useThemeStore } from '@/store/themeStore'
import { FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa'

const phone = process.env.NEXT_PUBLIC_PHONE || '+966538661699'
const email = process.env.NEXT_PUBLIC_EMAIL || 'contact@aselipek.com'

export default function Footer() {
  const { isRTL } = useThemeStore()

  return (
    <footer className={`bg-luxury-900 text-white py-12 ${isRTL() ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Asel Ipek</h3>
            <p className="text-gray-300 text-sm">
              {isRTL()
                ? 'متجر متخصص في بيع الحجابات الفاخرة والأنيقة بأعلى جودة عالمية.'
                : 'Specialized in selling luxury and elegant headscarves with the highest international quality.'}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">{isRTL() ? 'روابط سريعة' : 'Quick Links'}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-rose-400">{isRTL() ? 'الرئيسية' : 'Home'}</Link></li>
              <li><Link href="/shop" className="hover:text-rose-400">{isRTL() ? 'المتجر' : 'Shop'}</Link></li>
              <li><Link href="/about" className="hover:text-rose-400">{isRTL() ? 'من نحن' : 'About'}</Link></li>
              <li><Link href="/contact" className="hover:text-rose-400">{isRTL() ? 'تواصل معنا' : 'Contact'}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{isRTL() ? 'السياسات' : 'Policies'}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-rose-400">{isRTL() ? 'سياسة الخصوصية' : 'Privacy'}</Link></li>
              <li><Link href="/returns" className="hover:text-rose-400">{isRTL() ? 'سياسة الإرجاع' : 'Returns'}</Link></li>
              <li><Link href="/shipping" className="hover:text-rose-400">{isRTL() ? 'سياسة الشحن' : 'Shipping'}</Link></li>
              <li><Link href="/terms" className="hover:text-rose-400">{isRTL() ? 'الشروط والأحكام' : 'Terms'}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{isRTL() ? 'تواصل معنا' : 'Contact Us'}</h4>
            <div className="space-y-3 text-sm">
              <a href={`tel:${phone}`} className="flex items-center gap-2 hover:text-rose-400">
                <FiPhone size={16} />
                {phone}
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-rose-400">
                <FiMail size={16} />
                {email}
              </a>
              <div className="flex gap-4 pt-2">
                <a href={`https://wa.me/${phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-rose-400">
                  <FaWhatsapp size={20} />
                </a>
                <a href="#" className="hover:text-rose-400"><FaInstagram size={20} /></a>
                <a href="#" className="hover:text-rose-400"><FaTiktok size={20} /></a>
                <a href="#" className="hover:text-rose-400"><FaFacebook size={20} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 Asel Ipek. {isRTL() ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  )
}
