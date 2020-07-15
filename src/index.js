import React from "react";
import ReactDOM from "react-dom";
// React Router
import { BrowserRouter } from "react-router-dom";
// React Redux
import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
