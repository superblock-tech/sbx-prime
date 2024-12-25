import { useState, useEffect } from "react";
import backbone from "../../../assets/images/backbone.png";
import smartcontract from "../../../assets/images/smartcontract.png";
import radial from "../../../assets/images/radial.svg";
import ai1 from "../../../assets/images/ai1.png";
import ai2 from "../../../assets/images/ai2.png";
import ai3 from "../../../assets/images/ai3.png";
import ai4 from "../../../assets/images/ai4.png";

const poveringData = [
  {
    title: "Superblock Technology - The Backbone of SBX Prime",
    description:
      "SBX Prime is built on the Superblock technology, which provides a robust, scalable, and compliant platform for real estate tokenization. Utilizing blockchain technology, Superblock ensures every transaction is secure, transparent, and immutable, giving investors full confidence in their real estate investments.",
    buttonText: "Learn More About Superblock",
    buttonLink: "#",
    imageSrc: backbone,
  },
  {
    title: "Blockchain-Backed Security",
    description:
      "All investment transactions on SBX Prime are processed through blockchain-based smart contracts.",
    details: [
      {
        subheading: "This ensures that:",
        text: "Automated Rental Distribution: Smart contracts automatically distribute rental income to token holders without manual intervention.",
      },
      {
        subheading: "Immutable Ownership:",
        text: "Automated Rental Distribution: Smart contracts automatically distribute rental income to token holders without manual intervention.",
      },
      {
        subheading: "On-Chain Escrow:",
        text: "Funds are held securely in on-chain escrow wallets, with clear, pre-defined conditions for release.",
      },
      {
        subheading: "Benefits",
        listItems: [
          {
            text: "Full Transparency for investors, property owners, and developers.",
          },
          {
            text: "No Intermediaries to reduce costs and human error.",
          },
          {
            text: "Automated and Instantaneous Transactions via smart contracts.",
          },
        ],
      },
    ],
    buttonText: "Learn More About Blockchain Security",
    buttonLink: "#",
  },
  {
    title: "Compliant and Globally Regulated",
    description:
      "SBX Prime operates under strict regulatory guidelines, ensuring full compliance with real estate laws and financial regulations across jurisdictions. The platform holds tokenization and marketplace licenses in key regions, including the UAE, Singapore, and the UK. Superblock ensures that each property listed meets local compliance requirements, making investments safe and secure for all users.",
    details: [
      {
        subheading: "Benefits",
        listItems: [
          {
            text: "Jurisdictional Compliance: Each asset meets local laws and regulations.",
          },
          {
            text: "Full Legal Framework: Our platform operates under a robust legal structure with support from accredited law firms and third-party auditors.",
          },
          {
            text: "KYC/AML Compliance: Investors go through thorough KYC (Know Your Customer) and AML (Anti-Money Laundering) checks for added security.",
          },
        ],
      },
    ],
    buttonText: "Learn More About Our Regulatory Compliance",
    buttonLink: "#",
    imageSrc: smartcontract,
  },
  {
    title: "Scalable for the Future",
    description:
      "Superblock technology is built to scale with the SBX Prime platform as the number of users, properties, and transactions grows. The platform is designed to handle thousands of property listings, millions of transactions, and support future innovations such as a dedicated Layer 1 blockchain for the Superblock ecosystem.",
    details: [
      {
        subheading: "Benefits",
        listItems: [
          {
            subheading: "High Transaction Volume:",
            text: "Easily handles multiple simultaneous transactions without slowdowns.",
          },
          {
            subheading: "Future-Proof:",
            text: "Superblock’s architecture allows for continuous upgrades and innovations, ensuring the platform evolves to meet investor needs.",
          },
          {
            subheading: "Layer 1 Blockchain Migration:",
            text: "Plans to migrate to a dedicated Layer 1 blockchain for increased efficiency and lower costs.",
          },
        ],
      },
    ],
    buttonText: "Discover How We Scale with Superblock",
    buttonLink: "#",
  },
  {
    title: "Comprehensive Services for Investors and Developers",
    description:
      "Superblock technology supports a wide array of services that enhance the SBX Prime platform, ensuring both investors and developers have access to the tools they need:",
    buttonText: "Explore AI-Powered Insights",
    buttonLink: "#",
    autoChangingContent: [
      {
        subheading: "AI-Driven Insights:",
        text: "SBX Prime integrates AI technology to provide real-time market trends, property values, and rental income projections. The AI assistant also offers personalized suggestions based on your investment goals, helping you optimize your portfolio.",
        imageSrc: ai1,
      },
      {
        subheading: "Tokenization Engine:",
        text: "Real estate properties are tokenized with ERC-1155 contracts, allowing fractional ownership and easy transfer of assets.",
        imageSrc: ai2,
      },
      {
        subheading: "On-Chain Governance:",
        text: "Token holders can participate in platform governance through decentralized voting mechanisms, shaping the future of SBX Prime.",
        imageSrc: ai3,
      },
      {
        subheading: "Data Oracles:",
        text: "Superblock integrates real estate oracles to provide up-to-date data feeds, ensuring accurate property information and market comparisons.",
        imageSrc: ai4,
      },
    ],
  },
];

const PoweringSection = () => {
  const [activeContent, setActiveContent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveContent((prev) =>
        prev + 1 === poveringData[4].autoChangingContent.length ? 0 : prev + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="tockenized_section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-lg-9 col-xl-8">
              <div className="d-grid gap-3 mb-5 text-center">
                <h1 className="xlarge">
                  Powering SBX Prime with Superblock Technology
                </h1>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-12 col-md-12">
              <div className="powering_cards">
                {poveringData.map((povering, index) => (
                  <div className="main_bx" key={index}>
                    <div className="">
                      <h2 className="medium">{povering.title}</h2>
                      <p className="medium_text">{povering.description}</p>
                      {povering.details &&
                        povering.details.map((detail, idx) => (
                          <div key={idx}>
                            {detail.subheading && (
                              <h3 className="small">{detail.subheading}</h3>
                            )}
                            {detail.text && (
                              <p className="xsmall">{detail.text}</p>
                            )}
                            {detail.listItems && (
                              <ul>
                                {detail.listItems.map((listItem, i) => (
                                  <li key={i} className="xsmall">
                                    {listItem.boldText && (
                                      <strong>{listItem.boldText}</strong>
                                    )}
                                    {listItem.text && (
                                      <span>{listItem.text}</span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      {index === poveringData.length - 1 &&
                        povering.autoChangingContent && (
                          <div className="auto-changing-content">
                            <div className="">
                              <h3 className="small">
                                {
                                  povering.autoChangingContent[activeContent]
                                    .subheading
                                }
                              </h3>
                              <p className="xsmall">
                                {
                                  povering.autoChangingContent[activeContent]
                                    .text
                                }
                              </p>
                            </div>
                            <div className="">
                              <img
                                className=""
                                src={povering.autoChangingContent[activeContent].imageSrc}
                                alt="App Screen"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        )}
                      <a href={povering.buttonLink} className="btns sm_btn">
                        {povering.buttonText}
                      </a>
                    </div>
                    {povering.imageSrc && (
                      <img
                        className=""
                        src={povering.imageSrc}
                        alt="App Screen"
                        loading="lazy"
                      />
                    )}
                    {/* Added radial image */}
                    <div className="radial_img">
                      <img
                        className="radial-image"
                        src={radial}
                        alt="Radial"
                        loading="lazy"
                      />
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

export default PoweringSection;
