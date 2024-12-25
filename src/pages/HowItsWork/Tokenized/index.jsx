import { useState } from "react";
import discover from "../../../assets/images/discover.png";
import invest from "../../../assets/images/invest.png";
import earn from "../../../assets/images/earn.png";
import radial from "../../../assets/images/radial.svg";

function Tokenized() {
  const [,] = useState(null);
  return (
    <>
      <section className="tockenized_section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-lg-9 col-xl-8">
              <div className="d-grid gap-3 mb-5 text-center">
                <h1 className="xlarge">
                  Tokenized Real Estate Investments with SBX Prime
                </h1>
                <h2>
                  <span>3-Step Investment Process</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="main_bx">
                <div className="">
                  <h3 className="small">
                    <span>Step 1:</span>
                  </h3>
                  <h4>Discover</h4>
                </div>
                <img
                  className="discover"
                  src={discover}
                  alt="App Screen"
                  loading="lazy"
                />
                <div className="radial_img">
                  <img
                    className=""
                    src={radial}
                    alt="Radial Gradiant"
                    loading="lazy"
                  />
                  <img
                    className=""
                    src={radial}
                    alt="Radial Gradiant"
                    loading="lazy"
                  />
                </div>
                <div className="">
                  <p className="medium_text">
                    Browse our selection of prime, institutional-grade assets.
                    All properties are vetted by accredited professionals and
                    standardized to 1 saleable square foot, making comparisons
                    across investments easy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="main_bx main_bx2">
                <img
                  className="invest"
                  src={invest}
                  alt="App Screen"
                  loading="lazy"
                />
                <div className="radial_img">
                  <img
                    className=""
                    src={radial}
                    alt="Radial Gradiant"
                    loading="lazy"
                  />
                  <img
                    className=""
                    src={radial}
                    alt="Radial Gradiant"
                    loading="lazy"
                  />
                </div>
                <div className="">
                  <h3 className="small">
                    <span>Step 2:</span>
                  </h3>
                  <h4>Invest</h4>
                  <p className="medium_text">
                    Purchase fractional tokens of real estate using the SBX
                    Prime platform. Each token is backed by blockchain
                    technology, ensuring security, transparency, and ownership
                    rights.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="main_bx main_bx3">
                <div className="">
                  <h3 className="small">
                    <span>Step 3:</span>
                  </h3>
                  <h4>Earn</h4>
                  <p className="medium_text">
                    Earn rental yields proportional to your ownership, benefit
                    from property appreciation, and track your portfolios
                    performance in real-time through our platform. Easily
                    liquidate your tokens in the secondary marketplace.
                  </p>
                </div>
                <img
                  className="earn"
                  src={earn}
                  alt="App Screen"
                  loading="lazy"
                />
                <div className="radial_img">
                  <img
                    className=""
                    src={radial}
                    alt="Radial Gradiant"
                    loading="lazy"
                  />
                  <img
                    className=""
                    src={radial}
                    alt="Radial Gradiant"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Tokenized;
