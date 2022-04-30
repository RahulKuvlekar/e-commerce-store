import { FaHeart, FaShoppingCart} from "react-icons/fa";

export const NavMenus = [
  {
    name: "Home",
    pathname: "/",
  },
  {
    name: "Shop Now",
    pathname: "/products",
  },
];

export const NavIconMenus = [
  {
    name: "Wishlist",
    pathname: "/wishlist",
    icon: <FaHeart />,
  },
  {
    name: "Cart",
    pathname: "/cart",
    icon: <FaShoppingCart />,
  },
];
