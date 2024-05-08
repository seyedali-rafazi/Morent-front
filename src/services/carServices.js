import http from "./httpService";

export function getAllCars(qs) {
  return http.get(`/product/list${qs}`).then(({ data }) => data.data);
}

export function getCarById(id) {
  return http.get(`/product/${id}`).then(({ data }) => data.data);
}

export function getAllCategory() {
  return http.get(`/cargroup/list`).then(({ data }) => data.data);
}

export function postUserFavourit(id) {
  return http
    .post(`/user/set-favorite-product/${id}`)
    .then(({ data }) => data.data);
}
