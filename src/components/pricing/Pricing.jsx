import React from "react";
import './pricing.scss';
import Button from "../../global/button/Button";
const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing-content">
          <div className="pricing-title-box">
            <h2>Pricing Plan</h2>
            <h2>Pricing Plan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="price-card-container">
            <div className="price-card">
              <div className="premium">
                <button>Basic</button>
              </div>
              <div className="title">
                <h2>$99 / </h2>
                <h1>Month</h1>
              </div>
              <div className="info-btn"><Button text='Get Started' className='price-button'/></div>
              <ul>
                Details :
                <li>
                  <i class="ri-check-line"></i> Lorem ipsum dolor sit
                </li>
                <li>
                  <i class="ri-check-line"></i> Lorem ipsum sit
                </li>
                <li>
                  <i class="ri-check-line"></i> Lorem ipsum dolor sit
                </li>
                <li>
                  <i class="ri-check-line"></i> Lorem ipsum dolor lorem sit
                </li>
                <li>
                  <i class="ri-check-line"></i> Lorem ipsum dolor sit
                </li>
              </ul>
            </div>
            <div className="price-card" >
              <div className="premium">
                <button>Premium</button>
              </div>
              <div className="title">
                <h2>$99 / </h2>
                <h1>Month</h1>
              </div>
              <div className="info-btn"><Button text='Get Started' className='price-button yellowborder'   /></div>
              <ul>
                Details :
                <li>
                  <i class="ri-check-line"></i> Lorem ipsum dolor sit
                </li>
                <li>
                  <i class="ri-check-line"></i> Lorem ipsum sit
                </li>
                <li>
                  <i class="ri-check-line"></i> Lorem ipsum dolor sit
                </li>
                <li>
                  <i class="ri-check-line"></i> Lorem ipsum dolor lorem sit
                </li>
                <li>
                  <i class="ri-check-line"></i> Lorem  dolor sit
                </li>
                <li>
                  <i class="ri-check-line"></i> Lorem ipsum lorem dolor sit
                </li>
                <li>
                  <i class="ri-check-line"></i> Lorem ipsum dolor lorem sit
                </li>
                <li>
                  <i class="ri-check-line"></i> Lorem ipsum dolor sit
                </li>
              </ul>
            </div>
            <div className="price-card">
              <div className="premium">
                <button>Special</button>
              </div>
              <div className="title">
                <h2>$99 / </h2>
                <h1>Month</h1>
              </div>
              <div className="info-btn"><Button text='Get Started' className='price-button'/></div>
              <ul>
                Details :
                <li>
                  <i class="ri-check-line"></i> Lorem ipsum dolor sit
                </li>
                <li>
                  <i class="ri-check-line"></i> Lorem ipsum sit
                </li>
                <li>
                  <i class="ri-check-line"></i> Lorem ipsum dolor sit
                </li>
                <li>
                  <i class="ri-check-line"></i> Lorem ipsum dolor lorem sit
                </li>
                <li>
                  <i class="ri-check-line"></i> Lorem ipsum dolor sit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
