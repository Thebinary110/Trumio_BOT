import React from "react";
import { FaVideo, FaStar } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section class="home-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="home-content">
              <div class="bg-effect">
                <img
                  src="assets/images/home/home-bg.gif"
                  class="img-fluid bg-gif"
                  alt=""
                />
                <img
                  src="assets/svg/home/1.png"
                  class="img-fluid effect1 rotate-effect"
                  alt=""
                />
                <img
                  src="assets/svg/home/2.svg"
                  class="img-fluid effect2 rotate-effect"
                  alt=""
                />
              </div>
              <div>
                <h1>
                  USE MEGABOT TO
                  <div class="title-effect">
                    <img src="assets/images/title-effect.png" alt="" />
                    <span>SIMPLIFY</span>
                  </div>
                  YOUR LIFE
                </h1>
                <p>
                  Megabot is a robust AI tool that uses artificial intelligence
                  algorithms to generate various kinds of content. The tool was
                  developed to support users with effortlessly generating
                  high-quality content, saving both energy and time while
                  maintaining an uninterrupted level of creativity and accuracy.
                </p>
                <a data-cursor="pointer" class="start-link">
                  <FaVideo />
                  Start free trial
                </a>
              </div>
            </div>
            <div class="home-laptop px-md-0 px-3">
              <div class="laptop-sec position-relative">
                <div class="hand-sec">
                  <img
                    src="assets/images/home/hand.png"
                    class="img-fluid left-hand"
                    alt="hand"
                  />
                  <img
                    src="assets/images/home/hand.png"
                    class="img-fluid right-hand"
                    alt="hand"
                  />
                  <img
                    src="assets/images/home/finger.png"
                    class="img-fluid left-finger"
                    alt="hand"
                  />
                  <img
                    src="assets/images/home/finger.png"
                    class="img-fluid right-finger"
                    alt="hand"
                  />
                </div>
                <img
                  src="assets/images/home/laptop.png"
                  class="img-fluid laptop-img"
                  alt="laptop"
                />
              </div>
              <div class="home-info">
                <ul class="info-list">
                  <li>Ask anything</li>
                  <li>Generate image</li>
                  <li>Translate anything</li>
                </ul>
                <ul class="star-rating">
                  {[1, 2, 3, 4, 5].map((el, i) => (
                    <li>
                      <FaStar />
                    </li>
                  ))}
                </ul>
                <h4>
                  A technique to write all of your material 10 times more
                  quickly.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
