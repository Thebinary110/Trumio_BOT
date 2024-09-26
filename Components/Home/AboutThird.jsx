import React from "react";

const AboutThird = () => {
  const listData = [
    {
      description:
        " Curate endless content possibilities that make your website shine.",
    },
    {
      description: " Generates compelling hashtags that skyrocket your reach",
    },
    {
      description:
        " Unlock a world of unlimited content ideas that keep your followers hooked.",
    },
  ];
  return (
    <section class="about-section section-b-space">
      <div class="bg-effect"></div>
      <div class="container">
        <div class="row g-md-5 g-4">
          <div class="col-lg-6 order-lg-0 order-1">
            <div class="about-content">
              <div>
                <div class="title">
                  <span class="number-pattern">03.</span>
                  <h2 class="text-white">
                    MegaAI: Your Companion for Hashtags, Captions, and More!
                  </h2>
                </div>
                <p>
                  Experience the power of Megabot AI and revolutionise your
                  social media presence. Say goodbye to writer's block and hello
                  to compelling hashtags, captivating captions, and endless
                  content possibilities.
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
                src="assets/svg/character/3.svg"
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

export default AboutThird;
