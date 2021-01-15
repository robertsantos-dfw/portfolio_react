import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Masthead />
      <About />
      <Projects />
    </div>
  );
}

export default App;
