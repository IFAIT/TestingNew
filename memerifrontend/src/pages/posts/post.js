import React, { Component } from "react";
import PostFooter from "./postFooter";

export default class Posts extends Component {
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
    this.checkRating = this.checkRating.bind(this);
    this.Login = this.Login.bind(this);
    this.close = this.close.bind(this);
  }

  async UNSAFE_componentWillMount() {
    await this.setState({
      post: this.props.state,
      isLogin: this.props.state.isLogin
    });
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
      this.setState({
        hide: false
      });
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
      await this.setState({
        hide: false
      });
    }
  }

  checkRating() {
    this.rateBamboo(this.state.post.key);
  }

  rateBamboo(key, number) {
    let bambooImage = require("../../svg/Bamboo.svg");
    for (let i = 1; i <= number; i++) {
      let bamboo = document.querySelector(".bamboo-rating__" + key + i);
      bamboo.style.background = "url(" + bambooImage + ")";
    }
  }

  BambooRating() {
    return (
      <div className="bmb-rating-container">
        <li
          onMouseEnter={() => this.rateBamboo(this.state.post.key, 1)}
          onMouseLeave={() => this.removeBamboo(this.state.post.key, 1)}
          onClick={() => this.ratePost(this.state.post.key, 1)}
          className={
            `bamboo-rating bamboo-rating__` + this.state.post.key + `1`
          }
        ></li>
        <li
          onMouseEnter={() => this.rateBamboo(this.state.post.key, 2)}
          onMouseLeave={() => this.removeBamboo(this.state.post.key, 2)}
          onClick={() => this.ratePost(this.state.post.key, 2)}
          className={
            `bamboo-rating bamboo-rating__` + this.state.post.key + `2`
          }
        ></li>
        <li
          onMouseEnter={() => this.rateBamboo(this.state.post.key, 3)}
          onMouseLeave={() => this.removeBamboo(this.state.post.key, 3)}
          onClick={() => this.ratePost(this.state.post.key, 3)}
          className={
            `bamboo-rating bamboo-rating__` + this.state.post.key + `3`
          }
        ></li>
        <li
          onMouseEnter={() => this.rateBamboo(this.state.post.key, 4)}
          onMouseLeave={() => this.removeBamboo(this.state.post.key, 4)}
          onClick={() => this.ratePost(this.state.post.key, 4)}
          className={
            `bamboo-rating bamboo-rating__` + this.state.post.key + `4`
          }
        ></li>
        <li
          onMouseEnter={() => this.rateBamboo(this.state.post.key, 5)}
          onMouseLeave={() => this.removeBamboo(this.state.post.key, 5)}
          onClick={() => this.ratePost(this.state.post.key, 5)}
          className={
            `bamboo-rating bamboo-rating__` + this.state.post.key + `5`
          }
        ></li>
        <li
          onMouseEnter={() => this.rateBamboo(this.state.post.key, 6)}
          onMouseLeave={() => this.removeBamboo(this.state.post.key, 6)}
          onClick={() => this.ratePost(this.state.post.key, 6)}
          className={
            `bamboo-rating bamboo-rating__` + this.state.post.key + `6`
          }
        ></li>
      </div>
    );
  }

  close() {
    this.setState({
      hide: true
    });
  }

  Login() {
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

  PostImage() {
    return (
      <div className="post-main-content">
        <this.Login />
        <div className="post-image"></div>
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
