import React, { Component } from "react";
import Row from "./Row";

class Table extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#of repos</th>
            <th scope="col">Name of the repo</th>
            <th scope="col">Repo state</th>
            <th scope="col">Check-privacy</th>
            <th scope="col">Private</th>
            <th scope="col">Language</th>
            <th scope="col"> Delete </th>
          </tr>
        </thead>

        <tbody>
          {this.props.data.map((repo, index) => {
            // console.log(repo._id);
            return (
              <Row
                id={index + 1}
                deleteId={repo._id}
                name={repo.name}
                private={repo.state}
                lang={repo.language}
                link={repo.svn_url}
                key={repo.id}
                flip={this.props.flip}
                delete={this.props.delete}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
