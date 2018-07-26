import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
        {/* Floating Action Button and SideNav Menu */}
        <ul id="slide-out" className="sidenav">
          <li><div className="user-view">
              <div className="background">
                <img src="assets/img/bubbles.jpg" alt="bubbles"/>
              </div>
              <a href="#user"><img src="assets/img/BrandonProfile.JPG" alt="default" style={{maxHeight: 200}} /></a>
              <a href="#name"><span className="white-text name navOverlay">Brandon Helgeson</span></a>
              <a href="#email"><span className="white-text email navOverlay">bshelgeson@gmail.com</span></a>
            </div></li>
          <li><Link to="/log" className="navLink waves-effect">Add a Dive Log</Link></li>
          <li><Link to="/profile" className="navLink">View My Log Book</Link></li>
          <li><div className="divider" /></li>
          <li><a className="subheader">Menu</a></li>
          <li><Link to="/login" className="navLink">Home</Link></li>
          <li><Link to="/social" className="navLink">Social Page</Link></li>
          <li><Link to="/acct" className="navLink"><i className="material-icons">person</i>Edit Profile</Link></li>
          <li><Link to="/cert" className="navLink"><i className="material-icons">contact_mail</i>Edit Certifications</Link></li>
        </ul>
        <a href="111" data-target="slide-out" className="sidenav-trigger btn-floating btn-large waves-effect waves-light blue"><i className="material-icons">menu</i></a>
  </div>
);

export default Nav;
