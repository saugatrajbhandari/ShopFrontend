import { Fragment, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import AppLayout from "./AppLayout";
import appRoutes from "./appRoutes";
import PrivateRoute from "./PrivateRoute";

const mergedRoutes = [...appRoutes];

const MergeLayoutRoute = (props) => {
  const { children, route } = props;

  const AppLayoutWrapper = route.meta.appLayout ? AppLayout : Fragment;
  const PrivateRouteWrapper = route.meta.privateRoute ? PrivateRoute : Fragment;

  return (
    <AppLayoutWrapper>
      <PrivateRouteWrapper>{children}</PrivateRouteWrapper>
    </AppLayoutWrapper>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {mergedRoutes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              exact={route.exact}
              element={
                <Suspense fallback={<h1>Loading</h1>}>
                  <MergeLayoutRoute route={route}>
                    <route.component />
                  </MergeLayoutRoute>
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
