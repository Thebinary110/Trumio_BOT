import React from "react";
import { MdDeleteSweep, MdPaid, MdSend } from "react-icons/md";
const Help = () => {
  return (
    <div
      class="tab-pane fade"
      id="help"
      role="tabpanel"
      aria-labelledby="help"
      tabindex="0"
    >
      <div class="main-wrapper p-0">
        <div class="fixed-header">
          <div class="d-flex align-items-center gap-2">
            <button
              class="navbar-toggler d-md-none d-block"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainnavbarNav"
              aria-controls="mainnavbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="iconsax" data-icon="text-align-justify"></i>
            </button>
            <a href="index.html" class="logo-icon d-flex d-md-none">
              <img src="assets/svg/logo-icon.svg" class="img-fluid" />
            </a>
            <h3>FAQ</h3>
          </div>
          <a class="premium-btn" data-cursor="pointer" href="">
            <i class="iconsax" data-icon="crown-2"></i>
            <MdPaid /> Get
            <span>premium</span>
          </a>
        </div>
        <div class="faq-section main-section">
          <div class="container card p-0">
            <div class="card-header">
              <h3
                class="text-white title-basic aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                FAQ
              </h3>
            </div>
            <div class="card-body px-sm-4 px-3">
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div
                  class="accordion-item aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button
                      data-cursor="pointer"
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Is the content unique?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div class="accordion-body">
                      <p>
                        Yes. The AI generates 95% of the material, which is
                        unique and creative. We also give a uniqueness score for
                        longer form material created, so you can be assured that
                        the stuff you got is unique.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="accordion-item aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button
                      data-cursor="pointer"
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      How can I boost my traffic with Copy matic?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div
                  class="accordion-item aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button
                      data-cursor="pointer"
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      How long would it take to write an article with AI?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree"
                  >
                    <div class="accordion-body">
                      <strong>This is the third item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div
                  class="accordion-item aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                    <button
                      data-cursor="pointer"
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFour"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFour"
                    >
                      Is it beneficial to a digital marketer or a content
                      writer?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFour"
                  >
                    <div class="accordion-body">
                      <strong>This is the third item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div
                  class="accordion-item aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                    <button
                      data-cursor="pointer"
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFive"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFive"
                    >
                      What languages do you support?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFive"
                  >
                    <div class="accordion-body">
                      <strong>This is the third item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div
                  class="accordion-item aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                >
                  <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                    <button
                      data-cursor="pointer"
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSix"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseSix"
                    >
                      Is there a limit to the amount of stuff I can create?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingSix"
                  >
                    <div class="accordion-body">
                      <strong>This is the third item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
