import React, { Component } from "react";
import BlockA from "../Components/BlockA";
import BlockB from "../Components/BlockB";
import Header from "../Components/Header";
import { Redirect } from "react-router";

class User extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("UserToken");
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
        </div>
      </>
    );
  }
}

export default User;
