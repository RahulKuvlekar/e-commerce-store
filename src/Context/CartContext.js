import { createContext, useReducer, useEffect } from "react";
import { cartReducer } from "../Reducer/cartReducer";
import { getMyCartItem } from "../Utils/MyCart";
import useAuthContext from "../Hooks/useAuthContext";

const CartContext = createContext({
  cartState: { cartList: Array, loadingCart: Boolean },
  cartDispatch: Function,
});

const CartProvider = ({ children }) => {
  const {
    authState: { isAuthenticated, token },
  } = useAuthContext();

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartList: [],
    loadingCart: false,
  });

  useEffect(() => {
    if (isAuthenticated) {
      getMyCartItem(cartDispatch, token);
    }
  }, [token, isAuthenticated]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
