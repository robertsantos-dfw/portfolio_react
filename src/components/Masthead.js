import React from "react";
import "../styles/Styles.css";

export default function Masthead() {
  return (
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Full Stack Developer</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            A talented Developer with excitment working on backend and
            middle-ware code.{" "}
          </h2>
        </div>
      </div>
    </header>
  );
}
