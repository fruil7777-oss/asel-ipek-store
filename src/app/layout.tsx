import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartSidebar from '@/components/CartSidebar'

const cairo = Cairo({ subsets: ['arabic', 'latin'] })

export const metadata: Metadata = {
  title: 'Asel Ipek - متجر الحجابات الفاخرة',
  description: 'متجر متخصص في بيع الحجابات الفاخرة والأنيقة بأعلى جودة عالمية',
  keywords: 'حجاب، حجابات، ملابس إسلامية، موضة، فاخر',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <Header />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <CartSidebar />
        <Footer />
      </body>
    </html>
  )
}
