'use client'

import { useThemeStore } from '@/store/themeStore'
import { motion } from 'framer-motion'
import { FiPhone, FiMail } from 'react-icons/fi'
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
    alert(isArabic() ? 'شكراً لرسالتك!' : 'Thank you for your message!')
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
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: isRTL() ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-lg shadow-md"
        >
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder={isArabic() ? 'الاسم' : 'Name'}
          />
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder={isArabic() ? 'البريد الإلكتروني' : 'Email'}
          />
          <button
            type="submit"
            className="w-full bg-rose-500 text-white py-2 rounded-lg font-bold hover:bg-rose-600"
          >
            {isArabic() ? 'إرسال' : 'Send'}
          </button>
        </motion.form>
      </div>
    </div>
  )
}
