import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.close = this.close.bind(this);
  }
  UNSAFE_componentWillMount() {
    this.setState({
      hide: this.props.state.hide
    });
  }

  async UNSAFE_componentWillUpdate() {
    console.log(this.state.hide, this.props.state);
    if (this.state.hide === this.props.state.hide) {
      await this.setState({
        hide: !this.props.state.hide
      });
      console.log(this.state.hide, this.props.state);
    } else if (this.state.hide && !this.props.state.hide) {
      this.setState({
        hide: false
      });
    }
  }

  componentDidUpdate() {
    // console.log(this.state.hide, this.props.state);
  }

  close() {
    this.setState({
      hide: true
    });
  }

  render() {
    if (!this.state.hide) {
      return (
        <div className="login-wrapper">
          <div onClick={this.close} className="close-button">
            <h1>CLOSE</h1>
          </div>
          <div className="login-container">
            <div>HAI IM A LOGIN PAGE</div>
          </div>
        </div>
      );
    } else {
      return <p className="hide"></p>;
    }
  }
}
