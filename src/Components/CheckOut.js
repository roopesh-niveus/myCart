import React, { Component } from "react";
import Billing from "./Billing";
class CheckOut extends Component {
  total = 0;
  qunt = 0;
  visible = true;
  myFunction = (arg1, arg2) => {
    const result = arg1 * arg2;
    this.total += result;
    this.qunt += arg2;
    return result;
  };
  render() {
    return (
      <>
        <div className="center">
          <div>CheckOut</div>
          <div className="coproductgrid">
            {this.props.cartItems.map((cartItem) => (
              <div className="coproduct">
                <img
                  className="coproduct-img product-hover"
                  src={cartItem.url}
                  alt="product"
                ></img>
                <p className="coproduct-desc">{cartItem.name}</p>
                <p className="coproduct-desc">
                  Rs.{cartItem.price}/-<br></br>
                </p>
                <p className="coproduct-desc">{cartItem.quantity}</p>
                <p className="coproduct-desc">
                  {this.myFunction(cartItem.price, cartItem.quantity)}
                </p>
                <p></p>
              </div>
            ))}
          </div>
          <div className="total">
            <pre>Total items : {this.qunt} </pre>
            <pre>Total Amount : {this.total}</pre>
            <Billing />
          </div>
        </div>
      </>
    );
  }
}
export default CheckOut;
