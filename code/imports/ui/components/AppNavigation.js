import React, { PropTypes } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';

const renderNavigation = authenticated =>
(authenticated ? <AuthenticatedNavigation /> : <PublicNavigation />);

const AppNavigation = ({ authenticated }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Application Name</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      { renderNavigation(authenticated) }
    </Navbar.Collapse>
  </Navbar>
);

AppNavigation.propTypes = {
  authenticated: PropTypes.bool,
};

export default AppNavigation;
