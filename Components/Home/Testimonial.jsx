import React from "react";

const Testimonial = () => {
  return (
    <section class="testimonial-section section-b-space">
      <div class="container">
        <div class="title-basic">
          <h2>Check out how much Megabot is loved by our users!</h2>
        </div>
        <div class="swiper testimonialSlider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-box">
                <div class="content-sec">
                  <div class="quote-img">
                    <img
                      src="assets/svg/quote.svg"
                      class="img-fluid outline-img"
                      alt=""
                    />
                    <img
                      src="assets/svg/quote-green.svg"
                      class="img-fluid fill-img"
                      alt=""
                    />
                  </div>
                  <p>
                    The quality of the generated text is impressive, and it
                    saves me so much time and effort. Highly recommended!
                  </p>
                </div>
                <div class="small-circle">
                  <span></span>
                </div>
                <div class="large-circle">
                  <span></span>
                </div>
                <div class="avtar-img">
                  <img
                    src="assets/images/user/1.jpg"
                    class="img-fluid"
                    alt="user"
                  />
                </div>
                <h4>Marvin McKinney</h4>
                <h5>Content writer</h5>
              </div>
            </div>
            <div
              class="swiper-slide"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div class="testimonial-box">
                <div class="content-sec">
                  <div class="quote-img">
                    <img
                      src="assets/svg/quote.svg"
                      class="img-fluid outline-img"
                      alt=""
                    />
                    <img
                      src="assets/svg/quote-green.svg"
                      class="img-fluid fill-img"
                      alt=""
                    />
                  </div>
                  <p>
                    As a marketer, I'm always looking for ways to streamline my
                    work. The AI Tool has been a fantastic addition to my
                    toolkit. It helps me come up with creative ideas!
                  </p>
                </div>
                <div class="small-circle">
                  <span></span>
                </div>
                <div class="large-circle">
                  <span></span>
                </div>
                <div class="avtar-img">
                  <img
                    src="assets/images/user/2.jpg"
                    class="img-fluid"
                    alt="user"
                  />
                </div>
                <h4>Marvin McKinney</h4>
                <h5>Content writer</h5>
              </div>
            </div>
            <div
              class="swiper-slide"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div class="testimonial-box">
                <div class="content-sec">
                  <div class="quote-img">
                    <img
                      src="assets/svg/quote.svg"
                      class="img-fluid outline-img"
                      alt=""
                    />
                    <img
                      src="assets/svg/quote-green.svg"
                      class="img-fluid fill-img"
                      alt=""
                    />
                  </div>
                  <p>
                    I was skeptical about using AI for content generation, but
                    after trying out the AI Generation Tool, I was pleasantly
                    surprised.
                  </p>
                </div>
                <div class="small-circle">
                  <span></span>
                </div>
                <div class="large-circle">
                  <span></span>
                </div>
                <div class="avtar-img">
                  <img
                    src="assets/images/user/3.jpg"
                    class="img-fluid"
                    alt="user"
                  />
                </div>
                <h4>Marvin McKinney</h4>
                <h5>Content writer</h5>
              </div>
            </div>
            <div
              class="swiper-slide"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div class="testimonial-box">
                <div class="content-sec">
                  <div class="quote-img">
                    <img
                      src="assets/svg/quote.svg"
                      class="img-fluid outline-img"
                      alt=""
                    />
                    <img
                      src="assets/svg/quote-green.svg"
                      class="img-fluid fill-img"
                      alt=""
                    />
                  </div>
                  <p>
                    The AI Generation Tool has revolutionized the way I write.
                    Whether I need help with brainstorming ideas or fleshing out
                    drafts.
                  </p>
                </div>
                <div class="small-circle">
                  <span></span>
                </div>
                <div class="large-circle">
                  <span></span>
                </div>
                <div class="avtar-img">
                  <img
                    src="assets/images/user/3.jpg"
                    class="img-fluid"
                    alt="user"
                  />
                </div>
                <h4>Marvin McKinney</h4>
                <h5>Content writer</h5>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
