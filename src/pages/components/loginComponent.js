import React, { Component } from "react";
import { connect } from "react-redux";
import { OpenLogin } from "../../actions/login";
import axios from "axios";
import { print } from "graphql";
import url from "../importRoute";
import QueryMutation from "../../graphAPI/graph";
import cookie from "universal-cookie";
let GraphqlQM = new QueryMutation();
const cookies = new cookie();

export class loginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.login = this.login.bind(this);
    this.closeLogin = this.closeLogin.bind(this);
  }

  closeLogin() {
    this.setState({
      error: null
    });
    this.props.OpenLogin(false);
  }

  login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const UserLogin = { email, password };
    if (email.length < 3 || password.length < 6) {
      this.setState({
        error: "Please input a valid value"
      });
    } else {
      axios
        .post(url, {
          query: print(GraphqlQM.LOGIN_MUTATION()),
          variables: UserLogin
        })
        .then(res => {
          if (res.data.data.login.succes) {
            cookies.set("__uses__s", res.data.data.login.message, {
              path: "/"
            });
            window.location = "/";
          } else {
            this.setState({
              error: res.data.data.login.message
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    return this.props.showLogin ? (
      <div className="login-wrapper">
        <div className="login-container">
          <div onClick={this.closeLogin} className="close-button">
            <h1>CLOSE</h1>
          </div>
          <h1>LOGIN</h1>
          {this.state.error ? (
            <h4 className="error">{this.state.error}</h4>
          ) : (
            ""
          )}
          <div className="form-container">
            <div className="text-input">
              <span>email</span>
              <input id="email" name="email" type="email"></input>
            </div>
            <div className="text-input">
              <span>password</span>
              <input id="password" name="password" type="password"></input>
            </div>
          </div>
          <button onClick={this.login}>LOGIN</button>
        </div>
      </div>
    ) : (
      ""
    );
  }
}

const PropsToState = state => ({
  showLogin: state.showLogin
});

export default connect(
  PropsToState,
  { OpenLogin }
)(loginComponent);
