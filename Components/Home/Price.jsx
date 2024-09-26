import React from "react";

const Price = () => {
  const priceTable = [
    {
      title: "Weekly Plan",
      price: "$3.99",
      items: [
        {
          icon: "arrow",
          item: "Intelligent AI chatbot",
        },
        {
          icon: "arrow",
          item: "Unlimited answer of question",
        },
        {
          icon: "arrow",
          item: "Avoid buying coin forever          ",
        },
        {
          icon: "arrow",
          item: "No ad in background",
        },
        {
          icon: "arrow",
          item: "Early access to new features",
        },
      ],
    },
    {
      title: "Monthly Plan",
      price: "$3.99",

      items: [
        {
          icon: "arrow",
          item: "Intelligent AI chatbot",
        },
        {
          icon: "arrow",
          item: "Unlimited answer of question",
        },
        {
          icon: "arrow",
          item: "Avoid buying coin forever          ",
        },
        {
          icon: "arrow",
          item: "No ad in background",
        },
        {
          icon: "arrow",
          item: "Early access to new features",
        },
        {
          icon: "arrow",
          item: "15+ new category",
        },
      ],
    },
    {
      title: "Lifetime Plan      ",
      price: "$3.99",

      items: [
        {
          icon: "arrow",
          item: "Intelligent AI chatbot",
        },
        {
          icon: "arrow",
          item: "Unlimited answer of question",
        },
        {
          icon: "arrow",
          item: "Avoid buying coin forever          ",
        },
        {
          icon: "arrow",
          item: "No ad in background",
        },
        {
          icon: "arrow",
          item: "Early access to new features",
        },
      ],
    },
  ];
  return (
    <section class="pricing-section section-b-space">
      <div class="container">
        <div class="title-horizontal">
          <h2>
            Unleash limitless potential & versatile features for every need
          </h2>
          <p>
            From robust tools that inspire creativity to innovative ideas that
            simplify your everyday tasks, our tool knows no bounds. Utilise the
            potential and elevate your user experience to new heights with our
            cutting-edge technology, adapted just for you.
          </p>
        </div>
        <div class="row pricing-row g-xl-5 g-4 justify-content-center">
          {priceTable.map((price, i) => (
            <div class="col-lg-4 col-md-6">
              <div class="pricing-box">
                <img
                  src="assets/svg/hanging.svg"
                  class="img-fluid handing-cls"
                  alt="effect"
                />
                <div class="pricing-top">
                  <img
                    src="assets/svg/pricing/pricing-top.svg"
                    class="img-fluid pricing-bg"
                    alt=""
                  />
                  <img
                    src="assets/svg/pricing/weekly.svg"
                    class="img-fluid"
                    alt=""
                  />
                  <h3>{price.title}</h3>
                </div>
                <div class="pricing-mid">
                  <div class="clip-path-content">
                    <div>
                      <h2>{price.price}</h2>
                      <h4>/ only</h4>
                    </div>
                  </div>
                </div>
                <div class="pricing-content">
                  <div class="clip-path-content">
                    <ul>
                      {price.items.map((list, i) => (
                        <li>
                          <img
                            src="assets/svg/arrow.svg"
                            class="img-fluid"
                            alt="arrow"
                          />
                          <h4>{list.item}</h4>
                        </li>
                      ))}
                    </ul>
                    <a class="pricing-link" href="#" data-cursor="pointer">
                      Choose plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
