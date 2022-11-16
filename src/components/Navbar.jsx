import React from 'react'
import { Link } from '@mui/material';
import metabnb from '../assets/img/metabnb.png'
import { Button } from '@mui/material';



const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={metabnb} alt='metabnb' className='logo'/>
      <div className='nav-links'>
        <Link className="nav_links" to='/'>Home</Link>
        <Link className="nav_links" to='/'>Place To Stay</Link>
        <Link className="nav_links" to='/'>NFTS</Link>
        <Link className="nav_links" to='/'>Community</Link>
        <Button className="connect" variant="contained" color="primary">Connect Wallet</Button>
      </div>
    </nav>
  );
}

export default Navbar