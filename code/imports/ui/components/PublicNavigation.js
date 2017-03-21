import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const PublicNavigation = () => (
  <Nav pullRight>
    <li>
      <NavLink to="/signup" activeClassName="active">Signup</NavLink>
    </li>
    <li>
      <NavLink to="/login" activeClassName="active">Login</NavLink>
    </li>
  </Nav>
);

export default PublicNavigation;
