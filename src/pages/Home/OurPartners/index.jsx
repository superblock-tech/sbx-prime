import AWS_Logo from "../../../assets/images/AWS_Logo.svg";
import Azure_Logo from "../../../assets/images/Azure_Logo.svg";
import CB_Richard from "../../../assets/images/CB_Richard.svg";
import chainlink_logo from "../../../assets/images/chainlink_logo.svg";
import Colliers from "../../../assets/images/Colliers.svg";
import Deloitte from "../../../assets/images/Deloitte.svg";
import ey_logo from "../../../assets/images/ey_logo.svg";
import JLL_Logo from "../../../assets/images/JLL_Logo.svg";
import KPMG_logo from "../../../assets/images/KPMG_logo.svg";
import Polygon_Logo from "../../../assets/images/Polygon_Logo.svg";
import pwc_logo from "../../../assets/images/pwc_logo.svg";
import Savills from "../../../assets/images/Savills.svg";

const partnersData = [
  { imageSrc: JLL_Logo },
  { imageSrc: CB_Richard },
  { imageSrc: Savills },
  { imageSrc: Colliers },
  { imageSrc: pwc_logo },
  { imageSrc: Deloitte },
  { imageSrc: ey_logo },
  { imageSrc: KPMG_logo },
  { imageSrc: AWS_Logo },
  { imageSrc: Polygon_Logo },
  { imageSrc: Azure_Logo },
  { imageSrc: chainlink_logo },
];

const OurPartners = () => {
  return (
    <>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="marquee-wrapper">
                <div className="marquee">
                  <div className="marquee-content">
                    {partnersData.concat(partnersData).map((partner, index) => (
                      <div className="logo-item" key={index}>
                        <img src={partner.imageSrc} alt="Partner Logo" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPartners;
