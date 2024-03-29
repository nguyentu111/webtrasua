import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import ScrollToTop from "./layouts/components/ScrollToTop/ScrollToTop";
import { Provider } from "react-redux";
// import store from "./app/store";
import { CartProvider } from "./context/cartContext.js";
import store, { persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyles>
      <ScrollToTop />
      <Provider store={store}>
        <PersistGate loading={<>loading</>} persistor={persistor}>
          <CartProvider>
            <App />
          </CartProvider>
        </PersistGate>
      </Provider>
    </GlobalStyles>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
