import React from "react";
import "./benifit.scss";
import Button from "../../global/button/Button";
const Benifit = () => {
  return (
    <section className="benefit">
      <div className="container">
        <div className="benefit-content">
          {/* title box  */}
          <div className="benifit-title-box">
            <h2>Our Benefits</h2>
            <h2>Hear What They Say About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Scelerisque consectetur
              velit sed magna phasellus metus.
            </p>
          </div>
          {/* card  */}
          <div className="benifit-card-container">
            <div className="cards">
              <div className="card">
                <div className="check-button">
                  <i class="ri-checkbox-line"></i>
                </div>
                <div className="card-info">
                  <h3>Free Consultation</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="card">
                <div className="check-button">
                  <i class="ri-checkbox-line"></i>
                </div>
                <div className="card-info">
                  <h3>Security On A Global Scale</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="card">
                <div className="check-button">
                  <i class="ri-checkbox-line"></i>
                </div>
                <div className="card-info">
                  <h3>Trusted Security</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="card">
                <div className="check-button">
                  <i class="ri-checkbox-line"></i>
                </div>
                <div className="card-info">
                  <h3>Certified Professional</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="card">
                <div className="check-button">
                  <i class="ri-checkbox-line"></i>
                </div>
                <div className="card-info">
                  <h3>24/7 Premium Support</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="card">
                <div className="check-button">
                  <i class="ri-checkbox-line"></i>
                </div>
                <div className="card-info">
                  <h3>4.8+ Rating</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          {/* certificate  */}
          <div className="certificate">
            <div className="certificate-title">
              <h2>Our Certifications</h2>
            </div>
            <div className="certificate-subjects">
              <div className="subject">
                <img
                  src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Group-1000002910.png"
                  alt=""
                />
              </div>
              <div className="subject">
                <img
                  src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Group-1000003033.png"
                  alt=""
                />
              </div>
              <div className="subject">
                <img
                  src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/logoipsum-233.png"
                  alt=""
                />
              </div>
              <div className="subject">
                <img
                  src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Group-1000002909.png"
                  alt=""
                />
              </div>
              <div className="subject">
                <img
                  src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/logoipsum-231.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* confuzed bottom
           */}
          <div className="confuzed">
            <div className="confuzed-info">
              <h2>
                Still Confused About Our Features? Get A Free Trial 7 Days
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <Button text="Learn More"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benifit;
