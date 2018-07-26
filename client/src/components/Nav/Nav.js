import React from "react";

const Nav = () => (
  <div>
        {/* Floating Action Button and SideNav Menu */}
        <ul id="slide-out" className="sidenav">
          <li><div className="user-view">
              <div className="background">
                <img src="assets/img/bubbles.jpg" alt="bubbles"/>
              </div>
              <a href="#user"><img src="assets/img/user-default.png" alt="default" style={{maxHeight: 200}} /></a>
              <a href="#name"><span className="white-text name navOverlay">John Doe</span></a>
              <a href="#email"><span className="white-text email navOverlay">jdandturk@gmail.com</span></a>
            </div></li>
          <li><a href="#!">View Log Book</a></li>
          <li><div className="divider" /></li>
          <li><a className="subheader">Menu</a></li>
          <li>
            <a className="waves-effect" href="#!">Add a Dive Log</a></li>
          <li><a href="#!"><i className="material-icons">person</i>Edit Profile</a></li>
        </ul>
        <a href="111" data-target="slide-out" className="sidenav-trigger btn-floating btn-large waves-effect waves-light blue"><i className="material-icons">menu</i></a>
  </div>
);

export default Nav;
