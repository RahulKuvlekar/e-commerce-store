import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const useCartContext = () => useContext(CartContext);

export default useCartContext;
