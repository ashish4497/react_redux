import React from 'react';
import {Link} from 'react-router-dom';
import SignInOutLinks from './SignInOutLinks';
import SignedInLinks from './SignedInLinks';

const Navbar = () => {
  return (
    <nav className = "nav-wrapper gray dark-3">
      <div className ="container">
        <Link to ="/" className="brand-logo">marioplan</Link>
        <SignedInLinks />
        <SignInOutLinks />
      </div>
    </nav>
  ) 
}

export default Navbar;