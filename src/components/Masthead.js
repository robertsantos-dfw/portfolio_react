import React from "react";
import '../styles/Styles.css';

export default function Masthead() {
  return (
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Full Stack Developer</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            A talented Junior Developer with excitment working on backend and
            middle-ware code.{" "}
          </h2>
          <a className="btn btn-primary js-scroll-trigger" href="#about">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
