import React from 'react';
import { Container,Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    let activeStyle={
        color: '#fff',
    };
    return (
        <div className="header">
            <Navbar expand="lg" fixed='top'>
           <Container>
      <h1 className='header-name'>Mary Sanni</h1>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Nav className='ml-auto'>
                    <NavLink to='/'className='nav-link'
                    style={({ isActive}) => (isActive ? activeStyle : undefined)}
                    >
                        Home
                        </NavLink>
                    <NavLink to='/About' className='nav-link'
                    style={({ isActive}) => (isActive ? activeStyle : undefined)}
                    >About</NavLink>
                    <NavLink to='/Contact'className='nav-link'
                    style={({ isActive}) => (isActive ? activeStyle : undefined)}
                    >Contact</NavLink>
                    <NavLink to='/Projects'className='nav-link'
                    style={({ isActive}) => (isActive ? activeStyle : undefined)}
                    >Projects</NavLink>
                    <NavLink to='/Services'className='nav-link'
                    style={({ isActive}) => (isActive ? activeStyle : undefined)}
                    >Skills</NavLink>
                </Nav>
            </Navbar.Collapse>
           </Container>
           </Navbar>
            Header
        </div>
    );
};

export default Header;
