import React, { Fragment } from "react";
import brand01 from "../../images/brand-logos/brand-01.jpg";
import brand02 from "../../images/brand-logos/brand-02.jpg";
import brand03 from "../../images/brand-logos/brand-03.jpg";
import footerLogo from "../../images/footer_logos.png";

const Footer = () => (
  <Fragment>
    <section className="brand-logos">
      <div className="container">
        <div className="row border-bottom d-flex justify-content-center">
          <div className="col-md-6 col-lg-4 border">
            <img className="brand-logos__image" src={brand01} alt="brand 01" />
          </div>
          <div className="col-md-6 col-lg-4 border">
            <img className="brand-logos__image" src={brand02} alt="brand 02" />
          </div>
          <div className="col-md-6 col-lg-4 border">
            <img className="brand-logos__image" src={brand03} alt="brand 03" />
          </div>
        </div>
      </div>
    </section>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-2 p-1">
            <h3 className="heading-tertiary"> Thông tin</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link" href="#">
                  về chúng tôi
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  giao hàng
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  cảm nghĩ
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  lưu trữ
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  chính sách riêng tư
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-2 p-1">
            <h3 className="heading-tertiary"> Mua hàng</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link" href="#">
                  vận chuyển và tra hàng
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  mua hàng an toàn
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  vận quốc tế
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  liên kết
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  dịch vụ giảm giá
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-4 p-1">
            <h3 className="heading-tertiary"> Gửi email</h3>
            <p className="footer__email-text">
              Gửi email cho chúng tôi để được hổ trợ
            </p>
            <input
              className="footer__mail-input"
              type="text"
              name="sendmail"
              placeholder="Enter your email"
            />
            <a className="footer__arrow-button" href="#">
              Gửi
            </a>
            <div className="footer__list footer__list--icon">
              <a className="footer__icon" href="#">
                <i className="fas fa-dove" />
              </a>
              <a className="footer__icon" href="#">
                <i className="fab fa-google-plus-g" />
              </a>
              <a className="footer__icon" href="#">
                <i className="fas fa-volleyball-ball" />
              </a>
              <a className="footer__icon" href="#">
                <i className="fab fa-invision" />
              </a>
              <a className="footer__icon" href="#">
                <i className="fas fa-wifi" />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 p-1">
            <h3 className="heading-tertiary">Liên hệ</h3>
            <div className="footer__contact">
              <p>
                <i className="fas fa-map-marker-alt"> </i>
                <span>
                  Tầng 4, Tòa nhà Hanoi Group Số 442 Đội Cấn, P. Cống Vị, Q. Ba
                  Đình, Hà Nội
                </span>
              </p>
              <p>
                <i className="fas fa-phone-volume"> </i>
                <span>(04) 6674 2332 - </span>
                <i className="fas fa-phone-volume"> </i>
                <span>(04) 37868904</span>
              </p>
              <p>
                <i className="fas fa-phone-volume"> </i>
                <span>(08) 6608 9686 </span>
              </p>
              <p>
                <i className="fas fa-envelope" />
                <span>
                  {" "}
                  <a href="#">Support@bizweb.vn</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row border-top p-3">
          <div className="col-lg-6">
            <p className="footer__copyright-text">
              &copy; Copy Right 2018-2014 DKT Technology JSC
            </p>
          </div>
          <div className="col-lg-6">
            <img className="footer__under-logos" src={footerLogo} alt="" />
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
);

export default Footer;
