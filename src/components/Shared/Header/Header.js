import { faArrowRightFromBracket, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../image/logo.png";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
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
            <img height={50} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <CustomLink to="/">Home</CustomLink>
              </Nav.Link>

              <Nav.Link>
                <CustomLink to="/about">About</CustomLink>
              </Nav.Link>
              <Nav.Link>
                <CustomLink to="/blog">Blog</CustomLink>
              </Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <>
                  <Nav.Link as={Link} to="/manageinventory">
                    <Button variant="dark">Manage Inventory</Button>
                  </Nav.Link>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-link text-decoration-none"
                    style={{ height: 39, marginTop: 23 }}
                  >
                    <FontAwesomeIcon icon={faArrowRightFromBracket} /> Sign Our
                  </button>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <Button className="btn" variant="">
                    <FontAwesomeIcon icon={faRightToBracket} /> Login
                  </Button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
