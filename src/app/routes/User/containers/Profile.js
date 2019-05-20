import React from "react";
import { connect } from "react-redux";
import { updateUser } from "app/actions/userAction";
import Spinner from "app/components/Spinner";
import InlineNotification from "../../../components/InlineNotification";
const INITIAL_STATE = {
  fullName: "",
  email: ""
};
class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  componentDidMount() {
    const { user } = this.props;
    this.setState({
      fullName: user.fullName,
      email: user.email
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const { email, fullName } = this.state;
    let newUser = {
      ...this.props.user,
      email,
      fullName
    };
    this.props.updateUser(newUser, this.props.user.uid);
  }

  render() {
    const { email, fullName } = this.state;
    const { isFetching, fetchError } = this.props;
    const isInvalid = fullName === "" || email === "";
    return (
      <div>
        <h2 className="heading-secondary heading-secondary--pattern-left">
          Thông tin tài khoảng
        </h2>
        <form>
          <div className="form-group">
            <input
              name="fullName"
              type="text"
              className="form-control"
              id="inputFullName"
              value={fullName}
              onChange={e => this.handleInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={e => this.handleInputChange(e)}
            />
          </div>
          <button
            disabled={isInvalid}
            className="btn btn-primary"
            onClick={e => this.onSubmit(e)}
          >
            Lưu
          </button>
          <Spinner isDisplay={isFetching} />
          {isFetching === false && (
            <InlineNotification
              message={fetchError || "Cập nhật thông tin thành công !"}
            />
          )}
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const userStore = state.user;
  return {
    isFetching: userStore.session.isFetching,
    fetchError: userStore.session.fetchError
  };
};
export default connect(
  mapStateToProps,
  { updateUser }
)(Profile);
