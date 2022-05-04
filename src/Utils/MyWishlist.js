import axios from "axios";
import {
  GET_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  wishlistFeatures,
} from "../Constants/constants";

const { SET_WISHLIST_DATA, SET_LOADING_WISHLIST } = wishlistFeatures;

export const getMyWishlistItem = async (dispatchWishlist, encodedToken) => {
  try {
    dispatchWishlist({
      type: SET_LOADING_WISHLIST,
      payload: true,
    });

    const response = await axios.get(GET_WISHLIST, {
      headers: { authorization: encodedToken },
    });
    const { data, status } = response;
    const { wishlist } = data;
    if (status === 200) {
      dispatchWishlist({
        type: SET_WISHLIST_DATA,
        payload: wishlist,
      });
    }
  } catch (error) {
    console.log("GET wishlist ERROR", error);
  } finally {
    dispatchWishlist({
      type: SET_LOADING_WISHLIST,
      payload: false,
    });
  }
};

export const addToMyWishlist = async (
  dispatchWishlist,
  encodedToken,
  product
) => {
  try {
    dispatchWishlist({
      type: SET_LOADING_WISHLIST,
      payload: true,
    });

    const response = await axios.post(
      ADD_TO_WISHLIST,
      {
        product,
      },
      {
        headers: { authorization: encodedToken },
      }
    );
    const { data, status } = response;
    const { wishlist } = data;
    if (status === 201) {
      dispatchWishlist({
        type: SET_WISHLIST_DATA,
        payload: wishlist,
      });
    }
  } catch (error) {
    console.dir("addToMywishlist ERROR", error);
  } finally {
    dispatchWishlist({
      type: SET_LOADING_WISHLIST,
      payload: false,
    });
  }
};

export const removeFromMyWishlist = async (
  dispatchWishlist,
  encodedToken,
  productId
) => {
  try {
    dispatchWishlist({
      type: SET_LOADING_WISHLIST,
      payload: true,
    });

    const response = await axios.delete(REMOVE_FROM_WISHLIST + productId, {
      headers: { authorization: encodedToken },
    });
    const { data, status } = response;
    const { wishlist } = data;
    if (status === 200) {
      dispatchWishlist({
        type: SET_WISHLIST_DATA,
        payload: wishlist,
      });
    }
  } catch (error) {
    console.dir("addToMywishlist ERROR", error);
  } finally {
    dispatchWishlist({
      type: SET_LOADING_WISHLIST,
      payload: false,
    });
  }
};
