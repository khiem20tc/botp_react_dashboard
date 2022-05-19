import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import appTheme from "common/theme/theme";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import customCreateStore from "stores";
import App from "./App";
import "./index.css";

const store = customCreateStore();
const theme = createTheme(appTheme);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
