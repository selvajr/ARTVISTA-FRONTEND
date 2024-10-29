import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/Store.jsx";
import { PersistGate } from "redux-persist/integration/react";
import StoreContextProvider from "./Context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <StoreContextProvider>
      
        <App />
      </StoreContextProvider>
    </Provider>
  </PersistGate>
);
