import axios from "axios";
import {
  GET_MYCART,
  ADD_TO_MYCART,
  REMOVE_FROM_MYCART,
  UPDATE_QUANTITY_FROM_MYCART,
  cartFeatures,
} from "../Constants/constants";

const { SET_CART_DATA, SET_LOADING_CART } = cartFeatures;

export const getMyCartItem = async (cartDispatch, encodedToken) => {
  try {
    cartDispatch({
      type: SET_LOADING_CART,
      payload: true,
    });

    const response = await axios.get(GET_MYCART, {
      headers: { authorization: encodedToken },
    });
    const { data, status } = response;
    const { cart } = data;
    if (status === 200) {
      cartDispatch({
        type: SET_CART_DATA,
        payload: cart,
      });
    }
  } catch (error) {
    console.log("GET CART ERROR", error);
  } finally {
    cartDispatch({
      type: SET_LOADING_CART,
      payload: false,
    });
  }
};

export const addToMyCart = async (cartDispatch, encodedToken, product) => {
  try {
    cartDispatch({
      type: SET_LOADING_CART,
      payload: true,
    });

    const response = await axios.post(
      ADD_TO_MYCART,
      {
        product,
      },
      {
        headers: { authorization: encodedToken },
      }
    );
    const { data, status } = response;
    const { cart } = data;
    if (status === 201) {
      cartDispatch({
        type: SET_CART_DATA,
        payload: cart,
      });
    }
  } catch (error) {
    console.dir("addToMyCart ERROR", error);
  } finally {
    cartDispatch({
      type: SET_LOADING_CART,
      payload: false,
    });
  }
};

export const removeFromMyCart = async (
  cartDispatch,
  encodedToken,
  productId
) => {
  try {
    cartDispatch({
      type: SET_LOADING_CART,
      payload: true,
    });

    const response = await axios.delete(REMOVE_FROM_MYCART + productId, {
      headers: { authorization: encodedToken },
    });
    const { data, status } = response;
    const { cart } = data;
    if (status === 200) {
      cartDispatch({
        type: SET_CART_DATA,
        payload: cart,
      });
    }
  } catch (error) {
    console.dir("addToMyCart ERROR", error);
  } finally {
    cartDispatch({
      type: SET_LOADING_CART,
      payload: false,
    });
  }
};

export const updateMyCart = async (
  cartDispatch,
  encodedToken,
  productId,
  type
) => {
  try {
    cartDispatch({
      type: SET_LOADING_CART,
      payload: true,
    });

    const response = await axios.post(
      UPDATE_QUANTITY_FROM_MYCART + productId,
      {
        action: {
          type: type,
        },
      },
      {
        headers: { authorization: encodedToken },
      }
    );
    const { data, status } = response;
    const { cart } = data;
    if (status === 200) {
      cartDispatch({
        type: SET_CART_DATA,
        payload: cart,
      });
    }
  } catch (error) {
    console.dir("addToMyCart ERROR", error);
  } finally {
    cartDispatch({
      type: SET_LOADING_CART,
      payload: false,
    });
  }
};
