import { FaHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";

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
    name: "Profile",
    pathname: "/",
    icon: <FaUserAlt />,
    dropdown: [
      {
        name: "Login",
        pathname: "/",
      },
      {
        name: "SignUp",
        pathname: "/",
      },
      {
        name: "Logout",
        pathname: "/",
      },
    ],
  },
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
