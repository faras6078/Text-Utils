import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      showAlert(null);
    }, 3000);
  };

  const togglehandle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar toggleMode={togglehandle} darkMode={mode} name="About" />
              <Alert alert={alert} />
            </div>
          }
        >
          <Route
            index
            element={
              <div className="container">
                <TextBox
                  Alert={showAlert}
                  header="Please write your text below"
                />
              </div>
            }
          />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
