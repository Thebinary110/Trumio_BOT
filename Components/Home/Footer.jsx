import React from "react";
import { AiOutlineMinus } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="footer-row">
          <div class="footer-main">
            <a href="#" class="footer-logo">
              <img src="assets/images/logo.svg" class="img-fluid" alt="" />
            </a>
            <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
            <form>
              <div class="input-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your mail"
                />
                <a href="" data-cursor="pointer" class="btn-basic">
                  Subscribe
                </a>
              </div>
            </form>
            <ul class="social-links">
              <li>
                <a data-cursor="pointer" href="https://www.facebook.com/">
                  <img
                    src="assets/svg/social/fb.svg"
                    class="img-fluid"
                    alt="facebook"
                  />
                </a>
              </li>
              <li>
                <a data-cursor="pointer" href="https://in.linkedin.com/">
                  <img
                    src="assets/svg/social/linkedin.svg"
                    class="img-fluid"
                    alt="linkedin"
                  />
                </a>
              </li>
              <li>
                <a data-cursor="pointer" href="https://www.instagram.com/">
                  <img
                    src="assets/svg/social/insta.svg"
                    class="img-fluid"
                    alt="insta"
                  />
                </a>
              </li>
              <li>
                <a data-cursor="pointer" href="https://twitter.com/login">
                  <img
                    src="assets/svg/social/twitter.svg"
                    class="img-fluid"
                    alt="twitter"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div class="link-section">
            <div class="footer-title">
              <img src="assets/svg/star.svg" class="img-fluid" alt="star" />
              Quick Link
            </div>
            <div class="footer-content">
              <ul>
                <li>
                  <a data-cursor="pointer" href="index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a data-cursor="pointer" href="service.html">
                    Service
                  </a>
                </li>
                <li>
                  <a data-cursor="pointer" href="pricing.html">
                    Pricing
                  </a>
                </li>
                <li>
                  <a data-cursor="pointer" href="contact-us.html">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="link-section">
            <div class="footer-title">
              <img src="assets/svg/star.svg" class="img-fluid" alt="star" />
              Our service
            </div>
            <div class="footer-content">
              <ul>
                <li>
                  <a data-cursor="pointer" href="chat.html">
                    Generate
                  </a>
                </li>
                <li>
                  <a data-cursor="pointer" href="chat.html">
                    Find Image
                  </a>
                </li>
                <li>
                  <a data-cursor="pointer" href="chat.html">
                    Email writer
                  </a>
                </li>
                <li>
                  <a data-cursor="pointer" href="chat.html">
                    Social media
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="link-section">
            <div class="footer-title">
              <img src="assets/svg/star.svg" class="img-fluid" alt="star" />
              Our company
            </div>
            <div class="footer-content">
              <ul>
                <li>
                  <a data-cursor="pointer" href="login.html">
                    Login
                  </a>
                </li>
                <li>
                  <a data-cursor="pointer" href="blog-listing.html">
                    Blog listing
                  </a>
                </li>
                <li>
                  <a data-cursor="pointer" href="blog-grid.html">
                    Blog Grid
                  </a>
                </li>
                <li>
                  <a data-cursor="pointer" href="blog-details.html">
                    Blog Details
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <h4>@2023 All the Copyright Reserved.</h4>
          <ul class="footer-links">
            <li>
              <a href="terms.html">Privacy Policy </a>
            </li>
            <li>
              <a href="terms.html">Terms & Condition </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
