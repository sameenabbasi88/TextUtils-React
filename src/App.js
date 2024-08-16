
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./Alert";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0f003e";
      showAlert("dark mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enable", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="React Practise" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/"  element={
                <TextForm showAlert={showAlert} heading="enter your text here"  mode={mode} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
