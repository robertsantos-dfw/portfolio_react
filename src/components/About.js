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
            My career over the last 10 years has been dedicated to working with SaaS platforms and B2B businesses. I have primarily worked with startup companies in the document management and vaccine management spaces. 
            </p>
            <p className="text-white mb-4">
            Education has played a critical role in my development. With certifications in Product Management and Full Stack Web Development from the University of Texas and Southern Methodist University, respectively, I’ve continually sought to stay ahead of industry trends and best practices. These programs deepened my knowledge of agile methodologies, UX/UI design principles, and modern software development techniques.
            </p>
            <p className="text-white mb-4">
            Today, I am dedicated to leveraging my expertise as a Technical Product Manager to create products that not only meet market demands but also delight users. I believe in the power of empathy, continuous learning, and innovation to drive success. I’ve honed my skills in driving product strategy, managing cross-functional teams, and ensuring that every product meets and exceeds customer expectations. My experience spans various industries, but my focus has always been on creating solutions that address real user needs and deliver tangible value.
            </p>
            <p className="text-white mb-4">
              Major strengths are Product Development, Process Improvement, User-Centered Design, Agile and Scrum Methodologies, Relationship Management,
              Software Implementation, Problem Solving, Product Ownership, and Leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
