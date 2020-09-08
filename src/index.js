import React from "react";
import ReactDOM from "react-dom";
// React Router
import { BrowserRouter } from "react-router-dom";
// React Redux
import { Provider } from "react-redux";
// repersist
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
