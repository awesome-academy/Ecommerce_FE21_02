import React, { Component, Fragment } from "react";
import Navigation from "app/components/Navigation";
import Breadcumb from "app/components/Breadcumb";
import LoginForm from "./containers/LoginForm";

class Login extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Breadcumb />
        <LoginForm />
      </Fragment>
    );
  }
}

export default Login;
