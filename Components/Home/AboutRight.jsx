import React from "react";

const AboutRight = () => {
  const listData = [
    {
      description:
        " Gain valuable insights into their expectations, preferences, and aspirations",
    },
    {
      description:
        " Create captivating content that speaks directly to their hearts and minds.",
    },
    {
      description:
        " Identify the precise pain points and challenges your audience faces, and provide solutions through your content",
    },
  ];
  return (
    <section class="about-section right-version section-b-space section-mb-space">
      <div class="bg-effect"></div>
      <div class="container">
        <div class="row g-md-5 g-4">
          <div class="col-lg-6">
            <div class="about-img">
              <img
                src="assets/svg/character/2.svg"
                class="img-fluid"
                alt="about"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content">
              <div>
                <div class="title">
                  <span class="number-pattern">02.</span>
                  <h2>The key resource for First Page Content Optimisation</h2>
                </div>
                <p>
                  "Unlock Content Magic: Tailor Your Message to Win Hearts!
                  Discover Your Ideal Audience, Understand Their Desires,
                  Tastes, and Challenges!"
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
        </div>
      </div>
    </section>
  );
};

export default AboutRight;
