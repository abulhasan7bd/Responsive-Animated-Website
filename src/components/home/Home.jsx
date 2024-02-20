/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import React, { useEffect } from "react";
import "./home.scss";
import Button from "../../global/button/Button";
const Home = () => {
  useEffect(() => {
    const hembergerOpenModel = document.querySelector(".hemberger");
    const hemberbtn = document.querySelector(".menu");
    const remove = document.querySelector(".humberger-logo");
    const x = document.querySelector(".hemberger-listopen");
    let styleActive = document.querySelector(".dropdown-container-hemberger");
    let show = true;

    hemberbtn.addEventListener("click", () => {
      hembergerOpenModel.classList.toggle("active");
    });

    remove.addEventListener("click", () => {
      hembergerOpenModel.classList.toggle("active");
    });
    x.addEventListener("click", () => {
      if (show) {
        styleActive.style.height = "100%";
        show = false;
      } else if (!show) {
        styleActive.style.height = "0%";
        show = true;
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 500 && hembergerOpenModel) {
        hembergerOpenModel.classList.remove("active");
      }
    });
    window.addEventListener("scroll", (e) => {
      hembergerOpenModel.classList.remove("active");
    });
  });

  return (
    <section className="home" id="home">
      <div className="container">
        <div className="home__content">
          {/* navbar  */}
          <nav>
            <div className="nav__logo">
              <img
                src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Cybbor-logo-1.png"
                alt="Navbar Logo"
              />
            </div>
            <div className="nav__links">
              {/* mubail menu  */}
              <div className="menu">
                <i className="ri-menu-line"></i>
              </div>

              {/* nav links  */}
              <ul>
                <li>
                  <a href="#" className="active">
                    home
                  </a>
                </li>
                <li>
                  <a href="#">about</a>
                </li>
                <li>
                  <a href="#">service</a>
                </li>
                <li>
                  <a href="#">blog</a>
                </li>
                <li>
                  <a href="#">
                    pages <i class="ri-arrow-down-s-line"></i>
                  </a>
                  <div className="dropdown-container">
                    <ul>
                      <li>Home 1</li>
                      <li>Home 1</li>
                      <li>Home 1</li>
                      <li>Home 1</li>
                      <li>Home 1</li>
                      <li>Home 1</li>
                      <li>Home 1</li>
                      <li>Home 1</li>
                      <li>Home 1</li>
                    </ul>
                  </div>
                </li>
              </ul>

              {/* humberger  */}
              <div className="hemberger">
                <div className="humberger-logo">
                  <div className="img">
                    <img
                      src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Cybbor-logo-1.png"
                      alt="Navbar Logo"
                    />
                  </div>
                  <div className="crose">
                    <i class="ri-close-fill"></i>
                  </div>
                </div>
                <div className="userList">
                  <li>
                    <a href="#" className="active">
                      home
                    </a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li>
                    <a href="#">service</a>
                  </li>
                  <li>
                    <a href="#">blog</a>
                  </li>
                  <li className="hemberger-listopen">
                    <a href="#">
                      pages <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <div className="dropdown-container-hemberger">
                      <ul>
                        <li>Home 1</li>
                        <li>Home 1</li>
                        <li>Home 1</li>
                        <li>Home 1</li>
                        <li>Home 1</li>
                        <li>Home 1</li>
                        <li>Home 1</li>
                        <li>Home 1</li>
                        <li>Home 1</li>
                      </ul>
                    </div>
                  </li>
                </div>
              </div>
              <div className="button">
                <Button className="nav__button" text="Get Started" />
              </div>
            </div>
          </nav>
          {/* header  */}
          <header>
            <h2>Protect Your Online Privacy</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Scelerisque consectetur
              velit sed magna phasellus metus. Ultricies volutpat eget sit orci
              eu convallis morbi.
            </p>
            <div className="button">
              <Button className="nav__button" text="Learn More" />
            </div>
          </header>
          {/* header bottom content  */}
          <div className="header__bottom">
            <div className="header-info">
              <div className="h-i-1">
                <div className="h-i-1-img">
                  <img
                    src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Group-1000003095.png"
                    alt=""
                  />
                </div>
                <div>
                  <h2>
                    Neural <br /> Network
                  </h2>
                  <a href="#">
                    Get Info <i class="ri-arrow-right-s-line"></i>
                  </a>
                </div>
              </div>
              <div className="h-i-1">
                <div className="h-i-1-img">
                  <img
                    src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Group-1000003096.png"
                    alt=""
                  />
                </div>
                <div>
                  <h2>
                    Anomaly <br />
                    Detectiony
                  </h2>
                  <a href="#">
                    Get Info <i class="ri-arrow-right-s-line"></i>
                  </a>
                </div>
              </div>
              <div className="h-i-1">
                <div className="h-i-1-img">
                  <img
                    src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Group-1000003097.png"
                    alt=""
                  />
                </div>
                <div>
                  <h2>
                    API <br /> Security
                  </h2>
                  <a href="#">
                    Get Info <i class="ri-arrow-right-s-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
