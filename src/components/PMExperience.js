import React from "react";
import "../styles/Styles.css";

function PMExperience() {
  return (
    <section className="pmexperience" id="pmexperience">
      <h1 className="text-white mb-4 text-center mx-auto"> Product Manager </h1>
      <div className="container">
        <img className="img-fluid" src="../assets/" alt="" />
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="text-white mb-4">
            The Art and Impact of Product Management: Insights from My Journey 
            </p>
            <p className="text-white mb-4">
            Product management involves more than managing a roadmap; it focuses on solving problems, delivering value, and creating seamless user experiences. My journey as a product manager has been driven by a passion for bridging the gap between technology and human needs. Over the past eight years, I have had the privilege of working on diverse projects that have challenged me and deepened my understanding of what it takes to develop exceptional products.
            </p>
            <p className="text-white mb-4">
            At Cleared4, I led the development of a SaaS platform that served over two million users. Through innovative API integrations, I enhanced the user onboarding process and improved data accuracy. Tackling technical challenges like optimizing workflows while adhering to strict compliance standards taught me the importance of collaboration, adaptability, and attention to detail. The results were impactful: a 28% reduction in support issues and increased user satisfaction.
            </p>
            <p className="text-white mb-4">
            My experience at YellowFolder further solidified my belief in user-centered design and iterative development. Managing a SaaS platform for the education sector, I worked closely with stakeholders to ensure compliance with regulations like HIPAA and FERPA. By fostering cross-functional collaboration and applying lean principles, I delivered solutions that streamlined workflows and improved production throughput by 35%. 
            </p>
            <p className="text-white mb-4">
            From my experiences, I have learned that effective product management needs both a strategic vision and a practical approach. It involves listening to users, analyzing data, and ensuring that technical teams are aligned with business objectives. Most importantly, it’s about creating products that not only meet but exceed user expectations, leaving a lasting impact on both users and organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PMExperience;
