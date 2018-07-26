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
      <div className="LogMainContainer header">
        <div className="container newLog z-depth-3">
          <div className="top row">
            <div>
              <h4 className="logHeaders">New Dive Log</h4>
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
              <div className="collapsible-header logHeaders"><i className="material-icons">assignment</i>Technical Details</div>
              <div className="collapsible-body row">
                <div className="col s3">
                  <strong>Pressure</strong>
                  <div className="input-field">
                    <input placeholder={3200} id="startPressure" type="number" className="validate" />
                    <label htmlFor="startPressure">Start PSI</label>
                  </div>
                  <div className="input-field">
                    <input placeholder={1100} id="endPressure" type="number" className="validate" />
                    <label htmlFor="endPressure">End PSI</label>
                  </div>
                  <div className="input-field">
                    <input disabled defaultValue={2100} id="airConsumption" type="number" className="validate" />
                    <label htmlFor="airConsumption">Air Consumption</label>
                  </div>
                </div>
                <div className="col s3">
                <strong>Max Depth</strong>
                  <div className="input-field">
                    <input placeholder={30} id="maxDepth" type="number" className="validate" />
                    <label htmlFor="maxDepth">feet</label>
                  </div>
                  <strong>Safety Stop</strong>
                  <div className="input-field">
                    <div className="switch">
                    <label>
                        no
                        <input type="checkbox" className="safetyStop"></input>
                        <span className="lever"></span>
                        yes
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col s3">
                  <strong>Water Temp</strong>
                    <div className="input-field">
                      <input placeholder={10} id="waterTemp" type="number" className="validate" />
                      <label htmlFor="waterTemp">°F</label>
                    </div>
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header logHeaders"><i className="material-icons">filter_drama</i>Dive Conditions</div>
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
                    <div className="input-field">
                      <select class="icons">
                        <option value="" disabled selected>Select</option>
                        <option value="Clear">Clear</option>
                        <option value="Rainy">Rainy</option>
                        <option value="Cold">Cold</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col s3">
                  <div className="row">
                    <strong>Weight Used</strong>
                    <div className="input-field">
                      <input placeholder={10} id="weightUsed" type="number" className="validate" />
                      <label htmlFor="weightUsed">lbs</label>
                    </div>
                  </div>
                  <div className="row">
                  <strong>Equipment Used</strong>
                    <div className="chips input-field">
                      <input className="input equipment" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header logHeaders"><i className="material-icons">people</i>Social Info</div>
              <div className="collapsible-body">
                <div className="col s3">
                  <div className="row">
                  <strong>Instructor / Dive Master</strong>
                    <div className="chips input-field">
                      <input className="input equipment" />
                    </div>
                  </div>
                  <div className="row">
                  <strong>Dive Buddies</strong>
                    <div className="chips input-field">
                      <input className="input equipment" />
                    </div>
                  </div>
                </div>
                <strong>Dive Notes / Comments</strong>
                <div class="row">
                  <form>
                    <div class="row">
                      <div class="input-field">
                        <textarea id="textarea1" class="materialize-textarea"></textarea>
                        <label for="textarea1">Textarea</label>
                      </div>
                    </div>
                  </form>
                </div>
                <strong>Upload Pictures</strong>
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
            <div className="logInputBtn">
              <button className="btn waves-effect waves-light" type="submit" name="action">Save
                <i className="material-icons right">send</i>
              </button>
            </div>
        </div>
      </div>
    );
  }}

export default newLog;
