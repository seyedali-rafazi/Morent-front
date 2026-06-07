export interface CarGroup {
  _id: number;
  title: string;
}

export interface Car {
  _id: string;
  title: string;
  typecars: string;
  imageLink: string;
  frames?: string[];
  description: string;
  capacity: number;
  steering: string;
  gasoline: number;
  offPrice: number;
  price: number;
  discount: number;
  popularity: number;
  createdAt: string;
  productId?: string;
}

export interface CartQuantity {
  quantity: number;
}

export interface CartItem extends Car {
  productId?: string;
  quantity: CartQuantity;
}

export interface Cart {
  productDetail: CartItem[];
  couponDiscount: number;
  products?: CartItem[];
}

export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  favoriteProduct: Car[];
  cart?: Cart;
}

export interface Payment {
  _id: string;
  cart: { productDetail: CartItem[] };
  products?: CartItem[];
  date: string;
  status: string;
}

export interface UserResponse {
  user: User;
  cart: Cart;
  payments: Payment[];
}

export interface MessageResponse {
  message: string;
}

export interface CarsResponse {
  products: Car[];
}

export interface CarResponse {
  product: Car;
}

export interface CategoriesResponse {
  carGroup: CarGroup[];
}

export interface BillingForm {
  name: string;
  phoneNumber: string;
  address: string;
  city: string;
}

export interface CarQueryParams {
  search?: string;
  carGroup?: string;
  capacite?: string;
  offPrice?: string;
  sort?: string;
}

export interface AppState {
  user: User;
  cart: Cart;
  payments: Payment[];
}

export interface LegacyCart {
  products?: CartItem[];
  productDetail?: CartItem[];
  couponDiscount?: number;
}

export interface LegacyPayment extends Partial<Payment> {
  products?: CartItem[];
}

export interface CouponPayload {
  couponCode?: string;
}

export interface OtpPayload {
  phone?: string;
}

export interface CompleteProfilePayload {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

