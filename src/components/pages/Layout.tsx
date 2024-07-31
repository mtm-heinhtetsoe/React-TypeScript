import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from "react-router-dom";
import { Switch } from "../atoms/Switch/Switch";

export const ModeContext = React.createContext("Table");

function Layout() {
  const [mode, setMode] = useState('Table');
  return (
    <ModeContext.Provider value={mode}>
      <div>
          <Navbar expand="lg" sticky="top" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
          <Container>
              <Navbar.Brand href="/">React TypeScript</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/postList">Posts</Nav.Link>
                    <Nav.Link href="/userList">Users</Nav.Link>
                    <Nav.Link href="/SignUp">Sign Up</Nav.Link>
                </Nav>
                <Nav>
                <Switch mode={mode} setMode={setMode} />
                </Nav>
                <Navbar.Text className="me-2">
                  Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
              </Navbar.Collapse>
          </Container>
          </Navbar>
          <Outlet />
      </div>
    </ModeContext.Provider>
  );
}

export default Layout;