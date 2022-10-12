import { ShoppingCart, User } from "react-feather";

const navigationMenus = [
  {
    id: "cart",
    name: "Cart",
    path: "cart/",
    icon: ShoppingCart,
  },

  {
    id: "login",
    name: "Login",
    path: "login",
    icon: User,
  },
];

export default navigationMenus;
