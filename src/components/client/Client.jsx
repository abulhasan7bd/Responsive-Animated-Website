import React, { useEffect } from "react";
import "./client.scss";
import Button from "../../global/button/Button";
const Client = () => {
  useEffect(() => {}, []);
  return (
    <section className="feature" id="feature">
      <div className="container">
        <div className="feature-content">
          <div className="feature-container">
            <div className="feature-parg-1">
              <div className="feature-info">
                <h2>Testimonial</h2>
                <h2>What Our Client Says</h2>
                <div className="description">
                  <p>
                  Lorem ipsum dolor sit amet consectetur. Scelerisque consectetur velit sed magna phasellus metus. Ultricies volutpat eget sit orci eu convallis morbi.
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
                      src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/TESTIMONIAL-D.jpg"
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
            <div data-aos="fade-down" className="feature-parg-3-c">
              <div className="feature-status">
              
                <div className="status-box-container">
                  {/* <div className="status-box">
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
