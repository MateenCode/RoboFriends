import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

import "tachyons";
import "./index.css";
import App from "./containers/App";

import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
