import React, { Component, Fragment } from "react";
import * as ROUTES from "app/constants/routes";
import { withFirebase } from "services";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";

const INITIAL_STATE = {
  fullName: "",
  email: "",
  password: "",
  passwordConfirm: ""
};

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const { fullName, email, password } = this.state;
    this.props.firebase
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        return this.props.firebase.user(authUser.user.uid).set({
          fullName,
          email
        });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOMEPAGE);
        toast.success("Đăng kí thành công", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      })
      .catch(error => {
        toast.error(`"Đăng kí không thành công, lỗi: ${error}`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      });
  }

  render() {
    const { fullName, email, password, passwordConfirm, error } = this.state;

    const isInvalid =
      passwordConfirm !== password ||
      password === "" ||
      email === "" ||
      fullName === "";

    return (
      <div className="container">
        <div className="d-flex justify-content-start align-items-center">
          <h2 className="heading-secondary heading-secondary--pattern-left">
            Đăng ký
          </h2>
        </div>
        <form className="register__form py-4" onSubmit={e => this.onSubmit(e)}>
          <h3 className="heading-tertiary py-2 text-left">Thông tin cá nhân</h3>
          <div className="form-group">
            <label htmlFor="fullName">
              Họ và Tên<sup>*</sup>
            </label>
            <input
              className="form-control"
              id="fullName"
              type="text"
              name="fullName"
              onChange={e => this.handleInputChange(e)}
              value={fullName}
            />
          </div>

          <div className="form-check py-3">
            <input
              className="form-check-input mr-1"
              id="exampleCheck1"
              type="checkbox"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Đăng ký nhận bản tin
            </label>
          </div>
          <h3 className="heading-tertiary py-2 text-left">
            Thông tin đăng nhập
          </h3>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">
              Email<sup>*</sup>
            </label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              type="email"
              aria-describedby="emailHelp"
              name="email"
              onChange={e => this.handleInputChange(e)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputmk">
              Mật khẩu<sup>*</sup>
            </label>
            <input
              className="form-control"
              id="inputmk"
              type="password"
              name="password"
              onChange={e => this.handleInputChange(e)}
              value={password}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputxacnhanmk">
              Xác nhận mật khẩu<sup>*</sup>
            </label>
            <input
              className="form-control"
              id="inputxacnhanmk"
              type="password"
              name="passwordConfirm"
              onChange={e => this.handleInputChange(e)}
              value={passwordConfirm}
            />
          </div>

          <div className="d-flex justify-content-end align-items-center">
            <button
              className="btn btn-primary"
              disabled={isInvalid}
              type="submit"
            >
              Đăng ký
            </button>
            <Link to={ROUTES.LOGIN} className="btn btn-primary">
              Quay lại
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(withFirebase(RegisterForm));
