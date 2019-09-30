import React from "react";
import ReactDOM from "react-dom";
// blueprint css
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/app";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

// Debug for dev environement
if (process.env.NODE_ENV !== "production") {
  window.store = store;
}

if (process.env.REACT_APP_MOCK_API) {
  // use require so that ApiMock only gets bundled
  // when it's used
  const ApiMock = require("./helpers/api-mock").default;
  ApiMock.init();
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
