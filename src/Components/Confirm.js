import React, { Component } from "react";
import "./product.css";
import { Link } from "react-router-dom";
/*
Component to navigate user to checkout page as a guest or to login page to login.
It redirects to checkout page on clicking Guest button and to login page on clicking Login button
*/
export default class Confirm extends Component {
  render() {
    return (
      
      <div className="product">
        <h2>Continue as ...</h2>
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
