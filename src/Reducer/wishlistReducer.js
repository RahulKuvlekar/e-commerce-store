import { wishlistFeatures } from "../Constants/constants";

const { SET_WISHLIST_DATA, CLEAR_WISHLIST_DATA, SET_LOADING_WISHLIST } =
  wishlistFeatures;

const wishlistReducer = (prevState, action) => {
  switch (action.type) {
    case SET_WISHLIST_DATA:
      return { ...prevState, wishlist: [...action.payload] };
    case CLEAR_WISHLIST_DATA:
      return { ...prevState, wishlist: [] };
    case SET_LOADING_WISHLIST:
      return { ...prevState, loadingWishlist: action.payload };
    default:
      return prevState;
  }
};

export { wishlistReducer };
