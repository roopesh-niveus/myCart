import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { AiTwotoneHeart, AiTwotoneHome } from "react-icons/ai";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import "./product.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Foot Corner
            </Navbar.Brand>
            <Nav className="me-auto">
              <Link className="navigation" to="/">
                Home
                <AiTwotoneHome />
              </Link>
              <Link className="navigation" to="/wishlist">
                Wishlist
                <AiTwotoneHeart />
              </Link>
              <Link className="navigation" to="/cart">
                Cart
                <FaShoppingCart />
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
