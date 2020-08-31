import React from 'react';
import { /*Link*/ NavLink } from 'react-router-dom';

// la difrencia entre Link y NavLink unicamente consiste en que:
// NavLink permite hacer uso de un parametro para conocer que ruta
// se encuentra activa y de esa forma aplicar una clase, como
// routerLinkActive en angular

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <NavLink className='navbar-brand' to='/'>
        useContext
      </NavLink>

      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <NavLink exact activeClassName='active' className='nav-link' to='/'>
            Home
          </NavLink>
          <NavLink
            exact
            activeClassName='active'
            className='nav-link'
            to='/about'
          >
            About
          </NavLink>
          <NavLink
            exact
            activeClassName='active'
            className='nav-link'
            to='/login'
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};