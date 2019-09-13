import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="navbar-account">
        <Link to="/login">
          <li className="login">Login</li>
        </Link>
        <Link to="/register">
          <li className="sign-up">Sign Up</li>
        </Link>
      </div>
    );
  }
}
