import React from "react";
import { BsBoxArrowRight } from "react-icons/bs";
const Feature = () => {
  const items = [
    {
      title: "Code generator",
      description:
        "Discover the power of technology, making your coding dreams a reality.",
      icons: [
        {
          icon: "code.svg",
          style: "outline-icon",
        },
        {
          icon: "code-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "ASO expert",
      description:
        "Boost your app's success and take over the app stores and win the attention of millions.",
      icons: [
        {
          icon: "play.svg",
          style: "outline-icon",
        },
        {
          icon: "play-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "Insta caption",
      description:
        " One caption at a time, unveiling the endless potential of AI",
      icons: [
        {
          icon: "insta.svg",
          style: "outline-icon",
        },
        {
          icon: "insta-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "Email generator",
      description:
        " Generating emails that captivates and expresses with brilliance.",
      icons: [
        {
          icon: "mail.svg",
          style: "outline-icon",
        },
        {
          icon: "mail-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "Hashtag writer",
      description:
        "Boost your content journey by utilising the power of hashtags!",
      icons: [
        {
          icon: "hashtag.svg",
          style: "outline-icon",
        },
        {
          icon: "hashtag-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "E-commerce",
      description:
        "Promoting sales, enhancing customer experience, and redefining product recommendations.",
      icons: [
        {
          icon: "box.svg",
          style: "outline-icon",
        },
        {
          icon: "box-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "Ads & marketing",
      description:
        " Tap into data-driven facts, target the right clientele, and maximize ad performance.",
      icons: [
        {
          icon: "marketing.svg",
          style: "outline-icon",
        },
        {
          icon: "marketing-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "YouTube ",
      description:
        " Tap into data-driven facts, target the right clientele, and maximize ad performance.",
      icons: [
        {
          icon: "marketing.svg",
          style: "outline-icon",
        },
        {
          icon: "marketing-bold.svg",
          style: "bold-icon",
        },
      ],
    },
  ];
  return (
    <section class="feature-section section-b-space">
      <div class="bg-effect">
        <img
          src="assets/images/feature.gif"
          class="img-fluid feature-left"
          alt=""
        />
        <img
          src="assets/images/feature.gif"
          class="img-fluid feature-right"
          alt=""
        />
        <img
          src="assets/images/feature-bg.png"
          class="img-fluid feature-bg"
          alt=""
        />
        <span class="round-effect"></span>
      </div>
      <div class="container">
        <div class="title-basic">
          <h2>
            Unleash limitless potential & versatile features for every need
          </h2>
        </div>
        <div class="swiper featureSlider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="row g-xxl-5 g-4">
                {items.map((item, i) => (
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="feature-box">
                      <div class="feature-top">
                        <div class="feature-icon">
                          {item.icons.map((el, i) => (
                            <img
                              src={`assets/svg/feature/${el.icon}`}
                              class={`img-fluid ${el.style}`}
                              alt=""
                            />
                          ))}

                          {/* <img
                            src="assets/svg/feature/message-bold.svg"
                            class="img-fluid bold-icon"
                            alt=""
                          /> */}
                        </div>
                        <h3>{item.title}</h3>
                      </div>
                      <h4>{item.description}</h4>
                      <div data-cursor="pointer" class="link-overflow">
                        <a href="service.html">
                          Read more
                          <BsBoxArrowRight />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
