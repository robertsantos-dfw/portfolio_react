import React from "react";
import "../styles/Styles.css";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          Robert Santos
        </a>
        <NavDropdown title="Menu" id="basic-nav-dropdown navbarResponsive" >
          <NavDropdown.Item href="#about">About</NavDropdown.Item>
          <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
          <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
        </NavDropdown>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
