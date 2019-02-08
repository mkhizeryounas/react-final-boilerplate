import React, { Component } from "react";
import { withRouter } from "react-router-dom";

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
  submitForm() {
    console.log(this.state);
    this.props.history.push(`/welcome/${this.state.name}`);
  }
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
        <button className="btn btn-primary" onClick={() => this.submitForm()}>
          Submit
        </button>
      </div>
    );
  }
}

export default withRouter(Home);
