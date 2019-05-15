import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import UserLayout from "../components/UserLayout";

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2 className="heading-secondary heading-secondary--pattern-left">
        Dashboard
      </h2>
      <div className="card mb-5">
        <div className="card-body">
          <p className="card-text">{user.fullName}</p>
          <p className="card-text">{user.email}</p>
          <Link className=" btn btn-primary" to={ROUTES.USER_ROUTES.PROFILE}>
            Chỉnh sửa thông tin
          </Link>
        </div>
      </div>

      <h2 className="heading-secondary heading-secondary--pattern-left">
        Lịch sử mua hàng
      </h2>
      <div className="card">
        <div className="card-body">Histories</div>
      </div>
    </div>
  );
};

export default Dashboard;
