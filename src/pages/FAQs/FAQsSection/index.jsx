const faqData = [
  {
    question: "What is SBX Prime?",
    answer:
      "SBX Prime is a decentralized platform that allows users to invest in tokenized institutional-grade commercial real estate. By converting real estate into digital tokens, we make it easy for investors to own fractional parts of high-value properties around the globe.",
  },
  {
    question: "How does property tokenization work?",
    answer:
      "SBX Prime is a decentralized platform that allows users to invest in tokenized institutional-grade commercial real estate. By converting real estate into digital tokens, we make it easy for investors to own fractional parts of high-value properties around the globe.",
  },
  {
    question: "What are the benefits of investing in tokenized real estate?",
    answer:
      "SBX Prime is a decentralized platform that allows users to invest in tokenized institutional-grade commercial real estate. By converting real estate into digital tokens, we make it easy for investors to own fractional parts of high-value properties around the globe.",
  },
  {
    question: "How can I earn returns on my investment?",
    answer:
      "SBX Prime is a decentralized platform that allows users to invest in tokenized institutional-grade commercial real estate. By converting real estate into digital tokens, we make it easy for investors to own fractional parts of high-value properties around the globe.",
  },
  {
    question: "Who manages the properties listed on SBX Prime?",
    answer:
      "SBX Prime is a decentralized platform that allows users to invest in tokenized institutional-grade commercial real estate. By converting real estate into digital tokens, we make it easy for investors to own fractional parts of high-value properties around the globe.",
  },
  {
    question: "Who manages the properties listed on SBX Prime?",
    answer:
      "SBX Prime is a decentralized platform that allows users to invest in tokenized institutional-grade commercial real estate. By converting real estate into digital tokens, we make it easy for investors to own fractional parts of high-value properties around the globe.",
  },
  {
    question: "Is investing in SBX Prime safe?",
    answer:
      "SBX Prime is a decentralized platform that allows users to invest in tokenized institutional-grade commercial real estate. By converting real estate into digital tokens, we make it easy for investors to own fractional parts of high-value properties around the globe.",
  },
  {
    question: "What are the fees associated with investing on SBX Prime?",
    answer:
      "SBX Prime is a decentralized platform that allows users to invest in tokenized institutional-grade commercial real estate. By converting real estate into digital tokens, we make it easy for investors to own fractional parts of high-value properties around the globe.",
  },
  {
    question: "What kind of properties can I invest in on SBX Prime?",
    answer:
      "SBX Prime is a decentralized platform that allows users to invest in tokenized institutional-grade commercial real estate. By converting real estate into digital tokens, we make it easy for investors to own fractional parts of high-value properties around the globe.",
  },
  {
    question: "How do I get started with investing on SBX Prime?",
    answer:
      "SBX Prime is a decentralized platform that allows users to invest in tokenized institutional-grade commercial real estate. By converting real estate into digital tokens, we make it easy for investors to own fractional parts of high-value properties around the globe.",
  },
  {
    question:
      "Does SBX Prime offer an AI assistant to help me with my investments?",
    answer:
      "SBX Prime is a decentralized platform that allows users to invest in tokenized institutional-grade commercial real estate. By converting real estate into digital tokens, we make it easy for investors to own fractional parts of high-value properties around the globe.",
  },
];

const FAQsSection = () => {
  return (
    <section className="faqs_section" style={{ backgroundImage: "none" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-9 col-xl-8">
            <div className="title_bx text-center">
              <h2 className="xlarge mb-0">Frequently Asked Questions</h2>
              <p className="body_text">
                Have a question? Here are answers to the most commonly asked
                questions.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-9 col-xl-9">
            <div className="accordion" id="accordionExample">
              {faqData.map((faqs, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button sub_heading ${
                        index === 0 ? "" : "collapsed"
                      }`}
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
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
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
  );
};

export default FAQsSection;
