import React from "react";
import { Toaster } from "react-hot-toast";
import Router from "./router/Routes";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <Toaster
        position="top-right"
        toastOptions={{
          error: {
            duration: 3000,
          },
        }}
      />
    </Provider>
  );
};

export default App;
