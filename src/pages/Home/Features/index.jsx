import realEstateAppImage from "../../../assets/images/realestateapp.png";
import squareFootAppImage from "../../../assets/images/squarefootapp.png";
import primeDashboardImage from "../../../assets/images/primedashboard.png";
import accessAppImage from "../../../assets/images/accessapp.png";
const featureData = [
  {
    title: "Invest in Top-Tier Real Estate",
    description:
      "Explore commercial properties in prime locations like Dubai, Singapore, and London, curated and vetted by experienced professionals. Each investment opportunity is secured and tokenized for fractional ownership",
    buttonText: "Browse Available Properties",
    buttonLink: "#",
    imageSrc: realEstateAppImage,
  },
  {
    title: "Invest in 1 Square Foot",
    description:
      "Our unique model allows you to invest in just 1 square foot of property, enabling easy ",
    description2:
      "comparisons across assets and the flexibility to build a diversified real estate portfolio. Enjoy liquidity on our secondary marketplace.",
    buttonText: "Learn About Fractional Ownership",
    buttonLink: "#",
    imageSrc: squareFootAppImage,
  },
  {
    title: "Al-Driven Investment Insights",
    description:
      "Leverage our advanced Al assistant to get real-time insights, property analysis, and tailored investment recommendations. With data-driven support, making informed decisions is simple.",
    buttonText: "Explore Al Investment Insights",
    buttonLink: "#",
    imageSrc: primeDashboardImage,
  },
  {
    title: "Get Early Access to Prime Assets",
    description:
      "Join our exclusive list of early investors and get first-mover opportunities for the best properties. SBX Prime offers limited investment slots for high-yield assets.",
    buttonText: "Request Priority Access",
    buttonLink: "#",
    imageSrc: accessAppImage,
  },
];

const Features = () => {
  return (
    <>
      <section className="feature_section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="title_bx">
                <h2 className="xlarge">Features</h2>
                <p className="body_text">
                  SBX Prime makes real estate investment effortless and secure.
                  Here is a step-by-step overview:
                </p>
              </div>
            </div>
            <div className="feature_cards_row">
              {featureData.map((feature, index) => (
                <div className="feature_card" key={index}>
                  <div className="feature_content">
                    <h3 className="medium">{feature.title}</h3>
                    <p className="large_text">{feature.description}</p>
                    <p className="large_text description2">
                      {feature.description2}
                    </p>
                    <a href={feature.buttonLink} className="btns sm_btn">
                      {feature.buttonText}
                    </a>
                  </div>
                  <img
                    src={feature.imageSrc}
                    alt="Feature Graphic"
                    loading="lazy"
                    width={100}
                    height={100}
                    className="feature_image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
