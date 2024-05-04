import http from "./httpService";

export function getAllCars(qs) {
  return http.get(`/product/list${qs}`).then(({ data }) => data.data);
}
