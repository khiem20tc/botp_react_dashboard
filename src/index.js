import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import customCreateStore from "stores";
import App from "./App";
import "./index.css";

const store = customCreateStore();

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
