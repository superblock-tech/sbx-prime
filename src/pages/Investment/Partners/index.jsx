import AWS_Logo from "../../../assets/images/AWS_Logo.svg";
import Azure_Logo from "../../../assets/images/Azure_Logo.svg";
import CB_Richard from "../../../assets/images/CB_Richard.svg";
import chainlink_logo from "../../../assets/images/chainlink_logo.svg";
import Colliers from "../../../assets/images/Colliers.svg";
import Deloitte from "../../../assets/images/Deloitte.svg";
import ey_logo from "../../../assets/images/ey_logo.svg";
import JLL_Logo from "../../../assets/images/JLL_Logo.svg";
import KPMG_logo from "../../../assets/images/KPMG_logo.svg";
import Polygon_Logo from "../../../assets/images/Polygon_Logo.svg";
import pwc_logo from "../../../assets/images/pwc_logo.svg";
import Savills from "../../../assets/images/Savills.svg";
const partnersData = [
  {
    title: "Real Estate Due Diligence and Valuation Partners",
    description:
      "We collaborate with leading global real estate advisors to ensure the highest standards in property evaluation and due diligence. These partners provide in-depth market insights, valuation expertise, and professional property assessments.",
    subheading: "Key Partners:",
    partnersLogo: [
      {
        imageSrc: JLL_Logo,
      },
      {
        imageSrc: CB_Richard,
      },
      {
        imageSrc: Savills,
      },
      {
        imageSrc: Colliers,
      },
    ],
  },
  {
    title: "Tax, Legal, and Regulatory Partners",
    description:
      "Our operations are supported by world-class advisory firms that handle the complex tax, legal, and regulatory aspects of property tokenization. These firms provide compliance assurance, risk management, and strategic guidance in navigating local and global regulations.",
    subheading: "Key Partners:",
    partnersLogo: [
      {
        imageSrc: pwc_logo,
      },
      {
        imageSrc: Deloitte,
      },
      {
        imageSrc: ey_logo,
      },
      {
        imageSrc: KPMG_logo,
      },
    ],
  },
  {
    title: "Technology and Infrastructure Partner",
    description:
      "To ensure the best in blockchain, cloud computing, and security, we work with top-tier infrastructure providers. These partners support the backbone of SBX Prime, powering our tokenization platform, blockchain infrastructure, and data-driven systems.",
    subheading: "Key Partners:",
    partnersLogo: [
      {
        imageSrc: AWS_Logo,
      },
      {
        imageSrc: Polygon_Logo,
      },
      {
        imageSrc: Azure_Logo,
      },
      {
        imageSrc: chainlink_logo,
      },
    ],
    buttonText: "Explore Our Full List of Partners",
    buttonLink: "#",
  },
];
const Partners = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="partners">
                {partnersData.map((partners, index) => (
                  <div className="partners_data" key={index}>
                    <div className="">
                      <h2 className="normal">{partners.title}</h2>
                      <p className="medium_text">{partners.description}</p>
                    </div>
                    <div className="d-flex gap-4 flex-column align-items-center">
                      <div className="partners_logo">
                        <h3 className="medium">{partners.subheading}</h3>
                        <div className="logos">
                          {partners.partnersLogo.map((logo, idx) => (
                            <div className="" key={idx}>
                              <img src={logo.imageSrc} />
                            </div>
                          ))}
                        </div>
                      </div>
                      <a className="gradiant_btn" href={partners.buttonLink}>
                        {partners.buttonText}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
