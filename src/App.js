import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Layout from "./app/layout/index";

import "bootstrap";
import "@fortawesome/fontawesome-free/js/all";
import "./styles/main.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  );
}

export default App;
