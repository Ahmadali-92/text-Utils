import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
import Alert from "./components/Alert";
//React router
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  const [mode, setMood] = useState("light");
  const [modeText, setmodeText] = useState("Dark Mode");
  const [textColor, settextColor] = useState("dark");
  const [colorGrading, setcolorGrading] = useState({
    backgroundColor: "light",
    color: "black",
  });
  const removeBgColor = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-danger");
  };

  const toogleMode = (cls) => {
    removeBgColor();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMood("dark");
      setmodeText("Light Mode");
      settextColor("light");
      setcolorGrading({
        backgroundColor: "#212020",
        color: "white",
      });
      document.body.style.backgroundColor = "#212020";
      document.body.style.color = "white";
      showalert("Dark mode has been enable", "success");
      // setInterval(() => {
      //   document.title='TextUtils is an amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title='Instal TextUtils Now   '
      // }, 1500);
    } else {
      setMood("light");
      setmodeText("Dark Mode");
      settextColor("dark");
      setcolorGrading({
        backgroundColor: "white",
        color: "black",
      });
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212529";
      showalert("Light mode has been enable", "success");
    }
  };

  //alert messege show
  const [alertMesage, setalertMesage] = useState("");
  const showalert = (messege, type) => {
    setalertMesage({
      messege: messege,
      type: type,
    });
    setTimeout(() => {
      setalertMesage("");
    }, 1500);
  };

  return (
    <>
      <Navbar
        tittle="TextUtils"
        home="Home Base"
        mode={mode}
        toogleMode={toogleMode}
        modeText={modeText}
        textColor={textColor}
      />
      <Alert alertMesage={alertMesage} />

      <div className="container my-3">
        <Textform
          heading="Try TextUtils - Word Counter, Character Counter"
          colorGrading={colorGrading}
          showalert={showalert}
        />

        {/* <About mode={mode} /> */}
      </div>
    </>
  );
}

export default App;

//is app.js k ander jo bhi ho ga jab ma terminal open karo ga to whi show ho ga .to mujy jab bhi server ma jna ho ga to ma app.js ma hi akr jaaun ga
