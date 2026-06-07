import { cars } from "../data/cars";
import { carGroups } from "../data/carGroups";

const STORAGE_KEY = "morent_app_state";

const defaultState = {
  user: {
    _id: "demo-user",
    name: "Demo User",
    email: "demo@morent.com",
    phone: "+49 123 456 7890",
    favoriteProduct: [],
  },
  cart: { productDetail: [], couponDiscount: 0 },
  payments: [],
};

function normalizeCartItem(product) {
  return {
    ...product,
    quantity:
      typeof product.quantity === "object" && product.quantity?.quantity != null
        ? product.quantity
        : { quantity: product.quantity || 1 },
  };
}

function normalizeCart(cart) {
  if (!cart) return { productDetail: [], couponDiscount: 0 };

  if (cart.productDetail) {
    return {
      productDetail: cart.productDetail.map(normalizeCartItem),
      couponDiscount: cart.couponDiscount || 0,
    };
  }

  const legacyProducts = cart.products || [];
  return {
    productDetail: legacyProducts.map(normalizeCartItem),
    couponDiscount: cart.couponDiscount || 0,
  };
}

function normalizePayments(payments = []) {
  return payments.map((payment) => {
    if (payment.cart?.productDetail) return payment;

    return {
      ...payment,
      cart: {
        productDetail: (payment.products || []).map(normalizeCartItem),
      },
    };
  });
}

function readState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);

    const parsed = JSON.parse(raw);
    const cart = normalizeCart(parsed.cart);

    return {
      ...structuredClone(defaultState),
      ...parsed,
      cart,
      payments: normalizePayments(parsed.payments),
      user: {
        ...defaultState.user,
        ...parsed.user,
        favoriteProduct: parsed.user?.favoriteProduct || [],
      },
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function writeState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function buildUserResponse(state) {
  const cart = normalizeCart(state.cart);
  return {
    user: {
      ...state.user,
      favoriteProduct: state.user?.favoriteProduct || [],
      cart,
    },
    cart,
    payments: normalizePayments(state.payments),
  };
}

function delay(ms = 120) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseQueryString(qs = "") {
  const search = qs.startsWith("?") ? qs.slice(1) : qs;
  const params = new URLSearchParams(search);
  return Object.fromEntries(params.entries());
}

function filterAndSortCars(queryObject = {}) {
  let result = [...cars];

  if (queryObject.search) {
    const term = queryObject.search.toLowerCase();
    result = result.filter(
      (car) =>
        car.title.toLowerCase().includes(term) ||
        car.typecars.toLowerCase().includes(term) ||
        car.description.toLowerCase().includes(term)
    );
  }

  if (queryObject.carGroup) {
    result = result.filter(
      (car) => car.typecars.toLowerCase() === queryObject.carGroup.toLowerCase()
    );
  }

  if (queryObject.capacite) {
    const cap = Number(queryObject.capacite);
    result = result.filter((car) => car.capacity === cap);
  }

  if (queryObject.offPrice) {
    const maxPrice = Number(queryObject.offPrice);
    result = result.filter((car) => car.offPrice <= maxPrice);
  }

  const sort = queryObject.sort;
  if (sort === "latest") {
    result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (sort === "earliest") {
    result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  } else if (sort === "popular") {
    result.sort((a, b) => b.popularity - a.popularity);
  }

  return result;
}

export async function getAllCars(qs = "") {
  await delay();
  const queryObject = parseQueryString(qs);
  const products = filterAndSortCars(queryObject);
  return { products };
}

export async function getCarById(id) {
  await delay();
  const product = cars.find((car) => car._id === id);
  if (!product) throw new Error("Car not found");
  return { product };
}

export async function getAllCategory() {
  await delay();
  return { carGroup: carGroups };
}

export async function getUser() {
  await delay();
  return buildUserResponse(readState());
}

export async function getOtp(data) {
  await delay();
  const state = readState();
  state.user = {
    ...state.user,
    phone: data?.phone || state.user.phone,
  };
  writeState(state);
  return { message: "OTP verified — welcome to MORENT!" };
}

export async function completeUser(data) {
  await delay();
  const state = readState();
  state.user = { ...state.user, ...data };
  writeState(state);
  return { message: "Profile updated successfully" };
}

export async function userLogout() {
  await delay();
  writeState(structuredClone(defaultState));
  return { message: "Logged out" };
}

export async function postUserFavourit(id) {
  await delay();
  const state = readState();
  const car = cars.find((c) => c._id === id);
  if (!car) throw new Error("Car not found");

  const favorites = state.user.favoriteProduct || [];
  const exists = favorites.some((f) => f._id === id);

  if (exists) {
    state.user.favoriteProduct = favorites.filter((f) => f._id !== id);
  } else {
    state.user.favoriteProduct = [...favorites, car];
  }

  writeState(state);
  return {
    message: exists ? "Removed from favorites" : "Added to favorites",
  };
}

export async function addToCard(productId) {
  await delay();
  const state = readState();
  const car = cars.find((c) => c._id === productId);
  if (!car) throw new Error("Car not found");

  const cart = normalizeCart(state.cart);
  const existing = cart.productDetail.find((p) => p._id === productId);

  if (existing) {
    existing.quantity.quantity += 1;
  } else {
    cart.productDetail.push({
      ...car,
      productId,
      quantity: { quantity: 1 },
    });
  }

  state.cart = cart;
  writeState(state);
  return { message: `${car.title} added to cart` };
}

export async function addOff(couponCode) {
  await delay();
  const state = readState();
  const code =
    typeof couponCode === "string" ? couponCode : couponCode?.couponCode;

  if (code?.toUpperCase() === "MORENT20") {
    state.cart = normalizeCart(state.cart);
    state.cart.couponDiscount = 20;
    writeState(state);
    return { message: "20% discount applied!" };
  }

  throw new Error("Invalid coupon code");
}

export async function userPayment() {
  await delay();
  const state = readState();
  const cart = normalizeCart(state.cart);

  if (!cart.productDetail.length) {
    throw new Error("Your cart is empty");
  }

  const payment = {
    _id: `order-${Date.now()}`,
    cart: {
      productDetail: cart.productDetail.map((item) => ({ ...item })),
    },
    date: new Date().toISOString(),
    status: "confirmed",
  };

  state.payments = [payment, ...normalizePayments(state.payments)];
  state.cart = { productDetail: [], couponDiscount: 0 };
  writeState(state);

  return { message: "Payment successful! Your car is booked." };
}

export { cars, carGroups };
