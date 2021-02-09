import React from "react";
import Resume from "../assets/Resume.pdf";

export default function Footer() {
  return (
    <footer className="footer fixed-bottom bg-black small text-center text-white">
      <div class="social d-flex justify-content-center">
        <a
          class="mx-2"
          href="https://www.linkedin.com/in/robert-santos-12512169/"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a class="mx-2" href="https://github.com/robertsantos-dfw/">
          <i class="fab fa-github"></i>
        </a>
        <a
          class="mx-2"
          href="https://stackoverflow.com/users/14396954/robertsantos-dfw"
        >
          <i class="fab fa-stack-overflow"></i>
        </a>
        <a class="mx-2" href={Resume} download>
          <i class="fas fa-file-download"></i>
        </a>
      </div>
    </footer>
  );
}
