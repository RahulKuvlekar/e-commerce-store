import { cartFeatures } from "../Constants/constants";

const { SET_CART_DATA, CLEAR_CART_DATA, SET_LOADING_CART } = cartFeatures;

const cartReducer = (prevState, action) => {
  switch (action.type) {
    case SET_CART_DATA:
      return { ...prevState, cartList: [...action.payload] };
    case CLEAR_CART_DATA:
      return { ...prevState, cartList: [] };
    case SET_LOADING_CART:
      return { ...prevState, loadingCart: action.payload };
    default:
      return prevState;
  }
};

export { cartReducer };
