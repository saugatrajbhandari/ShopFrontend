import { lazy } from "react";

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
];

export default appRoutes;
