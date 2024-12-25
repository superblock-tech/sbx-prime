import logo from "../assets/images/logo.svg";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GlobalIcon } from "../../src/components/svg/page.jsx";
import { NavLink } from "react-router-dom";
function Header() {
  const [,] = useState(null);
  const boxRef = useRef(null);
  useEffect(() => {
    gsap.set(boxRef.current, { opacity: 0, y: -50 });
    gsap.to(boxRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const links = {
    Investments: "/investment",
    "How it works": "/how-it-work",
    FAQs: "/faqs",
    Technology: "/technology",
  };
  return (
    <>
      <header className="">
        <nav className="navbar navbar-expand-lg" ref={boxRef}>
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {["Investments", "How it works", "FAQs", "Technology"].map(
                  (label, index) => (
                    <li key={index} className="nav-item">
                      <NavLink
                        className="nav-link"
                        to={links[label]}
                        activeClassName="active"
                      >
                        {label}
                      </NavLink>
                    </li>
                  )
                )}
                {/* <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="investment">
                    Investments
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="how-it-work">
                    How it works
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="faqs">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="technology">
                    Technology
                  </a>
                </li> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <GlobalIcon />
                    Eng
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Eng
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        URD
                      </a>
                    </li>
                  </ul>
                </li>
                <a href="#" className="btns">
                  Sign up
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
