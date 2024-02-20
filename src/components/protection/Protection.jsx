import React from "react";
import { Link } from "react-router-dom";
import "./protection.scss";

const Protection = () => {
  return (
    <section className="protection">
      <div className="container">
        <div className="protection-content">
          {/* left  */}
          <div className="protection-left">
            <div className="protection-left-container">
              <h1>Why Choose Us</h1>
              <h2>Maximum Protection For All Your Devices</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Scelerisque consectetur
                velit sed magna phasellus metus ultricies volutpa.
              </p>
              <div className="protection-card">
                <div className="p-box">
                  <div className="p-img">
                    <img
                      src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Group-1000003085.png"
                      alt=""
                    />
                  </div>
                  <div className="p-description">
                    <h2>Secure Your Business & Transactions</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <Link>
                      Get Info <i class="ri-arrow-right-s-line"></i>
                    </Link>
                  </div>
                </div>
                <div className="p-box">
                  <div className="p-img">
                    <img
                      src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Group-1000003085.png"
                      alt=""
                    />
                  </div>
                  <div className="p-description">
                    <h2>Secure Your Business & Transactions</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <Link>
                      Get Info <i class="ri-arrow-right-s-line"></i>
                    </Link>
                  </div>
                </div>
                <div className="p-box">
                  <div className="p-img">
                    <img
                      src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Group-1000003085.png"
                      alt=""
                    />
                  </div>
                  <div className="p-description">
                    <h2>Secure Your Business & Transactions</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <Link>
                      Get Info <i class="ri-arrow-right-s-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right  */}
          <div className="protection-righ">
            <div className="status-box">
              <h1>4,400</h1>
              <p>Clients in 55+ Countries</p>
            </div>
            <div className="box-right-img">
              <img
                src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/why-choose-2.jpg"
                alt=""
              />
            </div>
            <div className="last-p-img">
              <img
                src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/why-choose-1-1.jpg"
                alt=""
              />
            </div>
            <div className="emptycolor"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protection;
