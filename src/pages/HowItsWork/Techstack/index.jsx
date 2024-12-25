import aidriven from "../../../assets/images/aidriven.svg";
import blockchain from "../../../assets/images/blockchain.svg";
import smartcontract from "../../../assets/images/smartcontract.svg";
const techstackData = [
  {
    title: "Al-Driven Insights",
    description:
      "Our Al assistant evaluates market trends, analyzes investment performance, and provides real-time advice to support your investment journey. Gain access to advanced forecasting models and property-specific data to make smart decisions.",
    imageSrc: aidriven,
  },
  {
    title: "Blockchain-Powered Ownership",
    description:
      "Each token is secured on the blockchain, ensuring that your ownership is immutable and transparent. Transactions are recorded on-chain, and smart contracts guarantee compliance with local real estate laws.",
    imageSrc: blockchain,
  },
  {
    title: "Smart Contract Governance",
    description:
      "Custody of the tokenized asset remains with the investor. Our smart contracts include provisions for next-of-kin transfers, re-issuance, and a fully secure escrowwallet service for managing asset transactions on -chain.",
    buttonText: "Start Your Investment Journey",
    buttonLink: "#",
    imageSrc: smartcontract,
  },
];

const Techstack = () => {
  return (
    <>
      <section className="techstack_section">
        <div className="container-fluid">
          {techstackData.map((techstack, index) => (
            <div className="row align-items-center position-relative" key={index}>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="techstack_img_bx">
                  <img
                    src={techstack.imageSrc}
                    alt="techstack Graphic"
                    loading="lazy"
                    width={100}
                    height={100}
                    className="teckstack_image"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="techstack_data">
                  <h2 className="medium">{techstack.title}</h2>
                  <p className="large_text">{techstack.description}</p>
                  <a href={techstack.buttonLink} className="gradiant_btn">
                    {techstack.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Techstack;
