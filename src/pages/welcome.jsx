import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <h1>Welcome, {this.props.match.params.name}</h1>
        {this.props.posts.map(value => {
          return <p>{value.name}</p>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(
  mapStateToProps,
  null
)(withRouter(Welcome));
