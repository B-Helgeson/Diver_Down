import React from "react";

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
          <li><a className="waves-effect" href="/log">Add a Dive Log</a></li>
          <li><a href="/profile">View My Log Book</a></li>
          <li><div className="divider" /></li>
          <li><a className="subheader">Menu</a></li>
          <li><a href="/login">Home</a></li>
          <li><a href="/social">Social Page</a></li>
          <li><a href="/acct"><i className="material-icons">person</i>Edit Profile</a></li>
          <li><a href="/cert"><i className="material-icons">contact_mail</i>Edit Certifications</a></li>
        </ul>
        <a href="111" data-target="slide-out" className="sidenav-trigger btn-floating btn-large waves-effect waves-light blue"><i className="material-icons">menu</i></a>
  </div>
);

export default Nav;
