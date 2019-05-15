import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter, Link } from "react-router-dom";
import * as ROUTES from "app/constants/routes";

import { toggleTopMenu } from "../actions/uiAction";
import withAuthentication from "../session/withAuthentication";
import { withFirebase } from "services";
import { toast } from "react-toastify";

class TopMenu extends React.Component {
  getTopMenuStyle() {
    return this.props.isWhite ? "top-menu--white" : "";
  }
  renderCartMenu(cartItems) {
    return (
      <div className="menu__item">
        <span
          className="p1 fa-stack fa-2x has-badge menu__icon"
          data-count={cartItems.length}
        >
          <Link to={ROUTES.CART} className="menu__link">
            Giỏ hàng
          </Link>
        </span>
      </div>
    );
  }
  componentDidMount() {
    if (this.props.history.location.pathname === "/") {
      this.props.toggleTopMenu();
    }
  }
  onLogOut() {
    this.props.firebase.signOut();
    toast.success("Đăng xuất thành công", {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  }
  render() {
    const { authUser, cartItems } = this.props;
    return (
      <div className={`top-menu ${this.getTopMenuStyle()}`}>
        <div className="container d-flex">
          <div className="top-menu__brand">Wine House</div>
          <div className="top-menu__toggle menu__link">
            <i className="fas fa-bars" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8">
              <div className="menu">
                <div className="menu__list">
                  <div className="menu__item">
                    <a href="#" className="menu__link">
                      Trạng thái đơn hàng
                    </a>
                  </div>{" "}
                  {this.renderCartMenu(cartItems)}
                  {authUser ? (
                    <Fragment>
                      <div className="menu__item">
                        <Link
                          to={ROUTES.USER_ROUTES.DASHBOARD}
                          className="menu__link"
                        >
                          {authUser.fullName
                            ? authUser.fullName
                            : authUser.email}
                        </Link>
                      </div>
                      <div className="menu__item">
                        <a
                          href="#"
                          className="menu__link"
                          onClick={() => this.onLogOut()}
                        >
                          Đăng xuất
                        </a>
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <div className="menu__item">
                        <Link to={ROUTES.LOGIN} className="menu__link">
                          Đăng nhập
                        </Link>
                      </div>
                      <div className="menu__item">
                        <Link to={ROUTES.REGISTER} className="menu__link">
                          Đăng ký
                        </Link>
                      </div>
                    </Fragment>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="search-box">
                <input
                  className="search-box__input"
                  type="text"
                  name="search"
                  placeholder="Tìm kiếm ở đây ..."
                />
                <i className="fas fa-search text-white search-box__icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const common = state.common;
  const userStore = state.user;

  return {
    cartItems: common.cart,
    isWhite: common.topMenu.isWhiteTopMenu,
    authUser: userStore.session.authUser
  };
};

export default compose(
  connect(
    mapStateToProps,
    { toggleTopMenu }
  ),
  withRouter,
  withFirebase,
  withAuthentication
)(TopMenu);
