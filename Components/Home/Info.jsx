import React from "react";
import { BsArrowClockwise } from "react-icons/bs";
const Info = () => {
  return (
    <section class="info-section section-b-space">
      <div class="container">
        <div
          class="info-box"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div class="hand-effect d-md-block d-none">
            <img
              src="assets/svg/hand.svg"
              class="img-fluid left-hand"
              alt="hand"
            />
            <img
              src="assets/svg/hand.svg"
              class="img-fluid right-hand"
              alt="hand"
            />
          </div>
          <h2>
            Ready to
            <span>
              move
              <img
                src="assets/svg/title-effect.svg"
                class="img-fluid"
                alt="title-effect"
              />
            </span>
            ahead?
          </h2>
          <p>
            With the help of our ground-breaking AI tool, unlock the potential
            of cutting-edge AI technology and increase your productivity to new
            heights. Embrace the future today and let our AI tool redefine
            what's possible for you.
          </p>
          <ul>
            <li>
              <img src="assets/svg/tick.svg" class="img-fluid" alt="tick" />
              Free images for lifetime
            </li>
            <li>
              <img src="assets/svg/tick.svg" class="img-fluid" alt="tick" />
              Get details on any topic
            </li>
            <li>
              <img src="assets/svg/tick.svg" class="img-fluid" alt="tick" />
              Quick advisor to help you
            </li>
            <li>
              <img src="assets/svg/tick.svg" class="img-fluid" alt="tick" />
              15+ category to explore
            </li>
          </ul>
          <a data-cursor="pointer" class="btn-arrow" href="">
            <div class="icon-arrow">
              <BsArrowClockwise />
            </div>
            Contact us now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Info;
