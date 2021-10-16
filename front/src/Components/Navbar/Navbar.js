import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Rest API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/"> Home </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contacts">Contacts</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/add">Add Contact</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
