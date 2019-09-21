import React, { Component } from "react";
import PostFooter from "./postFooter";
import { OpenLogin } from "../../actions/login";
import { connect } from "react-redux";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true
    };

    this.PostImage = this.PostImage.bind(this);
    this.rateBamboo = this.rateBamboo.bind(this);
    this.removeBamboo = this.removeBamboo.bind(this);
    this.BambooRating = this.BambooRating.bind(this);
    this.ratePost = this.ratePost.bind(this);
    this.shamePost = this.shamePost.bind(this);
  }

  async UNSAFE_componentWillMount() {
    await this.setState({
      post: this.props.state,
      isLogin: this.props.state.isLogin
    });
    console.log(this.state.post);
  }

  async componentDidMount() {
    // console.log(this.state);
  }

  async shamePost() {
    if (this.state.isLogin) {
      if (this.state.post.isShamed) {
        let newPostStat = { ...this.state.post.postStat };
        newPostStat.bamboo += 3;
        await this.setState({
          post: {
            ...this.state.post,
            isShamed: false,
            postStat: newPostStat
          }
        });
      } else {
        let newPostStat = { ...this.state.post.postStat };
        newPostStat.bamboo -= 3;
        await this.setState({
          post: {
            ...this.state.post,
            isShamed: true,
            postStat: newPostStat
          }
        });
      }
    } else {
      this.props.OpenLogin(true);
    }
  }

  removeBamboo(key, number) {
    let bambooImage = require("../../svg/EmptyBamboo.svg");
    for (let j = 1; j <= number; j++) {
      let bamboo = document.querySelector(".bamboo-rating__" + key + j);
      bamboo.style.background = "url(" + bambooImage + ")";
    }
  }

  async ratePost(key, rating) {
    if (this.state.isLogin) {
      let newPostStat = { ...this.state.post.postStat };
      newPostStat.bamboo += rating;
      await this.setState({
        post: {
          ...this.state.post,
          postStat: newPostStat
        }
      });
    } else {
      this.props.OpenLogin(true);
    }
  }

  rateBamboo(key, number) {
    let bambooImage = require("../../svg/Bamboo.svg");
    for (let i = 1; i <= number; i++) {
      let bamboo = document.querySelector(".bamboo-rating__" + key + i);
      bamboo.style.background = "url(" + bambooImage + ")";
    }
  }

  BambooRating() {
    const number = [1, 2, 3, 4, 5, 6];
    return (
      <div className="bmb-rating-container">
        {number.map(index => {
          return (
            <li
              key={index}
              onMouseEnter={() => this.rateBamboo(this.state.post.key, index)}
              onMouseLeave={() => this.removeBamboo(this.state.post.key, index)}
              onClick={() => this.ratePost(this.state.post.key, index)}
              className={
                `bamboo-rating bamboo-rating__` + this.state.post.key + index
              }
            ></li>
          );
        })}
      </div>
    );
  }

  PostImage() {
    return (
      <div className="post-main-content">
        <div className="post-image">
          <img alt="s" src={this.state.post.postImage}></img>
        </div>
        <div className="post-description">
          <h1>{this.state.post.postTitle}</h1>
          <span>
            {this.state.post.postStat.pejuang} pejuang{" "}
            {this.state.post.postStat.bamboo} bamboos <p>1h ago</p>
          </span>
          <div className="post-rating">
            <this.BambooRating />
            <div className="bamboo-desc">
              If you like this post give the creator some bamboos ;)
            </div>
            {this.state.post.isShamed ? (
              <div
                onClick={this.shamePost}
                className={"shame-button shame-button__active"}
              >
                <div className="shame-image"></div>
                <h3>(Y) SHAME</h3>
              </div>
            ) : (
              <div
                onClick={this.shamePost}
                className={"shame-button shame-button__noactive"}
              >
                <div className="shame-image"></div>
                <h3>(Y) SHAME</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="post-container">
        <div className="post-title">
          <div className="profile-pict-container">{/* <img></img> */}</div>
          <div className="post-detail">
            <div>
              <h1>{this.state.post.username}</h1>
            </div>
            <div>
              <h3>
                {this.state.post.postStat.pejuang} pejuang{" "}
                {this.state.post.postStat.bamboo} bamboos
              </h3>
            </div>
          </div>
          <div className="post-option-icon">
            <div className="icon"></div>
          </div>
        </div>
        <this.PostImage />
        <PostFooter state={this.state.post} />
      </div>
    );
  }
}

const PropsToState = state => ({
  me: state.me
});

export default connect(
  PropsToState,
  { OpenLogin }
)(Post);
