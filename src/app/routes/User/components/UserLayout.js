import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "app/constants/routes";

const links = [
  {
    name: "Dashboard",
    linkTo: ROUTES.USER_ROUTES.DASHBOARD
  },
  {
    name: "Thông tin tài khoảng",
    linkTo: ROUTES.USER_ROUTES.PROFILE
  },
  {
    name: "Giỏ hàng",
    linkTo: ROUTES.CART
  }
];

const UserLayout = props => {
  const generateLinks = links =>
    links.map((item, i) => (
      <Link
        className="list-group-item list-group-item-action"
        to={item.linkTo}
        key={i}
      >
        {item.name}
      </Link>
    ));

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h2 className="heading-secondary heading-secondary--pattern-left">
            Tài khoảng
          </h2>
          <div className="list-group">{generateLinks(links)}</div>
        </div>
        <div className="col-md-8">{props.children}</div>
      </div>
    </div>
  );
};

export default UserLayout;
