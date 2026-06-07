import type { CartItem } from "../types";

export function totalPrice(products?: CartItem[]): number | undefined {
  return products?.reduce(
    (total, product) =>
      total + parseInt(String(product.offPrice * product.quantity.quantity)),
    0
  );
}

export function totalGrossPrice(products?: CartItem[]): number | undefined {
  return products?.reduce(
    (total, product) =>
      total + parseInt(String(product.price * product.quantity.quantity)),
    0
  );
}

export function totalOffAmount(products?: CartItem[]): number | undefined {
  return products?.reduce(
    (total, product) =>
      total +
      parseInt(
        String((product.price - product.offPrice) * product.quantity.quantity)
      ),
    0
  );
}
