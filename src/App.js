import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Layout from "./app/layout/index";
import { firebase, FirebaseContext } from "./services";
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all";
import "react-toastify/dist/ReactToastify.css";
import "./styles/main.scss";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <FirebaseContext.Provider value={firebase}>
        <Router>
          <ToastContainer />
          <Layout />
        </Router>
      </FirebaseContext.Provider>
    </Provider>
  );
}

export default App;
