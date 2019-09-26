import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarAccount from "./navbar-account/navbar-account";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <div className="web-icon-container">
            <div className="web-icon"></div>
          </div>
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/post/vote">Vote</Link>
            <Link to="/post/popular">account</Link>
          </div>
          <NavbarAccount />
        </div>
      </div>
    );
  }
}
