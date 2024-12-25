const faqData = [
  {
    question: "What is SBX Prime?",
    answer:
      "SBX Prime is a decentralized platform that allows users to invest in tokenized institutional-grade commercial real estate. By converting real estate into digital tokens, we make it easy for investors to own fractional parts of high-value properties around the globe.",
  },
  {
    question: "How does property tokenization work?",
    answer:
      "Property tokenization involves converting real estate ownership rights into digital tokens on a blockchain. This allows investors to buy fractional ownership, providing easier access and liquidity.",
  },
  {
    question: "What are the benefits of investing in tokenized real estate?",
    answer:
      "Investing in tokenized real estate provides fractional ownership, liquidity, and global access to institutional-grade properties with lower investment thresholds.",
  },
  {
    question: "How can I earn returns on my investment?",
    answer:
      "Investing in tokenized real estate provides fractional ownership, liquidity, and global access to institutional-grade properties with lower investment thresholds.",
  },
  {
    question: "Who manages the properties listed on SBX Prime?",
    answer:
      "Investing in tokenized real estate provides fractional ownership, liquidity, and global access to institutional-grade properties with lower investment thresholds.",
  },
];

const AskQuestion = () => {
  return (
    <>
      <section className="faqs_section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-6 col-xl-5 col-xxl-5">
              <div className="title_bx text-center">
                <h2 className="xlarge mb-0" style={{ fontStyle: "uppercase" }}>
                  FAQ
                </h2>
                <p className="body_text">
                  Have a question? Here is answers to the most commonly asked questions.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-lg-8 col-xl-8">
              <div className="accordion" id="accordionExample">
                {faqData.map((faqs, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button sub_heading ${index === 0 ? "" : "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`collapse${index}`}
                      >
                        {faqs.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body medium_text">
                        {faqs.answer}
                      </div>
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

export default AskQuestion;