import React, { Component } from "react";
import mega from "images/mega.png";
import logo from "images/logo.png";
class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-2 d-none d-md-block">
              <div className="navigation__logo">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="col-md-9 col-lg-10">
              <ul className="navigation__list">
                <li className="navigation__item">
                  <a className="navigation__link" href="index.html">
                    Trang chủ
                  </a>
                </li>
                <li className="navigation__dropable-item">
                  <a className="navigation__link" href="index.html">
                    Rượu vang đỏ
                  </a>
                  <span className="navigation__arrow-top">
                    <i className="fas fa-caret-up" />
                  </span>
                  <div className="navigation__mega-menu">
                    <div className="navigation__sub-menu">
                      <h3 className="heading-tertiary">Rượu ngoại</h3>
                      <a
                        className="navigation__link navigation__link--sub"
                        href="#"
                      >
                        | Sub-Menu
                      </a>
                      <a
                        className="navigation__link navigation__link--sub"
                        href="#"
                      >
                        | Sub-Menu
                      </a>
                      <a
                        className="navigation__link navigation__link--sub"
                        href="#"
                      >
                        | Sub-Menu
                      </a>
                      <a
                        className="navigation__link navigation__link--sub"
                        href="#"
                      >
                        | Sub-Menu
                      </a>
                      <a
                        className="navigation__link navigation__link--sub"
                        href="#"
                      >
                        | Sub-Menu
                      </a>
                    </div>
                    <div className="navigation__sub-menu">
                      <h3 className="heading-tertiary">Rượu ngoại</h3>
                      <a
                        className="navigation__link navigation__link--sub"
                        href="#"
                      >
                        | Sub-Menu
                      </a>
                      <a
                        className="navigation__link navigation__link--sub"
                        href="#"
                      >
                        | Sub-Menu
                      </a>
                      <a
                        className="navigation__link navigation__link--sub"
                        href="#"
                      >
                        | Sub-Menu
                      </a>
                      <a
                        className="navigation__link navigation__link--sub"
                        href="#"
                      >
                        | Sub-Menu
                      </a>
                      <a
                        className="navigation__link navigation__link--sub"
                        href="#"
                      >
                        | Sub-Menu
                      </a>
                    </div>
                    <div className="navigation__sub-menu">
                      <h3 className="heading-tertiary">Rượu ngoại</h3>
                      <a
                        className="navigation__link navigation__link--sub"
                        href="#"
                      >
                        | Sub-Menu
                      </a>
                      <a
                        className="navigation__link navigation__link--sub"
                        href="#"
                      >
                        | Sub-Menu
                      </a>
                      <a
                        className="navigation__link navigation__link--sub"
                        href="#"
                      >
                        | Sub-Menu
                      </a>
                      <a
                        className="navigation__link navigation__link--sub"
                        href="#"
                      >
                        | Sub-Menu
                      </a>
                      <a
                        className="navigation__link navigation__link--sub"
                        href="#"
                      >
                        | Sub-Menu
                      </a>
                    </div>
                    <div className="navigation__sub-menu">
                      <img
                        className="d-block w-100"
                        src={mega}
                        alt="Rượu vang"
                      />
                    </div>
                  </div>
                </li>
                <li className="navigation__item">
                  <a className="navigation__link" href="#">
                    Rượu vang trắng
                  </a>
                </li>{" "}
                <li className="navigation__item">
                  <a className="navigation__link" href="#">
                    Rượu vang
                  </a>
                </li>{" "}
                <li className="navigation__item">
                  <a className="navigation__link" href="#">
                    Rượu vang
                  </a>
                </li>{" "}
                <li className="navigation__item">
                  <a className="navigation__link" href="#">
                    Rượu vang
                  </a>
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
