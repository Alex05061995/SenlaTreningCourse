import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import { Provider } from "react-redux/es/exports";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import ModalProvider from "./components/Modal/provides/ModalProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
