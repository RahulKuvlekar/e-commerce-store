import { filterTypes } from "../Constants/constants";

const {
  DISPLAY_PRODUCT,
  DISPLAY_CATEGORIES,
  SORT_BY_PRICE,
  SORT_BY_PRICE_RANGE,
  SORT_BY_RATING,
  SORT_BY_CATEGORY,
  SORT_BY_BRAND,
  INCLUDE_OUT_OF_STOCK,
  INCLUDE_FAST_DELIVERY,
  CLEAR_FILTERS,
} = filterTypes;

const productReducer = (prevState, action) => {
  switch (action.type) {
    case DISPLAY_PRODUCT:
      return { ...prevState, productList: action.payload };
    case DISPLAY_CATEGORIES:
      return { ...prevState, categoryList: action.payload };
    case SORT_BY_PRICE:
      return { ...prevState, price: action.payload };
    case SORT_BY_PRICE_RANGE:
      return { ...prevState, priceRange: Number(action.payload) };
    case SORT_BY_RATING:
      return { ...prevState, rating: action.payload };
    case SORT_BY_CATEGORY:
      return prevState.category.includes(action.payload)
        ? {
            ...prevState,
            category: [
              ...prevState.category.filter((data) => data !== action.payload),
            ],
          }
        : {
            ...prevState,
            category: [...prevState.category, action.payload],
          };
    case SORT_BY_BRAND:
      return prevState.brand.includes(action.payload)
        ? {
            ...prevState,
            brand: [
              ...prevState.brand.filter((data) => data !== action.payload),
            ],
          }
        : {
            ...prevState,
            brand: [...prevState.brand, action.payload],
          };
    case INCLUDE_OUT_OF_STOCK:
      return { ...prevState, outOfStock: !prevState.outOfStock };
    case INCLUDE_FAST_DELIVERY:
      return { ...prevState, fastDelivery: !prevState.fastDelivery };
    case CLEAR_FILTERS:
      return {
        ...prevState,
        price: null,
        priceRange: 10000,
        rating: null,
        category: [],
        brand: [],
        other: [],
        outOfStock: false,
        fastDelivery: false,
      };
    default:
      return prevState;
  }
};

export { productReducer };
