import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';
import Auth from '../../utils/auth';

const styles = {
  dropContent: {
    display: 'flex',
    
  },
  dropdownLinks: {
    textDecoration: 'none',
    fontSize: '18px',
    color: 'orange',
    margin: '0px 0px 15px 0px'
  }
}

function Navbar() {
  
  const showNavigation = () => {
    if (Auth.loggedIn()) {
      return (
        <div>
          <div className="rightnav-a">
            <Link to="/trips">
              your trips
            </Link>
          </div>
          <div className="rightnav-a">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              logout
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="rightnav-a">
            <Link to="/login">
              login
            </Link>
          </div>
        </div>
      );
    }
  }

  return (
    <div id='nav' name='top'>
      <div id='leftnav'>
        <Link to='/'>
          <i id='camper' className='fas fa-route'></i>
        </Link>
      </div>
      <div id='rightnav'>
        <Link className='rightnav-a' to='/'>
          home
        </Link>
        <span className='dropdown'>
          <Link className='rightnav-a' to='/destinations'>
            destinations
          </Link>
          <div className='dropdown-content'>
            <div id='dropdown-set1'>
              <Link className='dropDownLink' to='/arches'>Arches</Link>
              <Link className='dropDownLink' to='/bryce'>Bryce Canyon</Link>
              <Link className='dropDownLink' to='/glacier'>Glacier Mtn</Link>
              <Link className='dropDownLink' to='/grand-canyon'>Grand Canyon</Link>

            </div>
            <div id='dropdown-set2'>
              <Link className='dropDownLink' to='/olympic'>Olympic</Link>
              <Link className='dropDownLink' to='/rocky-mtn'>Rocky Mtn</Link>
              <Link className='dropDownLink' to='/sequoia'>Sequoia</Link>
              <Link className='dropDownLink' to='/smokey'>Smokey Mtn</Link>
            </div>
            <div id='dropdown-set3'>
              <Link className='dropDownLink' to='/teton'>Teton</Link>
              <Link className='dropDownLink' to='/yellowstone'>Yellowstone</Link>
              <Link className='dropDownLink' to='/yosemite'>Yosemite</Link>
              <Link className='dropDownLink' to='/zion'>Zion</Link>
            </div>
          </div>
        </span>
        <Link class='rightnav-a' to='/shop'>
          shop
        </Link>
        {showNavigation()}
      </div>
    </div>
  )
} 
export default Navbar;
