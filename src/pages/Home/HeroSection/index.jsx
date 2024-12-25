import { useState } from "react";
import logosymbol from "../../../assets/images/logosymbol.svg";
import heroimg from "../../../assets/images/heroimg.png";
import radial from "../../../assets/images/radial.svg";

function HeroSection() {
  const [,] = useState(null);
  return (
    <>
      <section className="hero_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-6 col-xl-5 col-xxl-5">
              <div className="d-grid gap-2">
                <h1 className="xlarge">Access Institutional-Grade Real Estate Investments</h1>
                <p>
                  Own a piece of prestigious real estate. Invest in
                  fractionalized super prime assets with global market access.
                </p>
                <a href="#" className="gradiant_btn large_btn">
                  Explore Investment Opportunities
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-7 col-xxl-7">
              <div className="d-grid">
                <div className="" style={{ height: "100px" }}></div>
                <div className="main_bx">
                  <div className="d-flex align-items-center logo_symbol_bx fade-in">
                    <img src={logosymbol} alt="Logo" loading="lazy" />
                    <div className="">
                      <h2 className="small">SBXprime</h2>
                      <p className="small_text">
                        You’ve been paid 15,000,000 SGD in rent
                      </p>
                    </div>
                  </div>
                  <img className="hero_img image-slide" src={heroimg} alt="App Screen" loading="lazy" />
                  <div className="radial_img">
                    <img className="" src={radial} alt="Radial Gradiant" loading="lazy" />
                    <img className="" src={radial} alt="Radial Gradiant" loading="lazy" />
                  </div>
                  <div className="d-flex align-items-center gap-4 hero_content">
                    <p className="xsmall"><span>
                      SBX Prime offers tokenized real estate investments in
                      high-value properties. with fractional ownership, you can
                      invest in properties from premier markets like Dubai,
                      London, and singapore with ease.</span>
                    </p>
                    <a href="#" className="gradiant_btn">
                      Request Priority Access
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default HeroSection;
