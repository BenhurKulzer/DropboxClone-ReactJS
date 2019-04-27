import React, { Component } from "react";
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import "./styles.css";

export default class Main extends Component {
  state = {
    username: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const response = await api.post('/boxes', {
      title: this.state.username,
    });

    this.props.history.push(`/box/${response.data._id}`);
  };

  handleInputChange = (e) => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="" width="100px" />
          <input
            placeholder="Criar uma Box"
            value={this.state.username}
            onChange={this.handleInputChange}
          />

          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}
