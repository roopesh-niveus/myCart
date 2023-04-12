import React, { Component } from "react";
import "./product.css";
import { Link } from "react-router-dom";

export default class Confirm extends Component {
  render() {
    return (
      <div className="product">
        <h4>Continue as ...</h4>
        <div>
          <button className="addtocart addtocart-hover">
            <Link to="/checkout">Guest</Link>
          </button>
          <button className="addtocart addtocart-hover">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    );
  }
}
