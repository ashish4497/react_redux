import React from 'react';
import {Link} from 'react-router-dom';
import SignInOutLinks from './SignInOutLinks';
import SignedInLinks from './SignedInLinks';
import {connect} from 'react-redux';

const Navbar = () => {
  return (
    <nav className = "nav-wrapper #c5cae9 indigo lighten-4">
      <div className ="container">
        <Link to ="/" className="brand-logo">marioplan</Link>
        <SignedInLinks />
        <SignInOutLinks />
      </div>
    </nav>
  ) 
}

const mapStateToProps = (state) => {
  console.log(state)
  return {

  }
}

export default connect(mapStateToProps)(Navbar);