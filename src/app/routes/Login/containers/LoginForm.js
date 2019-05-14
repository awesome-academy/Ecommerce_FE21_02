import React from "react";
import * as ROUTES from "app/constants/routes";
import { withFirebase } from "services";
import { withRouter, Link } from "react-router-dom";
import { toast } from "react-toastify";
const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  prevPath: ""
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.firebase
      .loginWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        // TODOS:Get previous route and check condition when should be go to HOMEPAGE and when should goBack()

        this.props.history.goBack();
        toast.success("Đăng nhập thành công", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      })
      .catch(error => {
        toast.error(`"Đăng nhập không thành công, lỗi: ${error}`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      });
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="heading-secondary heading-secondary--pattern-left">
            Đăng nhập{" "}
          </h2>
        </div>
        <form className="login__form py-4" onSubmit={e => this.onSubmit(e)}>
          <h3 className="heading-tertiary py-2 text-left">
            Khách hàng đăng nhập
          </h3>
          <p>Nếu bạn có một tài khoảng, xin vui lòng đăng nhập </p>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">
              Email<sup>*</sup>
            </label>
            <input
              name="email"
              value={email}
              onChange={e => this.handleInputChange(e)}
              className="form-control"
              id="exampleInputEmail1"
              type="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputpassword">
              Password<sup>*</sup>
            </label>
            <input
              name="password"
              value={password}
              onChange={e => this.handleInputChange(e)}
              className="form-control"
              id="inputName"
              type="password"
            />
          </div>
          <div className="form-check py-3">
            <input
              className="form-check-input mr-1"
              id="exampleCheck1"
              type="checkbox"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Quên mật khẩu
            </label>
          </div>
          <div className="form-group py-3">
            <Link to={ROUTES.REGISTER} className="btn btn-primary">
              Đăng ký tài khoảng
            </Link>

            <button
              className="btn btn-primary"
              id="login-button"
              type="submit"
              disabled={isInvalid}
            >
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(withFirebase(LoginForm));
