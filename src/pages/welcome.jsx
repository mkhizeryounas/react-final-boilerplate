import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return <h1>Welcome, {this.props.match.params.name}</h1>;
  }
}

export default withRouter(Welcome);
