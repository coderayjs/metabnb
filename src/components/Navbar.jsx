import React from 'react'
import { Link } from '@mui/material';
import metabnb from '../assets/img/metabnb.png'
import { Button } from '@mui/material';



const Navbar = () => {
  return (
    <nav className="navbar">
      <nav className="navbar__left"/>
          <Link to="/" className="navbar__logo"/>
              <img className='navbar__logo' 
              src={metabnb} alt="logo"/>
              
      <div className="nav_items">
        <Link className='nav_links' to="/">Home</Link>
        <Link className='nav_links' to="/Create">Place To Stay</Link>
        <Link className='nav_links' to="/Nfts">NFTS</Link>
        <Link className="nav_links" to="/Community">Community</Link>
      </div>
              
      <div className="connect">
        <Button variant="contained">Connect Wallet</Button>
      </div>
    </nav>
  );
}


export default Navbar