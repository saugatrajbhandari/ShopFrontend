import { lazy } from "react";
import SingleProductDetail from "../app/singleProductDetail/SingleProductDetail";

const Home = lazy(() => import("../app/home/Home"));

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
];

export default appRoutes;
