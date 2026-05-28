'use client'

import { useThemeStore } from '@/store/themeStore'
import { motion } from 'framer-motion'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

const phone = process.env.NEXT_PUBLIC_PHONE || '+966538661699'
const email = process.env.NEXT_PUBLIC_EMAIL || 'contact@aselipek.com'

export default function ContactPage() {
  const { isArabic, isRTL } = useThemeStore()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data:', formData)
    alert(isArabic() ? 'شكراً لرسالتك! سنتواصل معك قريباً' : 'Thank you for your message! We will contact you soon')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className={`max-w-5xl mx-auto px-4 py-12 ${isRTL() ? 'rtl' : 'ltr'}`}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        {isArabic() ? 'تواصل معنا' : 'Contact Us'}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: isRTL() ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="flex items-start gap-4">
            <FiPhone className="text-rose-500 text-2xl mt-1" />
            <div>
              <h3 className="font-bold">{isArabic() ? 'الهاتف' : 'Phone'}</h3>
              <a href={`tel:${phone}`} className="text-gray-600 hover:text-rose-500">
                {phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaWhatsapp className="text-green-500 text-2xl mt-1" />
            <div>
              <h3 className="font-bold">{isArabic() ? 'واتساب' : 'WhatsApp'}</h3>
              <a
                href={`https://wa.me/${phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-500"
              >
                {isArabic() ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-blue-500 text-2xl mt-1">✉️</div>
            <div>
              <h3 className="font-bold">{isArabic() ? 'البريد الإلكتروني' : 'Email'}</h3>
              <a href={`mailto:${email}`} className="text-gray-600 hover:text-blue-500">
                {email}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: isRTL() ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-lg shadow-md"
        >
          <div>
            <label className="block font-bold mb-2">
              {isArabic() ? 'الاسم' : 'Name'}
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder={isArabic() ? 'أدخل اسمك' : 'Enter your name'}
            />
          </div>
          <div>
            <label className="block font-bold mb-2">
              {isArabic() ? 'البريد الإلكتروني' : 'Email'}
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder={isArabic() ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
            />
          </div>
          <div>
            <label className="block font-bold mb-2">
              {isArabic() ? 'الهاتف' : 'Phone'}
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder={isArabic() ? 'أدخل رقم هاتفك' : 'Enter your phone'}
            />
          </div>
          <div>
            <label className="block font-bold mb-2">
              {isArabic() ? 'الرسالة' : 'Message'}
            </label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder={isArabic() ? 'اكتب رسالتك' : 'Write your message'}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-rose-500 text-white py-3 rounded-lg font-bold hover:bg-rose-600 transition-all"
          >
            {isArabic() ? 'إرسال الرسالة' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </div>
  )
}
