import React, { Component } from "react";
import Btn from "./Btn";

class Row extends Component {
  state = {};

  handleToggle = i => {
    // console.log(i);
    this.props.flip(i);
  };

  render() {
    // console.log(this.props.deleteId);
    return (
      <tr>
        <td> {this.props.id} </td>
        <td> {this.props.name}</td>
        {this.props.private ? <td> Private </td> : <td> Public </td>}
        {this.props.private ? (
          <td>
            {" "}
            <input
              onChange={() => this.handleToggle(this.props.deleteId)}
              type="checkbox"
              aria-label="Checkbox for following text input"
              checked={this.props.private}
            />{" "}
          </td>
        ) : (
          <td>
            {" "}
            <input
              onChange={() => this.handleToggle(this.props.deleteId)}
              type="checkbox"
              aria-label="Checkbox for following text input"
              defaultchecked={this.props.private}
            />{" "}
          </td>
        )}
        {this.props.private ? <td> Yes </td> : <td> No </td>}
        <td> {this.props.lang} </td>
        <td>
          <Btn deleteId={this.props.deleteId} delete={this.props.delete} />
        </td>
      </tr>
    );
  }
}

export default Row;

//
