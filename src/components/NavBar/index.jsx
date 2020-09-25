import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Drawing</NavbarBrand>
    <Nav className="mr-auto" navbar>
      <NavItem>
        <NavLink href="/">Canvas</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/statistics">Statistics</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default NavBar;
