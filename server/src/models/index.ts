export type Product = {
  id: string
  name: string
  nameZh: string
  shortDescription: string
  description: string
  price: number
  coverImage?: string
  amount?: number
  options?: Option[]
  selectedOption?: Option
  images: Image[]
  taxable: boolean
  status?: string
}

export type Option = {
  id: string
  label: string
  description?: string
  catalogue?: number
  price: number
  onSale: boolean
}

export type Address = {
  recipient: string
  phone?: string
  country: string
  province: string
  city: string
  postalCode: string
  street?: string
}

export type Order = {
  id?: string
  orderNumber: string
  email: string
  subtotal: number
  discount: number
  shippingFee: number
  tax: number
  taxAfterDiscount: number
  totalPrice: number
  coupon?: Coupon
  addressShipping: Address
  addressBilling?: Address
  billingAsShipping?: boolean
  products: Product[]
  createdAt?: Date
  paymentMethod?: string
  domain: string
}

export type metaOrder = {
  id?: string
  orderNumber?: string
  email?: string
  subtotal?: number
  discount?: number
  tax?: number
  taxAfterDiscount?: number
  totalPrice?: number
  coupon?: Coupon
  addressShipping?: string
  billingAsShipping?: boolean
  products?: string
}

export type Coupon = {
  id?: string
  code: string
  promotion: string
  discount?: number
  fixedPrice?: number
  status?: string
}

export type Image = {
  id: string
  url: string
  priority: number
}

export type Comment = {
  user: string
  productName: string
  email: string
  content: string
  rate: number
  createdAt: Date
}

export type Message = {
  name: string
  email: string
  content: string
}

export type LoginRequestData = {
  userName: string
  password: string
}
