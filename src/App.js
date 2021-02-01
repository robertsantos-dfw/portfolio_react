import React from "react";
import './styles/Styles.css';
import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Masthead />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
