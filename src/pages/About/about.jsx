import React from "react";
import banner from "../../assets/images/Banner.png";
import image from "../../assets/images/Image1.png";
import AboutUs from "../../assets/images/AboutUs.svg";
import icon1 from "../../assets/images/Icon1.svg";
import icon2 from "../../assets/images/Icon2.svg";
import { GoArrowRight } from "react-icons/go";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <img
          src={banner}
          alt="img"
          style={{
            width: "clamp(20rem, 75vw, 100rem)",
          }}
        />
        <div className="about">
          <div className="about--block1">
            <img
              src={image}
              alt="img"
              style={{
                width: "clamp(10rem, 45vw, 80rem)",
              }}
            />
            <div className="about--block1__text">
              <img src={AboutUs} alt="img" />
              <h1>
                We do Creative <br />
                Things for Success
              </h1>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased <br /> to been the industry's standard dummy
                text ever since the 1500s, when an <br /> unknown printer took a
                galley. <br />
                <br /> Simply dummy text of the printing and typesetting
                industry. Lorem had ceased <br /> to been the industry's
                standard dummy text ever since the 1500s, when an <br />
                unknown printer took a galley.
              </p>
              <div className="about--block__text--card">
                <h5>
                  <img src={icon1} alt="img" />
                  <span>
                    Modern Agriculture <br /> Equipment
                  </span>
                </h5>
                <h5>
                  <img src={icon2} alt="img" />
                  <span>
                    No growth <br /> hormones are used
                  </span>
                </h5>
              </div>
              <button>
                Explore More <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
