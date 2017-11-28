import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { Title } from './styles';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Todo application</title>
          <meta name="description" content="A React.js Boilerplate Todo application" />
        </Helmet>
        <Title>Welcome to todo application</Title>
        <Nav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/todo">Todo List</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/auth/login">Login</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Header;