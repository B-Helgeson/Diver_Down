import React, { Component } from "react";

class newLog extends Component {

render() {
    return (
      <div>
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1 cd1">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img src="assets/img/user-default.png" alt className="circle responsive-img" /> {/* notice the "circle" class */}
            </div>
            <div className="col s10">
              <span className="black-text">
                <p>Location: Cancun, Mexico</p>
                <p>Max Depth: 55 ft</p>
                <p>Time: 1 hours 30 mins</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Post 2 */}
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1 cd2">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img src="assets/img/user-default.png" alt className="circle responsive-img" /> {/* notice the "circle" class */}
            </div>
            <div className="col s10">
              <span className="black-text">
                <p>Location: Lauderdale, FL</p>
                <p>Max Depth: 33 ft</p>
                <p>Time: 2 hours 15 mins</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Post 3 */}
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1 cd3">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img src="assets/img/user-default.png" alt className="circle responsive-img" /> {/* notice the "circle" class */}
            </div>
            <div className="col s10">
              <span className="black-text">
                <p>Location: Great Barrier Reef, Aus</p>
                <p>Max Depth: 95 ft</p>
                <p>Time: 1 hours 10 mins</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }}

export default newLog;
