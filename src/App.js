import "./App.css";
import React, { Component } from "react";
import Product from "./Components/Product";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Wishlist from "./Components/Wishlist";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CheckOut from "./Components/CheckOut";
import Login from "./Components/Login";

class App extends Component {
  constructor(props) {
    super(props);
    //state having product,caritems and widhlistitems
    this.state = {
      products: [
        {
          id: 1,
          name: "Adidas 2903",
          price: 2978,
          url: "https://images.unsplash.com/photo-1620794341491-76be6eeb6946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyYW5kZWQlMjBmb290d2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 2,
          name: "Fila Casual",
          price: 1999,
          url: "https://images.unsplash.com/photo-1579446565308-427218a2c60e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnJhbmRlZCUyMGZvb3R3ZWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 3,
          name: "Air Premium",
          price: 2599,
          url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJyYW5kZWQlMjBmb290d2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 4,
          name: "Encap 3345",
          price: 999,
          url: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyYW5kZWQlMjBmb290d2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 5,
          name: "Nike Casuals",
          price: 4999,
          url: "https://images.unsplash.com/photo-1579446650032-86effeeb3389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGJyYW5kZWQlMjBmb290d2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 6,
          name: "Nike Sports",
          price: 5579,
          url: "https://images.unsplash.com/photo-1575456456278-936c89ccdb7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyYW5kZWQlMjBmb290d2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 7,
          name: "Encap 5647",
          price: 1899,
          url: "https://images.unsplash.com/photo-1539874202413-c1f47b33169f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGJyYW5kZWQlMjBmb290d2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 8,
          name: "Woodland",
          price: 2599,
          url: "https://images.unsplash.com/photo-1554133818-7bb790d55236?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
      ],
      cartItems: [],
      wishlistItems: [],
      login: false,
    };
  }
  //function to add product to cart using findIndex and push 
  addToCart = (product) => {
    const cartItems = [...this.state.cartItems];
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index === -1) {
      cartItems.push({ ...product, quantity: 1 });
    } else {
      cartItems[index].quantity += 1;
    }
    this.setState({ cartItems });
    console.log({ cartItems });
  };
  //function to remove a product from cart using findIndex and splice
  removeFromCart = (product) => {
    const cartItems = [...this.state.cartItems];
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      if (cartItems[index].quantity === 1) {
        cartItems.splice(index, 1);
      } else {
        cartItems[index].quantity -= 1;
      }
      this.setState({ cartItems });
    }
  };

  //function to add product to wishlist using findIndex and push 
  addToWishlist = (product) => {
    const wishlistItems = [...this.state.wishlistItems];
    const index = wishlistItems.findIndex((item) => item.id === product.id);
    if (index === -1) {
      wishlistItems.push({ ...product });
    }
    this.setState({ wishlistItems });
  };
  //function to remove a product from wishlist using findIndex and splice
  removeFromWishlist = (product) => {
    const wishlistItems = [...this.state.wishlistItems];
    const index = wishlistItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      wishlistItems.splice(index, 1);
      this.setState({ wishlistItems });
    }
  };
//rendering other components using routing
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                //Rendering product component with arguments product state and addTOCart & addToWishlist functions as props
                <Product
                  products={this.state.products}
                  addToCart={this.addToCart}
                  addToWishlist={this.addToWishlist}
                />
              }
            ></Route>
            <Route
              exact
              path="/cart"
              element={
                //Rendering cart component with arguments cartItem state and addTOCart & removeFrom Cart functions as props
                <Cart
                  cartItems={this.state.cartItems}
                  removeFromCart={this.removeFromCart}
                  addToCart={this.addToCart}
                />
              }
            ></Route>
            <Route
              exact
              path="/wishlist"
              element={
                //Rendering wishlist component with arguments wishlistitems state and addTOCart & removeFromWishlist functions as props
                <Wishlist
                  wishlistItems={this.state.wishlistItems}
                  removeFromWishlist={this.removeFromWishlist}
                  addToCart={this.addToCart}
                />
              }
            ></Route>
            <Route
              exact
              path="/checkout"
              element={
                //Rendering Checkout component with argument cartItems as props
              <CheckOut cartItems={this.state.cartItems} />}
            ></Route>
            <Route exact path="/login" element={
            //Rendering Login component
            <Login />}></Route>
          </Routes>
        </BrowserRouter>
        <div></div>
      </>
    );
  }
}

export default App;
