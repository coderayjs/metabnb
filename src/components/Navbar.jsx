import React from 'react'
import { Link } from '@mui/material';
import metabnb from '../assets/img/metabnb.png'


const Navbar = () => {
  return (
    <nav className="navbar">
      <nav className="navbar__left"/>
          <Link to="/" className="navbar__logo"/>
              <img className='navbar__logo' 
              src={metabnb} alt="logo"/>
              
      <div className="nav_links">
        <Link to="/">Home</Link>
        <Link to="/Create">Place To Stay</Link>
        <Link to="/Nfts">NFTS</Link>
        <Link to="/Community">Community</Link>
      </div>
              
      <nav className="navbar__right"/>
          <Link to="/Connect" >Connect Wallet</Link>
    </nav>
  );
}


export default Navbar