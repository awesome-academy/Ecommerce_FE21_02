import React from "react";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "app/constants/routes";
import Admin from "../routes/Admin";

const AdminRouter = () => (
  <Switch>
    <Route exact path={ROUTES.ADMIN_BASE} component={Admin} />
  </Switch>
);
export default AdminRouter;
