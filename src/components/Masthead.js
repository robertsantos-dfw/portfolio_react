import React from "react";
import '../styles/MasterStyle.css';

export default function Masthead() {
  return (
    <header class="masthead">
      <div class="container d-flex h-100 align-items-center">
        <div class="mx-auto text-center">
          <h1 class="mx-auto my-0 text-uppercase">Full Stack Developer</h1>
          <h2 class="text-white-50 mx-auto mt-2 mb-5">
            A talented Junior Developer with excitment working on backend and
            middle-ware code.{" "}
          </h2>
          <a class="btn btn-primary js-scroll-trigger" href="#about">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
