import React, { Component } from "react";

class Search extends Component {
  state = {};

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangeLang = e => {
    this.setState({ language: e.target.value, ready: true });
  };

  handleChangeState = e => {
    let a = e.target.value;
    console.log(a);
    if (a === "true") this.setState({ state: true });
    else this.setState({ state: false });
  };

  handleClick = () => {
    console.log(this.state);
    this.props.AddRequest(this.state);
    this.setState({
      name: "",
      language: ""
    });
  };

  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Repo Title"
            id="name"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Repo Langauge"
            id="language"
            value={this.state.language}
            onChange={this.handleChangeLang}
          />
          <select
            className="custom-select"
            id="state"
            onChange={this.handleChangeState}
          >
            <option disabled selected>
              Choose privacy
            </option>
            <option value="true">Private</option>
            <option value="false">Public</option>
          </select>

          <div className="input-group-append">
            <button className="btn btn-primary" onClick={this.handleClick}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
