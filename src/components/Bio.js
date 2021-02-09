import React from "react";
import "../styles/Styles.css";

function About() {
  return (
    <section className="about" id="about">
      <h1 className="text-white mb-4 text-center mx-auto"> About</h1>
      <div className="container">
        <img className="img-fluid" src="../assets/" alt="" />
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="text-white mb-4">
              Full Stack Developer with hands-on knowledge and experience with
              front/back-end development technologies, libraries, and
              frameworks.
            </p>
            <p className="text-white mb-4">
              Experience within a DevOps environment using Agile methodology to
              manage progress, collaboration with stakeholders, and continuous
              improvements. Utilizing products such as JIRA and GitHub Kanbans
              to track stages, test, deployment, and ownership throughout
              sprints.
            </p>
            <p className="text-white mb-4">
              Five plus years managing and improving the software implementation
              process for SaaS products. Congregating project demands within the
              operations team to project resources, refining customer needs, and
              working with Customer Success team to boost customer lifetime
              value.
            </p>
            <p className="text-white mb-4">
              Major strengths are project management, relationship management,
              software implementation, problem solving/troubleshooting,
              multi-tasking, databases, and data analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
