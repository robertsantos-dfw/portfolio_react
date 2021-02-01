import React from "react";

export default function Contact() {
  return (
    <div>
      <section class="contact-section bg-black" id="contact">
        <div class="container ">
          <div class="row ">
            <div class="col-md-3 mb-3 mb-md-0 ">
              <div class="card py-4 h-100 ">
                <div class="card-body text-center ">
                  <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">GitHub</h4>
                  <hr class="my-4" />
                  <div class="small text-black-50">
                    <a href="https://github.com/robertsantos-dfw">
                      github.com/robertsantos-dfw
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-envelope text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Email</h4>
                  <hr class="my-4" />
                  <div class="small text-black-50">
                    <a href="mailto:robertsantos.dfw@gmail.com">
                      robertsantos.dfw@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Phone</h4>
                  <hr class="my-4" />
                  <div class="small text-black-50">
                    <a href="tel:214-276-4650">(214) 276-4650</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fab fa-linkedin-in text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">LinkedIn</h4>
                  <hr class="my-4" />
                  <div class="small text-black-50">
                    <a href="https://www.linkedin.com/in/robert-santos-12512169/">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
