import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Add from "./components/Add.js";
import Table from "./components/table";

class mainApp extends Component {
  state = {
    githubData: [],
    UserFound: false,
    reposExist: false
  };

  changePrivate = id => {
    // console.log("id", id);
    // console.log(this.state.githubData);
    axios.put(`http://localhost:9000/update/${id}`).then(response => {
      // console.log(response.data);
      this.setState({
        githubData: response.data
      });
    });
  };

  getData = () => {
    fetch("http://localhost:9000/Repos")
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson);
        if (responseJson.length === 0) {
          axios.get("http://localhost:9000/").then(responseJson => {
            // console.log(responseJson.data);
            // console.log("this.state");
            this.setState({
              githubData: responseJson.data,
              UserFound: true
            });
          });
        } else {
          this.setState({
            githubData: responseJson
          });
        }
      });
  };

  AddRequest = s => {
    debugger;
    console.log(s);
    if (s.name !== "" && s.language !== "" && s.ready === true) {
      let request = `http://localhost:9000/add`;
      axios.post(request, s).then(response => {
        // console.log(response.data);
        this.setState({
          githubData: response.data
        });
      });
    } else alert("please fill the fields");
  };

  deleteRepo = id => {
    // console.log(id);
    // console.log(this.state.githubData);
    let request = `http://localhost:9000/delete/${id}`;
    // console.log(request);
    axios.delete(request).then(response => {
      console.log(response.data);
      this.setState({
        githubData: response.data
      });
    });
  };

  render() {
    let renderComponent = (
      <Table
        data={this.state.githubData}
        flip={this.changePrivate}
        delete={this.deleteRepo}
      />
    );

    return (
      <div className="container">
        <h1> Github </h1>
        <button className="btn btn-warning" onClick={this.getData}>
          {" "}
          Get The Data{" "}
        </button>
        <Add className="top" AddRequest={this.AddRequest} />
        <div className="bottom"> {renderComponent}</div>
      </div>
    );
  }
}

export default mainApp;
