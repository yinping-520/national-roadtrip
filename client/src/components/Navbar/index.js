import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';
import Auth from '../../utils/auth';
// import camper from '../assets/camper.png';

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
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  // if (Auth.loggedIn()) {
  //   return (
  //     <>
  //       <Link to='/me'>
  //         {Auth.getProfile().data.username}'s profile
  //       </Link>
  //       <button onClick={logout}>
  //         Logout
  //       </button>
  //     </>
  //   );
  // }
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
              {/* <Link style={styles.dropdownLinks} to='/arches'>Arches</Link> */}
              <p>Arches</p>
              {/* <Link style={styles.dropdownLinks} to='/arches'>Bryce Canyon</Link> */}
              <p>Bryce Canyon</p>
              <p>Glacier Mtn</p>
              <p>Grand Canyon</p>
            </div>
            <div id='dropdown-set2'>
              <p>Olympic</p>
              <p>Rocky Mtn</p>
              <p>Sequoia</p>
              <p>Smokey Mtn</p>
            </div>
            <div id='dropdown-set3'>
              <p>Teton</p>
              <p>Yellowstone</p>
              <p>Yosemite</p>
              <p>Zion</p>
            </div>
          </div>
        </span>
        <Link class='rightnav-a' to='/shop'>
          shop
        </Link>
        {/* <Link class='rightnav-a' to='/journey'>
          your trips
        </Link> */}
        <Link class='rightnav-a' to='/login'>
          login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
