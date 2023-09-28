/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import paws from '../../images/footprint.png'

import classes from './Navbar.module.css';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
         
         <div className={classes.navbarBrand}>
        <img src={paws}  alt="paws" className={classes.logo}/>
        <NavLink to="/" className={classes.aLink}>Dr. Vet</NavLink>
          </div>

        <ul className={classes.navLinks}>
  
          <div className={classes.menu}>
            <NavLink to="/" className={classes.Link}>Home</NavLink>
            <NavLink to="/dashboard" className={classes.Link}>Dashboard</NavLink>
            <NavLink to="/services" className={classes.Link}>services</NavLink>
            <NavLink to="/" className={classes.Link}>Logout</NavLink>
          </div>
        </ul>
    </nav>
  )
}

export default Navbar