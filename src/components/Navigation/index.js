import React from "react";
import { Navbar, Nav} from "react-bootstrap";
// import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
    
        <Navbar collapseOnSelect expand="lg" className="nav-color" variant="dark">
  <Navbar.Brand href="/"><img className="logo" alt="" src="./asset/img/logo.png"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="ml-auto pet" style={{lineHeight:"3rem"}}>
      <Nav.Link active href="about">About</Nav.Link>
      <Nav.Link active href="contact" >
        Contact Us
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
        </div>
      </React.Fragment>
    );
  }
}

export default Navigation;
