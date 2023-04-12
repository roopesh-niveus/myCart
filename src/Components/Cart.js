import React, { Component } from "react";
import "./product.css";
import Confirm from "./Confirm";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showConfirm: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ showConfirm: true });
  }

  render() {
    return (
      <>
        <div className="product">
          {this.props.cartItems.map((cartItem) => (
            <div>
              <img
                className="product-img product-hover"
                src={cartItem.url}
                alt="product"
              ></img>
              <p className="product-desc">
                {cartItem.name}
                <br></br>Rs.{cartItem.price}/-<br></br>
              </p>
              <div className="btn">
                <button
                  className="plusminus addtocart-hover"
                  onClick={() => this.props.removeFromCart(cartItem)}
                >
                  -
                </button>
                <strong className="quant"> {cartItem.quantity} </strong>
                <button
                  className="plusminus addtocart-hover"
                  onClick={() => this.props.addToCart(cartItem)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="checkoutdiv">
          <button className="checkout" onClick={this.handleClick}>
            Check Out
          </button>
          {this.state.showConfirm && <Confirm />}
        </div>
      </>
    );
  }
}
export default Cart;
