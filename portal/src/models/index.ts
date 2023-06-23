export type Product = {
  id: string
  name: string
  nameZh: string
  shortDescription: string
  shortDescriptionZh: string
  description: string
  descriptionZh: string
  price: number
  coverImage?: string
  amount: number
  options?: Option[]
  selectedOption?: Option
  images: Image[]
  taxable: boolean
  status?: string
  comments: Comment[]
  relatedProducts: { id: string }[]
  pathName: string
  properties: string
  propertiesZh: string
  type: string
  video: string
  videoImage: string
  statusDescription?: string
  statusDescriptionZh?: string
}
export type Option = {
  id: string
  label: string
  description?: string
  catalogue?: number
  price: number
  labelZh: string
  onSale: boolean
}
export type Address = {
  recipient: string
  email?: string
  phone?: string
  country: string
  province: string
  city: string
  postalCode: string
  street?: string
  streetExtra?: string
}
export type Order = {
  id?: string
  createdAt?: Date
  orderNumber?: string
  email: string
  subtotal: number
  discount: number
  tax?: number
  shippingFee?: number
  taxAfterDiscount?: number
  totalPrice?: number
  coupon?: Coupon
  addressShipping: Address
  addressBilling?: Address
  billingAsShipping?: boolean
  products: Product[]
  paymentMethod?: string
  domain: string
}
export type Coupon = {
  id?: string
  code: string
  promotion: string
  discount?: number
  fixedPrice?: number
  status?: string
  numberOfUse: number
  expireTime: Date
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
  createdAt: Date | string
}
export type Message = {
  name: string
  email: string
  content: string
}
