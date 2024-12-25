import dashboardimg from "../../../assets/images/dashboardimg.png";

const Security = () => {
  return (
    <>
      <section className="security_section">
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 col-md-12">
              <div className="investment_card security_card">
                <h2 className="xlarge">
                  Powered by Blockchain for Unmatched Security
                </h2>
                <div className="security_content">
                  <div className="investment_content">
                    <p className="body_text">
                      Every transaction on SBX Prime is powered by blockchain
                      technology. From token issuance to secondary marketplace
                      trades, our platform ensures transparency, immutability,
                      and security for your investments.
                    </p>
                    <p className="body_text"><b><i>
                      Escrow Wallets & Smart Contracts 1 Our escrow wallets
                      are managed through smart contracts, providing complete
                      transparency and security for each transaction. Asset
                      custody remains with the investor, with provisions for
                      next-of-kin transfers.</i></b>
                    </p>
                    <a href="" className="btns sm_btn">
                      Learn How SBX Prime Works
                    </a>
                  </div>
                  <img
                    src={dashboardimg}
                    alt="Feature Graphic"
                    loading="lazy"
                    width={100}
                    height={100}
                    className="feature_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Security;
