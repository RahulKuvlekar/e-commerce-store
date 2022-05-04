export const GET_PRODUCTS = `/api/products`;
export const GET_CATEGORIES = `/api/categories`;

export const GET_WISHLIST = `/api/user/wishlist`;
export const ADD_TO_WISHLIST = `/api/user/wishlist`;
export const REMOVE_FROM_WISHLIST = `/api/user/wishlist/`;

export const GET_SIGNUP = `/api/auth/signup`;
export const GET_LOGIN = `/api/auth/login`;

export const GET_MYCART = `/api/user/cart`;
export const ADD_TO_MYCART = `/api/user/cart`;
export const REMOVE_FROM_MYCART = `/api/user/cart/`;
export const UPDATE_QUANTITY_FROM_MYCART = `/api/user/cart/`;

export const filterTypes = {
  DISPLAY_PRODUCT: "DISPLAY_PRODUCT",
  DISPLAY_CATEGORIES: "DISPLAY_CATEGORIES",
  SORT_BY_PRICE: "SORT_BY_PRICE",
  SORT_BY_RATING: "SORT_BY_RATING",
  SORT_BY_CATEGORY: "SORT_BY_CATEGORY",
  SORT_BY_BRAND: "SORT_BY_BRAND",
  INCLUDE_OUT_OF_STOCK: "INCLUDE_OUT_OF_STOCK",
  INCLUDE_FAST_DELIVERY: "INCLUDE_FAST_DELIVERY",
  CLEAR_FILTERS: "CLEAR_FILTERS",
};
export const authFeatures = {
  SET_USERINFO: "SET_USERINFO",
  SET_TOKEN: "SET_TOKEN",
  SET_ISAUTHENTICATED: "SET_ISAUTHENTICATED",
  CLEAR_AUTH: "CLEAR_AUTH",
};

export const cartFeatures = {
  SET_CART_DATA: "SET_CART_DATA",
  CLEAR_CART_DATA: "CLEAR_CART_DATA",
  SET_LOADING_CART: "SET_LOADING_CART",
};

export const wishlistFeatures = {
  SET_WISHLIST_DATA: "SET_WISHLIST_DATA",
  CLEAR_WISHLIST_DATA: "CLEAR_WISHLIST_DATA",
  SET_LOADING_WISHLIST: "SET_LOADING_WISHLIST",
};
