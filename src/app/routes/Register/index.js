import React, { Component, Fragment } from "react";
import Navigation from "app/components/Navigation";
import Breadcumb from "app/components/Breadcumb";
import RegisterForm from "./containers/RegisterForm";

class Register extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Breadcumb />
        <RegisterForm />
      </Fragment>
    );
  }
}

export default Register;
