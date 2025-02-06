import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import { initializeAuthListener, store } from "./setup/store";

store.dispatch(initializeAuthListener());

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
