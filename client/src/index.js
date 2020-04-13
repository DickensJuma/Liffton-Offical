import "./styles/custom.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers";
import NetworkService from "./utils/NetworkService";

// lifton
// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import reducers from "./redux/reducers";
// import { composeWithDevTools } from "redux-devtools-extension";
// import App from "./App";

import App from "./container/App";

console.log(
  "************** process.env.NODE_ENV ****************** ",
  process.env.NODE_ENV
);

const store = createStore(reducers, applyMiddleware(thunk, logger));

NetworkService.setInterceptors(store);
NetworkService.setBaseUrl("/api");

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
