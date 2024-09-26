import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Service = () => {
  const features = [
    {
      title: "Copy writer",
      description:
        "Unleash the power of AI to effortlessly compelling content that captivates and converts.",
      image: "service-title.svg",
      icons: [
        {
          icon: "copy.svg",
          style: "outline-icon",
        },
        {
          icon: "copy-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "Digital marketers",
      description:
        " Accelerate your marketing and take over the digital landscape",
      image: "service-title.svg",
      icons: [
        {
          icon: "graph.svg",
          style: "outline-icon",
        },
        {
          icon: "graph-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: " SEO Sepcialist",
      description:
        "Generate more engaging content to skyrocket your website’s visibility",
      image: "service-title.svg",
      icons: [
        {
          icon: "search.svg",
          style: "outline-icon",
        },
        {
          icon: "search-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "Content marker",
      description:
        "Reinvent your content marketing and captivate your audience like never before.",
      image: "service-title.svg",
      icons: [
        {
          icon: "text.svg",
          style: "outline-icon",
        },
        {
          icon: "text-bold.svg",
          style: "bold-icon",
        },
      ],
    },
  ];

  return (
    <div class="service-section section-b-space">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6">
            <div class="row g-4 service-row">
              {features.map((feature, i) => (
                <div class="col-sm-6">
                  <div class="service-box">
                    <div class="service-icon">
                      {feature.icons.map((icon, i) => (
                        <img
                          src={`assets/svg/service/${icon.icon}`}
                          class={`img-fluid outline-icon ${icon.style}`}
                          alt=""
                        />
                      ))}
                    </div>
                    <div class="service-content">
                      <h3>
                        <img
                          src="assets/svg/service-title.svg"
                          alt="effect"
                          class="img-fluid"
                        />
                        {feature.title}
                      </h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="col-lg-6">
            <div class="service-info">
              <div>
                <div class="title">
                  <h2>For All Kind of Creators</h2>
                  <h3>
                    In the digital world, our AI Writer supports a variety of
                    artists
                  </h3>
                </div>
                <p>
                  Introducing a revolutionary AI partner for creators across the
                  globe—a groundbreaking tool designed to transform the way we
                  bring our creative ideas to life. Unleash your artistic
                  abilities as you explore a world of limitless possibilities.
                  Say goodbye to obstacles and let this remarkable AI companion
                  pave the way to a new era of boundless creation.
                </p>
                <a data-cursor="pointer" class="btn-arrow" href="">
                  <div class="icon-arrow">
                    <BsArrowUpRight />
                  </div>
                  View all
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
