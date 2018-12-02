import React from 'react';
import {  NavDropdown, MenuItem, Navbar, NavItem, Nav } from 'react-bootstrap';

const HeaderComponent = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home"><span className="title-patient">Patient </span><span className="title-profiler">Profiler </span> </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
      <NavItem className="nav-item" eventKey={1} href="#">
      <p className="sub-nav">THERPY</p>DIABETES<span className="glyphicon glyphicon-menu-down"></span>
      </NavItem>
      <NavItem  className="nav-item" eventKey={2} href="#">
      <p className="sub-nav">OVERVIEW</p>MARKET<span className="glyphicon glyphicon-menu-down"></span>
      </NavItem>
      <NavItem className=" nav-item patient" eventKey={2} href="#">
        Patient Journey <span className="glyphicon glyphicon-menu-down"></span>
      </NavItem>
      <NavItem  className="nav-item" eventKey={2} href="#">
      <p className="sub-nav">DRUG CLASS</p>GLP-1<span className="glyphicon glyphicon-menu-down"></span>
      </NavItem>
      </Nav>
        <Nav pullRight>
          <NavItem href="#">
            <i className="glyphicon glyphicon-question-sign"></i>
          </NavItem>
          <NavItem href="#">
            <i className="glyphicon glyphicon-bell"></i>
          </NavItem>
          <NavDropdown eventKey={3} title={<i className="glyphicon glyphicon-user"></i>} id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Account</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderComponent;