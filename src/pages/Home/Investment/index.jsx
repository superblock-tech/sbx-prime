import appscreens from "../../../assets/images/appscreens.png";

const Investment = () => {
  return (
    <>
      <section className="investment_section">
        <div className="container">
          <div className="row align-items-centerm justify-content-between">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <h2 className="xlarge">Real Estate Investment Simplified</h2>
            </div>
            <div className="col-12 col-md-6 col-lg-5 col-xl-5">
              <p
                className="body_text"
                data-mdb-animation-init
                data-mdb-toggle="animation"
                data-mdb-animation="slide-in-left"
                data-mdb-animation-start="onScroll"
                data-mdb-animation-on-scroll="repeat"
              >
                SBX Prime offers a 3-step process that allows you to seamlessly
                invest in prime properties through our tokenization platform.
                Learn how we make real estate investment easy:
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-md-12">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="carousel-caption d-none d-md-block">
                      <h2 className="medium">First slide label</h2>
                      <p className="body_text">
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption d-none d-md-block">
                      <h2 className="medium">Second slide label</h2>
                      <p className="body_text">
                        Some representative placeholder content for the second
                        slide.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="investment_card">
                <div className="investment_content">
                  <h3 className="medium">Discover:</h3>
                  <p className="body_text">
                    Browse institutional-grade assets standardized to 1 square
                    foot tokens.
                  </p>
                  <a href="" className="btns sm_btn">
                    Learn How SBX Prime Works
                  </a>
                </div>
                <img
                  src={appscreens}
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
      </section>
    </>
  );
};

export default Investment;
