import React from "react";
import Button from "../../global/button/Button";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-top-content">
            <div className="footer-top-left">
              <div className="title-box">
                <div className="title">
                  <h2>Our Latest News</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="title-button">
                  <Button text="View All" />
                </div>
              </div>
              <div className="title-container">
                <div className="title-image">
                  <img
                    src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/blog-1-1-1.jpg"
                    alt=""
                  />
                </div>
                <div className="title-image-title">
                  <h2>Lorem Ipsum Dolor Sit Amet Consectetur.</h2>
                  <span>January 10, 2024</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Eget quam proin
                    consectetur. Lorem ipsum dolor sit amet consectetur. Eget
                    quam proin consectetur.
                  </p>
                  <Button text="Read More" className="footer-button" />
                </div>
              </div>
            </div>
            <div className="footer-top-right">
              <div className="title-container">
                <div className="title-image">
                  <img
                    src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/blog-2-2.jpg"
                    alt=""
                  />
                </div>
                <div className="title-image-title">
                  <h2>Lorem Ipsum Dolor Sit Amet Consectetur.</h2>
                  <span>January 10, 2024</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Eget quam proin
                    consectetur. Lorem ipsum dolor sit amet consectetur. Eget
                    quam proin consectetur.
                  </p>
                  <Button text="Read More" className="footer-button" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-content"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
