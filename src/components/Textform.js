import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  //text ="enter your text"  wrong way to change the state
  //   setText("enter your text")  update krna ho to is trha krty hn(correct way to change the state)
  const handleUpClick = () => {
    // console.log('click the upclicked '+text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    // console.log('click the upclicked '+text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to LowerCase", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showalert("Converted to Voice", "success");
  };

  const handleCapitalizedClick = () => {
    let newtext = text.split(" ");
    for (var i = 0; i < newtext.length; i++) {
      newtext[i] = newtext[i].charAt(0).toUpperCase() + newtext[i].slice(1);
    }
    let newtext2 = newtext.join(" ");
    setText(newtext2);
    console.log(newtext2);
    props.showalert("Converted to Capitalized", "success");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Copy to clipboard", "success");
  };

  const clear = () => {
    let text = "";
    setText(text);
    props.showalert("All Clear", "success");
  };

  const handleOnChange = (event) => {
    // console.log('click the onchanged');
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control "
            value={text}
            onChange={handleOnChange}
            style={props.colorGrading}
            id="mybox"
            rows="10"
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert UPPERCASE
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1"
          onClick={speak}
        >
          Convert speak
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCapitalizedClick}
        >
          Convert Capitalized
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1"
          onClick={copyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={clear}
        >
          Clear
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          <i>
            {
              text.split(/\s+/).filter((e) => {
                return e.length !== 0;
              }).length
            }
          </i>{" "}
          <b>WORD</b> and <i>{text.length} </i>
          <b>CHARACTERS</b> and{" "}
          <i>
            {0.008 *
              text.split(" ").filter((e) => {
                return e.length !== 0;
              }).length}{" "}
          </i>
          <b>MINUTES READ</b>
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview. . . . ."}</p>
      </div>
    </>
  );
}
