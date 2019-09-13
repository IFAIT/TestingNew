import React, { Component } from "react";
import Post from "./posts/post";
import axios from "axios";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: {
        hide: true
      },
      isLogin: false,
      Information: []
    };
    this.loadMoreMeme = this.loadMoreMeme.bind(this);
  }

  UNSAFE_componentWillMount() {
    let Information = [
      {
        username: "Irfany Fajar Afridho",
        postStat: {
          pejuang: 1,
          bamboo: 200
        },
        postTitle: "some title needed to be seen",
        isShamed: false
      }
    ];
    this.setState({
      Information: Information
    });
  }

  async componentDidMount() {
    await axios.post("http://localhost:5000/").then(res => {
      console.log(res.data);
    });
    // console.log(this.state);
  }

  loadMoreMeme() {
    let NewMeme = {
      username: "newMEMER",
      postStat: {
        pejuang: 20,
        bamboo: 24
      },
      postTitle: "NewPostMeme",
      isShamed: false
    };
    this.state.Information.push(NewMeme);
    NewMeme = this.state.Information;
    this.setState({
      Information: NewMeme
    });
  }

  render() {
    return (
      <div className="main-wrapper">
        <div className="main-container">
          {this.state.Information.map((post, index) => (
            <Post
              key={index}
              state={
                (post = { ...post, key: index, isLogin: this.state.isLogin })
              }
            />
          ))}
        </div>
        <div onClick={this.loadMoreMeme} className="load-more">
          <h1>Load More</h1>
        </div>
      </div>
    );
  }
}
