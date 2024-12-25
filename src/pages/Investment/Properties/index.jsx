import burjkhalifa from "../../../assets/images/burjkhalifa.png";
import samsunghub from "../../../assets/images/samsunghub.png";
import centrallondon from "../../../assets/images/centrallondon.png";
const propertyData = [
  {
    title: "Burj Khalifa Office Floor (Dubai)",
    listItems: [
      { text: "Investment Type:", boldtext: "Office Full- Floor | 8,800 SqFt" },
      { text: "Expected Yield:", boldtext: "8.2% p.a." },
      { text: "Expected Token Value:", boldtext: "1500 USDT" },
      {
        text: "Asset Value:",
        boldtext: "50,000,000 AED (Approx: 13,700,000 USDT)",
      },
      { text: "Total Tokens On-Chain:", boldtext: "8,800" },
    ],
    buttonText: "Sign up for Early Bird Access",
    buttonLink: "#",
    imageSrc: burjkhalifa,
  },
  {
    title: "Samsung Hub (Singapore)",
    listItems: [
      { text: "Investment Type:", boldtext: "Office Full-Floor | 3,185 SqFt" },
      { text: "Expected Yield:", boldtext: "3.7% p.a." },
      { text: "Expected Token Value:", boldtext: "3,600 USDT" },
      {
        text: "Asset Value:",
        boldtext: "15,000,000 SGD (Approx: 11,500,000 USDT)",
      },
      { text: "Total Tokens On-Chain:", boldtext: "3,185" },
    ],
    buttonText: "Sign up for Early Bird Access",
    buttonLink: "#",
    imageSrc: samsunghub,
  },
  {
    title: "Central London Office Building (UK)",
    listItems: [
      { text: "Investment Type:", boldtext: "Office Building | 13,146 SqFt" },
      { text: "Expected Yield:", boldtext: "6.4% p.a." },
      { text: "Expected Token Value:", boldtext: "1,050 USDT" },
      {
        text: "Asset Value:",
        boldtext: "10,500,000 GBP (Approx: 13,700,000 USDT)",
      },
      { text: "Total Tokens On-Chain:", boldtext: "13,146" },
    ],
    buttonText: "Sign up for Early Bird Access",
    buttonLink: "#",
    imageSrc: centrallondon,
  },
];
const Properties = () => {
  return (
    <>
      <section className="properties">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-lg-9 col-xl-8">
              <div className="d-grid gap-3 mb-5 text-center">
                <h1 className="xlarge">Featured Properties Property</h1>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-12 col-md-12">
              {propertyData.map((property, index) => (
                <div className="property_data" key={index}>
                  <img src={property.imageSrc} />
                  <div className="property_content">
                    <h2 className="medium">{property.title}</h2>
                    {property.listItems.map((items, idx) => (
                      <div className="" key={idx}>
                        <p className="large_text">{items.text} <b>{items.boldtext}</b></p>
                      </div>
                    ))}
                    <a href={property.buttonLink} className="btns sm_btn">
                      {property.buttonText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Properties;
