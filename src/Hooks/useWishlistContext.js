import { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";

const useWishlistContext = () => useContext(WishlistContext);

export { useWishlistContext };
