import React, { useState } from "react";

export default function About(props) {
  //enable buuton wala theme tha
  // let [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // let [btnText, setBtnText] = useState("Enable Dark Mode");

  // let toggleStyle = () => {
  //   if (myStyle.color == "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnText("Enable Light Mode");
  //   }
  // };


  //Upper waly button k sah is ko bhi dark krny ka method
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor:props.mode === "dark" ? "black" : "white",
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <b>Analyze Your Text</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count,characters count or minutes read.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <b>Free To Use</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <b>Browser Compatible</b>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Browser Compatible.This word counter software works in any web
              browser such as chrome,firefox,interanet explorer,safari,opera
              etc...
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button> */}
    </div>
  );
}
