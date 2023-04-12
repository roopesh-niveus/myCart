import React, { Component } from "react";
import "./product.css";
/*
It is component wich displays all the products in the wishlistitems state of App.js
It takes all the products as props from App.js
On clicking the addtocart button calls addToCart function of App.js through props
On clicking the aremove button calls removeFromwishlist function of App.js through props
*/
class Wishlist extends Component {
  render() {
    return (
      <>
        <div className="product">
          {this.props.wishlistItems.map((wishlistItem) => (
            <div>
              <img
                src={wishlistItem.url}
                alt="wishlist"
                className="product-img"
              ></img>
              <p className="product-desc">
                {wishlistItem.name}
                <br></br>Rs.{wishlistItem.price}/-
              </p>
              <div className="btn">
                <button
                  className="remove addtocart-hover"
                  onClick={() => this.props.removeFromWishlist(wishlistItem)}
                >
                  Remove
                </button>
                <button
                  className="remove addtocart-hover"
                  onClick={() => this.props.addToCart(wishlistItem)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Wishlist;
