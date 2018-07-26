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
        <div className="container newLog #e3f2fd blue lighten-5 z-depth-3">
        <h2>Certifications</h2>
          <div className="top row">
            <div>
              <h4 style={{textAlign: 'center', backgroundColor: 'white'}}>New Dive Log</h4>
            </div>
            <div className="col s6">
              <div className="input-field">
                <input placeholder="Shark Dive" id="dive_title" type="text" className="validate" />
                <label htmlFor="dive_title">Title</label>
              </div>
              <div className="input-field">
                <input id="startDate" placeholder="Start Date" type="text" className="datepicker" />
                <input id="startTime" placeholder="Start Time" type="text" className="timepicker" />
              </div>
            </div>
            <div className="col s6">
              <div className="input-field">
                <input placeholder="Bahamas" id="dive_title" type="text" className="validate" />
                <label htmlFor="dive_title">Location</label>
              </div>
              <div className="input-field">
                <input id="endDate" placeholder="End Date" type="text" className="datepicker" />
                <input id="endTime" placeholder="End Time" type="text" className="timepicker" />
              </div>
            </div>
          </div>
          <ul className="collapsible">
            <li className="active">
              <div className="collapsible-header"><i className="material-icons">assignment</i>Technical Details</div>
              <div className="collapsible-body row">
                <div className="col s3">
                  <strong>Pressure</strong>
                  <div className="input-field">
                    <input placeholder={3200} id="startPressure" type="number" className="validate" />
                    <label htmlFor="startPressure">Start Pressure</label>
                  </div>
                  <div className="input-field">
                    <input placeholder={1100} id="endPressure" type="number" className="validate" />
                    <label htmlFor="endPressure">End Pressure</label>
                  </div>
                  <div className="input-field">
                    <input disabled defaultValue={2100} id="airConsumption" type="number" className="validate" />
                    <label htmlFor="airConsumption">Consumption</label>
                  </div>
                </div>
                <div className="col s3">
                  Depth
                </div>
                <div className="col s3">
                  Water Temp, SAC
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header"><i className="material-icons">filter_drama</i>Dive Conditions</div>
              <div className="collapsible-body row">
                <div className="col s3">
                  <div className="row">
                    <strong>Visibility</strong>
                    <form action="#">
                      <p className="range-field">
                        <input type="range" id="visVal" min={5} max={100} />
                      </p>
                      <span id="visCalc">good</span>
                    </form>
                  </div>
                  <div className="row">
                    <strong>Current</strong>
                    <form action="#">
                      <p className="range-field">
                        <input type="range" id="CurrVal" min={5} max={100} />
                      </p>
                      <span id="CurrCalc">good</span>
                    </form>
                  </div>
                </div>
                <div className="col s3">
                  <div className="row">
                    <strong>Salinity</strong> <br /> <br />
                    <label>
                      <input className="with-gap" name="group1" type="radio" />
                      <span>Salt Water</span>
                    </label>
                    <label>
                      <input className="with-gap" name="group1" type="radio" />
                      <span>Fresh Water</span>
                    </label>
                  </div>
                  <div className="row">
                    <strong>Weather</strong>
                  </div>
                </div>
                <div className="col s3">
                  <div className="row">
                    Weight
                  </div>
                  <div className="row">
                    Equipment
                    <div className="chips input-field">
                      <input className="input equipment" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header"><i className="material-icons">people</i>Social Info</div>
              <div className="collapsible-body">
                <span>Instructor/DM, Dive Buddies, Notes, Pictures</span>
                <form action="#">
                  <div className="file-field input-field">
                    <div className="btn">
                      <span>File</span>
                      <input type="file" multiple />
                    </div>
                    <div className="file-path-wrapper">
                      <input className="file-path validate" type="text" placeholder="Upload one or more pictures" />
                    </div>
                  </div>
                </form>
              </div>
            </li>
          </ul>
        </div>
    );
  }}

export default newLog;
