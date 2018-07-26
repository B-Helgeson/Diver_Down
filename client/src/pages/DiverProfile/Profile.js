import React, { Component } from "react";

class newLog extends Component {

render() {
    return (
      <div>
      {/* Top Parallax Image */}
      <div className="parallax-container">
        <div className="parallax"><img src="assets/img/sampledive4.jpg" /></div>
      </div>
      {/* Profile Image */}
      <div className="row" />
      <img className="responsive-img circle" src="assets/img/BrandonProfile.JPG" />
      {/* Overall Info: Name, Highest Cert, Country, M/F, */}
      <div className="row">
        <p>Name: Brandon Helgeson</p>
        <p>Highest Cert: Advanced Open Water Diver</p>
        <p>Country: USA</p>
      </div>
      {/* Dive Stats: Total # of Dives, Max Depth, Certs, Total Logged Hours */}
      <div className="row">
        <blockquote>
          <p>Total Dives: 30</p>
          <p>Record Depth: 120 ft</p>
          <p>Hours Logged: 56</p>
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
