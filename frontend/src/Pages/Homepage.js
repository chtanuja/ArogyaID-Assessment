import React from "react";
import Header from "../Components/Header.js";

const Homepage = () => {
  return (
    <div>
      <Header showButtons={true} />
      {/* <div className="grid-container">
        <h1>National Healthcare Providers Registry</h1>
        <div className="sections">
          <div className="section">
            <h4>Healthcare</h4>
            <h2> Professionals Registry (HPR)</h2>
            <p>
              A comprehensive repository of registered and verified different
              systems of medicines...
            </p>
            <a href="#">Read more</a>
          </div>
          <div className="section">
            <h4>Healthcare</h4>
            <h2> Professionals Registry (HPR)</h2>
            <p>
              A comprehensive repository of registered and verified different
              systems of medicines...
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div> */}
      <div class="background-image">
        <h1 class="big-heading">National Healthcare Providers Registry</h1>
        <div class="columns">
          <div class="column">
            <div class="line line-heading">Healthcare</div>
            <div class="line registry-type">Professional Registry</div>
            <div class="line registry-detail">
              Healthcare Professionals Registry (HPR) is a comprehensive
              repository of registered and verified different system of
              medicines (Modern medicine, Dentistry, Ayurveda, Unani, Siddha,
              Sowa-Rigpa, Homeopathy) and Nurses practitioners delivering
              healthcare services across India.
            </div>
            <div class="line orange">
              <a href="#">Read more</a>
            </div>
          </div>
          <div class="column">
            <div class="line line-heading">Health</div>
            <div class="line registry-type">Facility Registry</div>
            <div class="line registry-detail">
              Health Facility Registry is a comprehensive repository of health
              facilities of the country across modern and traditional systems of
              medicine. It includes both public and private health facilities
              including hospitals, clinics, diagnostic
            </div>
            <div class="line orange">
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
