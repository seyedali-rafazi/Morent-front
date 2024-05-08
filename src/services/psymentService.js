import http from "./httpService";

export function addToCard(productId) {
  return http.post(`/cart/add`, { productId }).then(({ data }) => data.data);
}
