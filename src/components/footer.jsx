// import React from 'react'
import ftlogo from "../../src/assets/images/ftlogo.svg";

export const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12">
                <div className="text-center">
                  <h2 className="normal">
                    Lets unite if you are an investor or landowner with lofty
                    ambitions and a grand vision
                  </h2>
                  <p className="medium_text">
                    <i>
                      Join the future of real estate today with secure,
                      flexible, and transparent investments
                    </i>
                  </p>
                  <a href="#" className="btns sm_btn">
                    Get Started Now{" "}
                  </a>
                </div>
                <div className="ft_midle_bar">
                  <img src={ftlogo} />
                  <div className="">
                    <h3 className="xsmall">CONTACT:</h3>
                    <ul>
                      <li>info@SBX.com</li>
                      <li>+971 4 568 1972</li>
                    </ul>
                  </div>
                  <div className="">
                    <h3 className="xsmall">Find Us</h3>
                    <ul className="find_us">
                      <li>
                        8th Floor, The Offices 4, One Central, Dubai World Trade
                        Center, Dubai, UAE
                      </li>
                    </ul>
                  </div>
                  <div className="ft_menu">
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Ecosystem</a></li>
                      <li><a href="#">Technology</a></li>
                      <li><a href="#">Products</a></li>
                      <li><a href="#">Services</a></li>
                    </ul>
                  </div>
                </div>
                <div className="btm_footer">
                  <p className="mb-0 mt-4 text-center">
                    <i>©2024 SBX Prime. All rights reserved</i>
                  </p>
                  <p className="mb-0 mt-4 text-center">
                    <i>Design & Development by <a href="https://vizzwebsolutions.com/">Vizz Web Solutions</a></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};
