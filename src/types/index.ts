export interface Product {
  id: string
  name: string
  nameAr: string
  nameTr: string
  description: string
  descriptionAr: string
  descriptionTr: string
  price: number
  discountPrice?: number
  images: string[]
  category: string
  colors: string[]
  sizes: string[]
  stock: number
  rating: number
  reviews: number
  createdAt: Date
  updatedAt: Date
}

export interface CartItem {
  id: string
  productId: string
  product: Product
  quantity: number
  color?: string
  size?: string
}

export interface User {
  id: string
  email: string
  name: string
  phone: string
  address: string
  city: string
  country: string
  zipCode: string
  role: 'customer' | 'admin'
  createdAt: Date
  updatedAt: Date
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  totalPrice: number
  shippingPrice: number
  discount: number
  finalPrice: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  paymentMethod: 'stripe' | 'paypal' | 'cod'
  paymentStatus: 'pending' | 'completed' | 'failed'
  shippingAddress: {
    name: string
    phone: string
    address: string
    city: string
    country: string
    zipCode: string
  }
  createdAt: Date
  updatedAt: Date
  trackingNumber?: string
}
