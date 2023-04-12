import React, { Component } from "react";
import "./product.css";
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
