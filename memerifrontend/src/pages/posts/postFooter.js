import React, { Component } from "react";

export default class postFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getComment = this.getComment.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.setState({
      postDetail: this.props.state
    });
  }

  async getComment() {
    await this.setState({
      isLoadingComment: true
    });
    console.log(this.state.isLoadingComment);
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => res.json())
      .then(data => {
        this.setState({
          postComment: data,
          isLoadingComment: false
        });
      })
      .then(() => {
        console.log(this.state);
        const hideThis = document.querySelector(
          ".post-comment-section__" + this.state.postDetail.key
        );
        hideThis.classList.add("hide");
      });
  }

  componentDidMount() {
    // console.log(this.state);
  }
  render() {
    return (
      <div className="post-footer">
        {this.state.isLoadingComment ? (
          <div className="loader">
            <div className="icon"></div>
          </div>
        ) : this.state.postComment ? (
          <div>Content</div>
        ) : (
          <div className="hide"></div>
        )}
        <div className="footer-container">
          <div className="support-creator-btn">SUPPORT CREATOR</div>
          <div
            onClick={this.getComment}
            className={
              `post-comment-section` +
              ` post-comment-section__${this.state.postDetail.key}`
            }
          >
            COMMENTS
          </div>
        </div>
      </div>
    );
  }
}
