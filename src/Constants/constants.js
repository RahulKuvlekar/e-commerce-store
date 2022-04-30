export const GET_PRODUCTS = `/api/products`;
export const GET_CATEGORIES = `/api/categories`;
export const GET_WISHLIST = `/api/user/wishlist`;
export const POST_WISHLIST = `/api/user/wishlist`;
export const DELETE_WISHLIST = `/api/user/wishlist`;
export const GET_SIGNUP = `/api/auth/signup`;
export const GET_LOGIN = `/api/auth/login`;

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
