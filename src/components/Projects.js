import React from "react";
import '../styles/Styles.css';
import CoinFlip from "../assets/CoinFlip.png";
import weatherapp from "../assets/weatherapp.png";
import WorkDayScheduler from "../assets/WorkDayScheduler.gif";


function Projects() {
  return (
    <section class="projects-section bg-light" id="projects">
      <div class="container">
      <h1 className="text-dark mb-4 mt-0 text-center mx-auto">Projects</h1>
        <div class="row align-items-center no-gutters mb-4 mb-lg-5">
          <div class="col-xl-8 col-lg-7">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://robertsantos-dfw.github.io/CoinFlip_Recipe_Restaurant/"
            >
              <img
                class="img-fluid mb-3 mb-lg-0"
                src={CoinFlip}
                alt=""
              />
            </a>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="featured-text text-center text-lg-left">
              <h4>Cook or Dine (CoinFlip)</h4>
              <p class="text-black-50 mb-0">
                Cook or Dine (CoinFlip) was a group project where we came up
                with a solution of indecisive eating. The app would start with a
                page to flip a coin. Depending on how it lands, options for
                eating out or dining inn would be presented. Each option would
                have random recipes or restaurant options using 2 APIs with
                details of the random item. A bonus feature implemented was
                using geo location prompt to present local restaurants to the
                user.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Project One Row--> */}
        <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div class="col-lg-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://robertsantos-dfw.github.io/WeatherDashboard/"
            >
              <img class="img-fluid" src={weatherapp} alt="" />
            </a>
          </div>
          <div class="col-lg-6">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-left">
                  <h4 class="text-white">Weather Dashboard</h4>
                  <p class="mb-0 text-white-50">
                    This Weather Dashboard is a simple application that searches
                    weather forecast using an API ajax call to
                    OpenWeatherMap.com. The dashboard also uses local storage to
                    hold searches for past searches of cities.
                  </p>
                  <hr class="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Project Two Row--> */}
        <div class="row justify-content-center no-gutters">
          <div class="col-lg-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://robertsantos-dfw.github.io/05-DayPlanner/"
            >
              <img class="img-fluid" src={WorkDayScheduler} alt="" />
            </a>
          </div>
          <div class="col-lg-6 order-lg-first">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-right">
                  <h4 class="text-white">Note Taker</h4>
                  <p class="mb-0 text-white-50">
                    This application is simple, clean, easy to use and
                    undertand. You will be able to create new notes once you've
                    passed the "Get Started" page. This will take you to the
                    notes page where you can Create, Edit, and Delete notes.
                  </p>
                  <hr class="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
