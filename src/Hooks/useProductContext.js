import { useContext } from "react";
import { ProductContext } from "../Context/productContext";

const useProductContext = () => useContext(ProductContext);

export { useProductContext };
