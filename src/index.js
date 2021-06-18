import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();