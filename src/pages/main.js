import React, { Component } from "react";
import Post from "./posts/post";
import { connect } from "react-redux";

class MainPage extends Component {
  constructor(props) {
    super(props);
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
        isShamed: false,
        postImage:
          "https://firebasestorage.googleapis.com/v0/b/instagram-clone-3ee4d.appspot.com/o/UserPosts%2Fjarpani2%40gmail.com%2F5d5fea94b85fb62a18ccb697?alt=media&token=ef2717a6-348e-4389-9a32-b4e100992cf1"
      },
      {
        username: "Irfany Fajar Afridho2",
        postStat: {
          pejuang: 1,
          bamboo: 200
        },
        postTitle: "some title needed to be seen",
        isShamed: false,
        postImage:
          "https://firebasestorage.googleapis.com/v0/b/instagram-clone-3ee4d.appspot.com/o/UserPosts%2Fjarpani2%40gmail.com%2F5d5fea94b85fb62a18ccb697?alt=media&token=ef2717a6-348e-4389-9a32-b4e100992cf1"
      }
    ];
    this.setState({
      Information: Information
    });
    console.log(Information);
    let normal = { ...Information, ...Information.postStat };
    console.log(normal);
  }
  loadMoreMeme() {}
  componentDidMount() {
    // console.log(this.props.me);
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
        <div className="load-more">
          <h1>Load More</h1>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  me: state.me
});

export default connect(
  mapStatetoProps,
  {}
)(MainPage);
