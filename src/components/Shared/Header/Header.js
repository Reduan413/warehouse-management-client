import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../image/logo.png";
import CustomLink from "../CustomLink/CustomLink";
import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={40} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link><CustomLink to="/">Home</CustomLink></Nav.Link>
              <Nav.Link><CustomLink to="/donation">Donation</CustomLink></Nav.Link>
              <Nav.Link><CustomLink to="/about">About</CustomLink></Nav.Link>
              <Nav.Link><CustomLink to="/blog">Blog</CustomLink></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">
              <Button variant="dark">Admin</Button>
              </Nav.Link>

              <Nav.Link as={Link} to="/login">
               <Button className="btn" variant=""><FontAwesomeIcon icon={faRightToBracket} /> Login</Button> 
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
