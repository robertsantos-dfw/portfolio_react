import React from "react";
import "../styles/Styles.css";

export default function Masthead() {
  return (
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Software Enthusiast</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            Skilled Technical Product Manager who builds Impactful and Insightful Software.{" "}
          </h2>
        </div>
      </div>
    </header>
  );
}
