import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../../images/logo-black.png'
import { useAuthState  } from 'react-firebase-hooks/auth';
import { auth } from '../../../Firebase/Firebase.init';
import useFirebase from '../../../Hooks/useFirebase';
import useDarkMode from '../../../Hooks/useDarkMode';
const Header = () => {
  const {handleSignOut} = useFirebase()
  const [user] = useAuthState(auth);
const {darkMode, setDarkMode,useDark: UseDark} = useDarkMode()

const disPlayDark = () =>{
  setDarkMode(!darkMode)
  UseDark()
}
    return (
<Navbar bg='grey' expand="lg" className={`sticky-top ${darkMode ? 'black' : 'grey'}`}>
  <Container>
    <Navbar.Brand as={Link} to='/'>
        <img src={logo} height="60px" alt="" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Nav.Link href="home#services">Services</Nav.Link>
        <Nav.Link href="home#experts">Experts</Nav.Link>
      <Nav
        className="ms-auto my-2 my-lg-0 sticky-top"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
                  <NavLink
  to="/log61"
  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
>
  Log-61
</NavLink>

           <NavLink
  to="/"
  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
>
  Home
</NavLink>
          <NavLink
  to="/about"
  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
>
  About
</NavLink>
          <NavLink
  to="/shop"
  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
>
  Shop
</NavLink>
    {
      user ?       <NavLink onClick={handleSignOut}
      to=""
      className={({ isActive }) => (isActive ? 'active' : 'inactive')}
    >
      LogOut
    </NavLink> 
    : 
    <NavLink
    to="/login"
    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
  >
    Login
  </NavLink>
    }
     <Form.Check onChange={disPlayDark} 
    type="switch"
    id="custom-switch"
  />
  <div className="text-white ms-3
  ">
  {darkMode ? 'Dark' : 'Light'}
  </div>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;