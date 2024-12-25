import { useState } from "react";
import radial from "../../../assets/images/radial.svg";

function Explore() {
  const [,] = useState(null);
  return (
    <>
      <section className="investment_section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-lg-9 col-xl-8">
              <div className="d-grid gap-3 mb-5 text-center">
                <h1 className="xlarge">Explore Prime Commercial Properties</h1>
                <h2>
                  <span>Curated Asset Proposals</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-12 col-md-6 col-lg-6" style={{position: "relative"}}>
              <div className="main_bx">
                <h3 className="medium">Professionally Curated Assets</h3>
                <p className="medium_text">
                  Our asset selection is curated by experienced professionals
                  who specialize in institutional-grade properties. We focus on
                  trophy assets in prime locations, offering a secure and
                  high-yield investment experience.
                </p>
              </div>
              <div className="radial_img">
                <img
                  className=""
                  src={radial}
                  alt="Radial Gradiant"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6" style={{position: "relative"}}>
              <div className="main_bx">
                <h3 className="medium">Professionally Curated Assets</h3>
                <p className="medium_text">
                  Our asset selection is curated by experienced professionals
                  who specialize in institutional-grade properties. We focus on
                  trophy assets in prime locations, offering a secure and
                  high-yield investment experience.
                </p>
              </div>
              <div className="radial_img">
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
      </section>
    </>
  );
}
export default Explore;
