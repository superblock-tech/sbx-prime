import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    investmentInterest: "",
    receiveUpdates: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <section className="contact_section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="title_bx text-center">
                <h2 className="xlarge">
                  <i>Join the SBX Prime Community</i>
                </h2>
                <p className="body_text">
                  Sign up to receive early access to investment opportunities
                  and stay up to date with platform developments.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-12">
              <form onSubmit={handleSubmit} className="contact_form">
                <div className="form_group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="Name"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                    required
                  />

                  <select
                    id="investmentInterest"
                    name="investmentInterest"
                    value={formData.investmentInterest}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select Interest Level
                    </option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between">
                  <div>
                    <label className="customCheckbox">
                      <input
                        type="checkbox"
                        id="custom_check"
                        className="custom-checkbox"
                      />
                      <span className="checkmark"></span>I would like to receive
                      early bird opportunities.
                    </label>
                  </div>

                  <button type="submit" className="btns sm_btn">
                    Submit for Priority Access
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
