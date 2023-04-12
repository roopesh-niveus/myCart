import React, { Component } from "react";
import "./product.css";
import Confirm from "./Confirm";
/*
Cart is acomponent which takes props cartitems, addToCart and removeFrom cart from App.js
It takes the cartItem props and display all the information in it.
Onclicking '-' button it decreaments count by 1 and i count is 1 removes the item from cart.
Onclicking '+' button it increaments count by 1.
It also renders confirm component to checkout
*/
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showConfirm: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
    // handleClick is function which sets showConfirm to 'true', which is used to render checkout component
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
                  onClick={
                    // this rendor the removeFromCart function in App.js which will decreament the count or remove
                    () => this.props.removeFromCart(cartItem)}
                >
                  -
                </button>
                <strong className="quant"> {cartItem.quantity} </strong>
                <button
                  className="plusminus addtocart-hover"
                  onClick={
                    // this rendor the addToCart function in App.js which will increament the count
                    () => this.props.addToCart(cartItem)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="checkoutdiv">
          
          <button className="checkout" onClick={this.handleClick}
          //Button which will set the showConfirm button to 'true' and then render the Confirm component
          >
            Check Out
          </button>
          {this.state.showConfirm && <><br></br><Confirm /></>}
        </div>
      </>
    );
  }
}
export default Cart;
