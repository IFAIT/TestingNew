import React, { Component } from "react";

export default class RestApi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async UNSAFE_componentWillMount() {
    await fetch("/create/Bagus", { method: "POST" })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });

    await fetch("/update/5d6d182adc7c92093c7a0a79/Enak", {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });

    await fetch("/delete/5d6d220502d3c607fcd1381a", {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });

    fetch("/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }

  render() {
    return <div>This is RestApi Routes</div>;
  }
}
