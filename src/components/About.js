import React from "react";
import '../styles/Styles.css';


function About() {
  return (
    <section className="about" id="about">
        <h1 className="text-white mb-4 text-center mx-auto"> About</h1>
      <div className="container">
        <img
          className="img-fluid"
          src="../assets/"
          alt=""
        />
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {/* <h2 className="text-white mb-4">
              What has Robert Santos done in his past?
            </h2> */}
            <p className="text-white mb-4">
              A talented and decisive leader with 15 years of managerial
              experience including client relations, technical support,
              administrative and business processing for Sales, Support, and
              Development departments. Proven capability to develop, and
              execute, strategic and long-range operational objectives in an IT
              Systems/Development role. Major strengths are project management,
              relationship management, software implementation, problem
              solving/troubleshooting, multi-tasking, and data analysis.
            </p>
            <p className="text-white mb-4">
              I love working with customers and technology. Putting those two
              together, collaborating with teams, and implementing software is a
              passion that I've grown into. At times it feels I'm not really
              working but doing something I love.
            </p>
            <p className="text-white mb-4">
              Very passionate about learning new software and how it can improve
              someone's life or makes processes much more efficient.
              Streamlining processes is also a nice perk with the right tools
              and with the right people behind them.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
