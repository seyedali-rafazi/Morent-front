import http from "./httpService";

export function addToCard(productId) {
  return http.post(`/cart/add`, { productId }).then(({ data }) => data.data);
}

export function addOff(couponCode) {
  return http.post(`/cart/coupon`, couponCode).then(({ data }) => data.data);
}

export function userPayment() {
  return http.post(`/payment/create`).then(({ data }) => data.data);
}
