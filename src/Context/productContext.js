import React, { useEffect } from "react";
import { createContext, useReducer } from "react";
import {
  filterTypes,
  GET_PRODUCTS,
  GET_CATEGORIES,
} from "../Constants/constants";
import { productReducer } from "../Reducer/productReducer";
import axios from "axios";
import { getDiscountedPrice } from "../Utils/Products";
import { products } from "../backend/db/products";
import { categories } from "../backend/db/categories";

const ProductContext = createContext({
  productState: Array,
  dispatchProduct: Function,
  price: String,
  rating: Number,
  category: Array,
  brand: Array,
  outOfStock: Boolean,
  fastDelivery: Boolean,
});

const ProductProvider = ({ children }) => {
  const { DISPLAY_PRODUCT, DISPLAY_CATEGORIES } = filterTypes;
  const [productState, dispatchProduct] = useReducer(productReducer, {
    productList: [],
    categoryList: [],
    price: null,
    rating: null,
    category: [],
    brand: [],
    other: [],
    outOfStock: false,
    fastDelivery: false,
  });

  useEffect(() => {
    (async () => {
      const API_ENDPOINTS = [GET_PRODUCTS, GET_CATEGORIES];
      const REQUESTS = API_ENDPOINTS.map((req) => axios.get(req));

      const response = await axios.all(REQUESTS);
      // Products Response
      const { data, status } = response[0];
      const { products } = data;
      if (status !== 200) return;
      const productList = products.map((product) => ({
        ...product,
        discountedPrice: getDiscountedPrice(product.price, product.discount),
      }));

      dispatchProduct({
        type: DISPLAY_PRODUCT,
        payload: productList,
      });

      // Category Response
      const { data: categoryData, status: categoryStatus } = response[1];
      const { categories } = categoryData;
      if (categoryStatus !== 200) return;
      dispatchProduct({
        type: DISPLAY_CATEGORIES,
        payload: categories,
      });
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ productState, dispatchProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
