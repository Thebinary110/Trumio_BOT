import React from "react";

//INTERNAL IMPORT
import { Login, SignUp } from "../Components/Auth/index";

const login = () => {
  return (
    <div>
      <section class="login-section">
        <a href="/">
          <img src="assets/images/logo.svg" class="img-fluid logo-auth" />
        </a>
        <div class="row m-0">
          <div class="col-lg-7 d-lg-inline-block d-none p-0">
            <div class="login-animation">
              <img
                src="assets/svg/auth/1.svg"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
                class="img-fluid img-base"
                alt=""
              />
              <img
                src="assets/svg/auth/2.svg"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
                class="img-fluid img-light"
                alt=""
              />
              <div
                class="img-face"
                data-aos-delay="2500"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <img src="assets/svg/auth/3.svg" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-lg-5 ms-auto p-0">
            <div class="login-box">
              <div>
                <h2>
                  Welcome to <span>Megabot !</span>
                </h2>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="login-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#login-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="login-tab-pane"
                      aria-selected="true"
                    >
                      Login
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="signup-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#signup-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="signup-tab-pane"
                      aria-selected="false"
                    >
                      signup
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <Login />
                  <SignUp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;
