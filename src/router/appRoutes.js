import { lazy } from "react";

const Home = lazy(() => import("../app/home/Home"));
const SingleProductDetail = lazy(() =>
  import("../app/singleProductDetail/SingleProductDetail")
);
const Products = lazy(() => import("../app/products/Products"));
const Login = lazy(() => import("../app/auth/Login"));
const Register = lazy(() => import("../app/auth/Register"));

const appRoutes = [
  {
    id: "home",
    path: "/",
    exact: true,
    component: Home,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },

  {
    id: "productDetail",
    path: "/:id/:section",
    exact: true,
    component: SingleProductDetail,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },
  {
    id: "products",
    path: "/products",
    exact: true,
    component: Products,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },
  {
    id: "login",
    path: "/login",
    exact: true,
    component: Login,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },
  {
    id: "register",
    path: "/register",
    exact: true,
    component: Register,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },
];

export default appRoutes;
