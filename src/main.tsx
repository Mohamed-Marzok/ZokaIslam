import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";

import App from "./App.tsx";
import store from "./store/store.ts";
import "./index.css";
import "./i18n";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(
    "Root element not found. Ensure your HTML file has a <div id='root'>."
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider attribute="class">
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
