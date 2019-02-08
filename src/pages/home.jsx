import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addPost } from "../actions/index";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: ""
  };
  setInputValue = (e, inputName) => {
    this.setState({ [inputName]: e.target.value });
  };
  submitForm = () => {
    console.log(this.state);
    this.props.addpost({ name: this.state.name });
    // this.props.history.push(`/welcome/${this.state.name}`);
    // this.props.dispatch(addPost({ name: this.state.name }));
    this.setState({ name: "" });
  };
  render() {
    return (
      <div>
        <h1>This home</h1>
        <br />
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={this.state.name}
            onChange={e => this.setInputValue(e, "name")}
          />
        </div>
        <button className="btn btn-primary" onClick={this.submitForm}>
          Submit
        </button>
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
const mapDispatchToProps = dispatch => {
  return {
    addpost: post => dispatch(addPost(post)),
    dispatch
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home));
