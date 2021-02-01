import React from "react";
import './styles/Styles.css';
import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Masthead />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
