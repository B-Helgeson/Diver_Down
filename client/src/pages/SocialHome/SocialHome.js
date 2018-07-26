import React, { Component } from "react";

class newLog extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

render() {
    return (
      <div>
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img src="assets/img/user-default.png" alt className="circle responsive-img" /> {/* notice the "circle" class */}
            </div>
            <div className="col s10">
              <span className="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Post 2 */}
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img src="assets/img/user-default.png" alt className="circle responsive-img" /> {/* notice the "circle" class */}
            </div>
            <div className="col s10">
              <span className="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Post 3 */}
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img src="assets/img/user-default.png" alt className="circle responsive-img" /> {/* notice the "circle" class */}
            </div>
            <div className="col s10">
              <span className="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }}

export default newLog;
