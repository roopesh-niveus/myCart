import React, { Component } from "react";
import "./product.css";

class Product extends Component {
  render() {
    return (
      <>
        <div className="product ">
          {this.props.products.map((product) => (
            <div>
              <img
                className="product-img product-hover"
                src={product.url}
                alt="product"
              ></img>
              <p className="product-desc">
                {product.name}
                <br></br>Rs.{product.price}/-
              </p>
              <div className="btn">
                <button
                  className="addtocart addtocart-hover"
                  onClick={() => this.props.addToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="wishbtn"
                  onClick={() => this.props.addToWishlist(product)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart-half"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 2.748v11.047c3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Product;
