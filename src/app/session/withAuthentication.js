import React from "react";
import { connect } from "react-redux";
import { withFirebase } from "services";
import { setAuthUser } from "../actions/authentication";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.props.setAuthUser(JSON.parse(localStorage.getItem("authUser")));
    }

    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          localStorage.setItem("authUser", JSON.stringify(authUser));
          this.props.setAuthUser(authUser);
        },
        () => {
          localStorage.removeItem("authUser");
          this.props.setAuthUser(null);
        }
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return connect(
    null,
    { setAuthUser }
  )(withFirebase(WithAuthentication));
};

export default withAuthentication;
