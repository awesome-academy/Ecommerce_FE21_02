import React, { Fragment } from "react";
import UserLayout from "./components/UserLayout";
import * as ROUTES from "app/constants/routes";
import withAuthorization from "../../session/withAuthorization";
import Breadcumb from "../../components/Breadcumb";
import Navigation from "../../components/Navigation";
import Dashboard from "./containers/Dashboard";
import Profile from "./containers/Profile";
const UserDashboard = ({ authUser, history }) => {
  const renderRightPane = () => {
    switch (history.location.pathname.replace("/", "")) {
      case ROUTES.USER_ROUTES.PROFILE.replace("/", ""):
        return <Profile user={authUser} />;
      default:
        return <Dashboard user={authUser} />;
    }
  };

  return (
    <Fragment>
      <Navigation />
      <Breadcumb />
      <UserLayout>{renderRightPane()}</UserLayout>
    </Fragment>
  );
};
const condition = authUser => !!authUser;

export default withAuthorization(condition)(UserDashboard);
