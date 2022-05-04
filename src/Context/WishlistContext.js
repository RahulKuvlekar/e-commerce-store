import { createContext, useReducer, useEffect } from "react";
import { wishlistReducer } from "../Reducer/wishlistReducer";
import useAuthContext from "../Hooks/useAuthContext";
import { getMyWishlistItem } from "../Utils/MyWishlist";

const WishlistContext = createContext({
  wishlistState: { wishlist: Array, loadingWishlist: Boolean },
  dispatchWishlist: Function,
});

const WishlistProvider = ({ children }) => {
  const {
    authState: { isAuthenticated, token },
  } = useAuthContext();

  const [wishlistState, dispatchWishlist] = useReducer(wishlistReducer, {
    wishlist: [],
    loadingWishlist: false,
  });

  useEffect(() => {
    if (isAuthenticated) {
      getMyWishlistItem(dispatchWishlist, token);
    }
  }, [isAuthenticated, token]);

  return (
    <WishlistContext.Provider value={{ wishlistState, dispatchWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, WishlistContext };
