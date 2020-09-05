import React, { Component } from "react";
import "../App.css";
class Header extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="main_header">
          <div className="main_h1">
            <h1>Welcome to Darwin</h1>
          </div>
          <div style={{ float: "right", marginRight: "50px" }}>
            <h5>Hi, {this.props.name}</h5>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
