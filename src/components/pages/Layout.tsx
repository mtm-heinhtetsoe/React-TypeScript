import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getToken, login, logout } from '../auth/authSlice';
import { LoginRepository } from '../../repositories/LoginRepository';

function Layout() {
  const token = useAppSelector(getToken);
  const dispatch = useAppDispatch();

  const credentials = {
    email: "admin@gmail.com",
    password: "password",
  };

  const handleLogin = () => {
    LoginRepository.login(credentials).then((response: any) => {
      dispatch(login(response.data));
  }) 
  }

  return (
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
              <Navbar.Text className="me-2">
                {token ? (
                  <Navbar.Brand onClick={() => dispatch(logout())}>Logout</Navbar.Brand>
                ) : (
                  <Navbar.Brand onClick={handleLogin}>Login</Navbar.Brand>
                )}
              </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <Outlet />
    </div>
  );
}

export default Layout;