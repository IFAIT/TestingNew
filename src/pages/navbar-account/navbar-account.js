import React, { Component } from "react";
import cookie from "universal-cookie";
import QueryMutation from "../../graphAPI/graph";
import { connect } from "react-redux";
import { LoginAction } from "../../actions/login";
import { OpenLogin } from "../../actions/login";
const cookies = new cookie();

class NavbarAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    const user = cookies.get("__uses__s");
    console.log(user);
  }
  Logout() {
    cookies.remove("__uses__s");
    window.location = "/";
  }

  render() {
    const user = cookies.get("__uses__s");
    return user ? (
      <div className="navbar-account">
        <span>You are Login</span>
        <button onClick={this.Logout}>LOGOUT</button>
      </div>
    ) : (
      <div className="navbar-account">
        <li onClick={() => this.props.OpenLogin(true)} className="login">
          <span>Login</span>
        </li>
        <li className="sign-up">
          <span>Sign Up</span>
        </li>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  me: state.me
});

export default connect(
  mapStateToProps,
  { LoginAction, OpenLogin }
)(NavbarAccount);
