import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.js";
import { LoaderProvider } from "./context/LoaderProvider.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoaderProvider>
          <App />
        </LoaderProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
  </>
);
