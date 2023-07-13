import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import '../App.css';
import { useNavigate, NavLink} from 'react-router-dom';

function Header({currentUser, logout}) {
  const navigate = useNavigate()
  const handleClick = () => {
    logout()
    navigate('/')
  }

  return (
    <div className='header-entire-content'>
      <Navbar >
        <NavbarBrand href="/">日本チーム</NavbarBrand>
        <Nav className="nav">
            {currentUser && (
              <>
              <NavItem>
                  <NavLink to="/apartments" className="nav-link">
                    List Of Apartments
                  </NavLink>
                </NavItem>
              <NavItem>
                <NavLink to='/myapartments' className='nav-link'>My Listings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/newapartment' className='nav-link'>Create Listing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={handleClick} className='nav-link'>Log Out</NavLink>
              </NavItem>
              </>
            )}
            {!currentUser && (
              <>
              <NavItem>
                  <NavLink to="/apartments" className="nav-link">
                    List of apartments
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/signin" className="nav-link">
                    Sign In
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/signup" className="nav-link">
                    Sign Up
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
      </Navbar>
    </div>
  );
}

export default Header;