import React, { Component } from "react";
import "../App.css";
import BlockA from "../Components/BlockA";
import BlockB from "../Components/BlockB";
import BlockC from "../Components/BlockC";
import Header from "../Components/Header";
import { Redirect } from "react-router";

class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("AdminToken");
    let logedIn = true;
    if (token == null) {
      logedIn = false;
    }

    this.state = {
      logedIn,
    };
  }
  render() {
    if (this.state.logedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <Header name={this.props.location.state.fullname} />
        <div className="flex-container">
          <BlockA />
          <BlockB />
          <BlockC />
        </div>
      </>
    );
  }
}

export default Admin;
