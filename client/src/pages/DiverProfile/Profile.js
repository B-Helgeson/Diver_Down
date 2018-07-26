import React, { Component } from "react";

class newLog extends Component {

render() {
    return (
      <div>
      {/* Top Parallax Image */}
      <div className="parallax-container">
        <div className="parallax"><img src="assets/img/login1.jpg" /></div>
      </div>
      {/* Profile Image */}
      <div className="row" />
      <img className="responsive-img circle" src="assets/img/user-default.png" />
      {/* Overall Info: Name, Highest Cert, Country, M/F, */}
      <div className="row">
      </div>
      {/* Dive Stats: Total # of Dives, Max Depth, Certs, Total Logged Hours */}
      <div className="row">
        <blockquote>
          This is an example quotation that uses the blockquote tag.
          Javascript to generate stats in this box
        </blockquote>
      </div>
      {/* Dive Log History/Summary: Pic, Name, Location, Etc */}
      <div className="row">
        Dive Logs go here!
      </div>
    </div>
    );
  }
}

export default newLog;
