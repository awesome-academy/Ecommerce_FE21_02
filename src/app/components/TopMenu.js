import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleTopMenu } from "../actions/uiAction";

class TopMenu extends React.Component {
  getTopMenuStyle() {
    return this.props.isWhite ? "top-menu--white" : "";
  }
  componentDidMount() {
    if (this.props.history.location.pathname === "/") {
      this.props.toggleTopMenu();
    }
  }

  render() {
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
                      Tài khoảng của tôi
                    </a>
                  </div>{" "}
                  <div className="menu__item">
                    <a href="#" className="menu__link">
                      Trạng thái đơn hàng
                    </a>
                  </div>{" "}
                  <div className="menu__item">
                    <span
                      className="p1 fa-stack fa-2x has-badge menu__icon"
                      id="js--cart-icon"
                      data-count="2"
                    >
                      <a href="/cart.html" className="menu__link">
                        Giỏ hàng
                      </a>
                    </span>
                  </div>{" "}
                  <div className="menu__item">
                    <a href="#" className="menu__link">
                      Đăng nhập
                    </a>
                  </div>{" "}
                  <div className="menu__item">
                    <a href="#" className="menu__link">
                      Đăng ký
                    </a>
                  </div>
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
  return {
    isWhite: common.topMenu.isWhiteTopMenu
  };
};
export default connect(
  mapStateToProps,
  { toggleTopMenu }
)(withRouter(TopMenu));
