import React, { useEffect } from "react";
import "./feature.scss";
import "aos/dist/aos.css";
import Button from "../../global/button/Button";
import AOS from "aos";
const Feature = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease',
      delay: 100,
    });
  }, []);
  return (
    <section className="feature" id="feature">
      <div className="container">
        <div className="feature-content">
          <div className="feature-container">
            <div className="feature-parg-1">
              <div className="feature-info">
                <h2>Our Features</h2>
                <h2>Who We’ve Worked With</h2>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Scelerisque
                    consectetur velit sed magna phasellus metus. Ultricies
                    volutpat eget sit orci eu convallis morbi.
                  </p>
                  <Button text="View All" className="feature-btn" />
                </div>
              </div>
            </div>
            <div className="feature-parg-2">
              <div className="feature-slider-container">
                <div className="slider-buttons">
                  <i class="ri-arrow-left-s-line"></i>
                  <i class="ri-arrow-right-s-line"></i>
                </div>
                <div className="feature-slide">
                  <div className="img">
                    <img
                      src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/feature-img-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="slider-info">
                    <h3>Protect Your Privacy</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Scelerisque
                      consectetur velit sed magna phasellus metus. Ultricies
                      volutpat eget sit orci eu convallis morbi.Lorem ipsum
                      dolor sit amet consectetur. Scelerisque consectetur velit
                      sed magna phasellus metus. Ultricies volutpat eget sit
                      orci eu convallis morbi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-down" className="feature-parg-3">
              <div className="feature-status">
                <h2>Our Stats</h2>
                <div className="status-box-container">
                  <div className="status-box">
                    <h1>4,400</h1>
                    <p>Clients in 55+ Countries</p>
                  </div>
                  <div className="status-box">
                    <h1>250B</h1>
                    <p>Security Events Processed Daily</p>
                  </div>
                  <div className="status-box">
                    <h1>3,270</h1>
                    <p>Predicted Loss due to hacks</p>
                  </div>
                  <div className="status-box">
                    <h1>1,197</h1>
                    <p>Efficiency of the confrontation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
