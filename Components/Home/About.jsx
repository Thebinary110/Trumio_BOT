import React from "react";

const About = () => {
  const listData = [
    {
      description:
        " Attract your audience with captivating facts in your commercials",
    },
    {
      description: "  Let’s engage with the customers effectively",
    },
    {
      description:
        " Brighten up your content with appealing graphics: pictures, clips, and graphs that will fascinate your users!",
    },
  ];
  return (
    <section class="about-section section-b-space section-mb-space">
      <div class="bg-effect"></div>
      <div class="container">
        <div class="row g-md-5 g-4">
          <div class="col-lg-6 order-lg-0 order-1">
            <div class="about-content">
              <div>
                <div class="title">
                  <span class="number-pattern">01.</span>
                  <h2 class="text-white">
                    AI's Innovative Potential for One-Click Content Generation.
                  </h2>
                </div>
                <p>
                  Crafting influential content requires a deep understanding of
                  your target audience. Pinpoint your ideal demographic and
                  familiarise yourself with their needs, passions, and sources
                  of concern.
                </p>
                <ul>
                  {listData.map((list, i) => (
                    <li key={i + 1}>
                      <img
                        src={`assets/svg/tick.svg`}
                        class="img-fluid"
                        alt="tick"
                      />
                      {list.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-img">
              <img
                src="assets/svg/character/1.svg"
                class="img-fluid"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
