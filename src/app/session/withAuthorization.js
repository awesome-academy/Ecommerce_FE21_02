import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase } from "services";
import * as ROUTES from "app/constants/routes";
import { connect } from "react-redux";

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          if (!condition(authUser)) {
            this.props.history.push(ROUTES.LOGIN);
          }
        },
        () => this.props.history.push(ROUTES.LOGIN)
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return condition(this.props.authUser) ? (
        <Component {...this.props} />
      ) : null;
    }
  }
  const mapStateToProps = state => {
    const userStore = state.user;
    return {
      authUser: userStore.session.authUser
    };
  };
  return compose(
    withRouter,
    withFirebase,
    connect(mapStateToProps)
  )(WithAuthorization);
};

export default withAuthorization;
