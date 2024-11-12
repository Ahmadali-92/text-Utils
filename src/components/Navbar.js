import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.tittle}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                {props.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About Us
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <div
              className="bg-success rounded mx-2"
              style={{ height: "15px", width: "15px", cursor: "pointer" }}
              onClick={() => {
                props.toogleMode("success");
              }}
            ></div>
            <div
              className="bg-secondary rounded mx-2"
              style={{ height: "15px", width: "15px", cursor: "pointer" }}
              onClick={() => {
                props.toogleMode("secondary");
              }}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              style={{ height: "15px", width: "15px", cursor: "pointer" }}
              onClick={() => {
                props.toogleMode("warning");
              }}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              style={{ height: "15px", width: "15px", cursor: "pointer" }}
              onClick={() => {
                props.toogleMode("danger");
              }}
            ></div>
            <div
              className="bg-light rounded mx-2"
              style={{
                height: "15px",
                width: "15px",
                cursor: "pointer",
                border: "1px solid black",
              }}
              onClick={() => {
                props.toogleMode("light");
              }}
            ></div>
            <div
              className="bg-dark rounded mx-2"
              style={{
                height: "15px",
                width: "15px",
                cursor: "pointer",
                border: "1px solid white",
              }}
              onClick={() => {
                props.toogleMode("dark");
              }}
            ></div>
          </div>
          {/* <div
            className={`form-check form-switch me-3 text-${props.textColor}`}
          >
            <input
              // onClick={props.toogleMode}
              onClick={() => {
                props.toogleMode(null);
              }}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {/* {props.modeText} 
              Toogle Mode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
// agr koi cheez hamy zaror chahy a to isRequired lga do ziyada tr lgana pary ga
Navbar.propTypes = {
  tittle: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
};
// default props k liya
Navbar.defaultProps = { tittle: "default tittle", home: "default home" };
