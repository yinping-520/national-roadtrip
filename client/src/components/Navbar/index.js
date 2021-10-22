import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';
import Auth from '../../utils/auth';
// import camper from '../assets/camper.png';

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  // if (Auth.loggedIn()) {
  //   return (
  //     <>
  //       <Link to="/me">
  //         {Auth.getProfile().data.username}'s profile
  //       </Link>
  //       <button onClick={logout}>
  //         Logout
  //       </button>
  //     </>
  //   );
  // }
  return (
    <div id="nav" name="top">
      {/* <div id="leftnav">
          <img id="camper" src={camper}/>
        </div> */}
      <div id="rightnav">
        <Link class="rightnav-a" to="/mainpage">
          home
        </Link>
        <Link class="rightnav-a" to="/destinations">
          destinations
        </Link>
        <Link class="rightnav-a" to="/journey">
          journey
        </Link>
        <Link class="rightnav-a" to="/shop">
          shop
        </Link>
        <Link class="rightnav-a" to="/login">
          login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
