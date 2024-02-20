import React from "react";
import "./status.scss";
const Status = () => {
  return (
    <section className="status">
      <div className="container">
        <div className="status-content">
          <div className="project-box">
            <h2>460 + Projects</h2>
            <p>Completed Over</p>
          </div>
          <div className="status-info">
            <h2>Our Stats</h2>
            <h2>Solutions For All The IT Issues</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Scelerisque consectetur
              velit sed magna phasellus metus.
            </p>
            <div className="status-cofon">
              <div>
                <div className="img">
                <img
                    src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Group-25.png"
                    alt=""
                  />
                </div>
                <h1>
                  Free <br />
                  Consultation
                </h1>
              </div>
              <div>
                <div className="img">
                <img
                    src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Group-24.png"
                    alt=""
                  />
                 
                </div>
                <h1>
                  Qualified <br /> Experts
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Status;
