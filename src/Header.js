import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Project Name</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem
            eventKey={1}
            href="#"
            name="page1"
            onClick={this.props.changePage}
          >
            Example 1
          </NavItem>
          <NavItem
            eventKey={2}
            href="#"
            value={2}
            name="page2"
            onClick={this.props.changePage}
          >
            Example 2
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
