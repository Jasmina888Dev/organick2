import React, { useEffect, useState } from "react";
import Background from "../../assets/images/Background.png";
import mainBanner1 from "../../assets/images/mainBanner1.png";
import mainBanner2 from "../../assets/images/mainBanner2.png";
import mainImg from "../../assets/images/mainImg.png";
import { GoArrowRight } from "react-icons/go";
import aboutUs from "../../assets/images/AboutUs.svg";
import icon1 from "../../assets/images/Icon1.svg";
import icon2 from "../../assets/images/Icon2.svg";
import icon4 from "../../assets/images/Icon4.svg";
import Product from "../../ui/Product/product";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import BackgroundMain from "../../assets/images/BackgroundMain.png";
import icon6 from "../../assets/images/icon6.svg";
import icon8 from "../../assets/images/icon8.svg";
import userPhoto from "../../assets/images/Photo.jpg";
import icon7 from "../../assets/images/Icon7.svg";
import { FaCircleArrowRight } from "react-icons/fa6";
import Photo2 from "../../assets/images/Photo2.jpg";
import bag1 from "../../assets/images/1.jpg";
import bag2 from "../../assets/images/2.png";
import bag3 from "../../assets/images/3.jpg";
import Group from "../../assets/images/Group.png";
import icon9 from "../../assets/images/Icon9.svg";

const Main = () => {
  const [count, setCount] = useState(4);
  const [count1, setCount1] = useState(4);
  const [product, setProduct] = useState([]);

  async function getShop() {
    let res = await axios(
      `https://6808b873942707d722df6f9b.mockapi.io/api/v1/organick`
    );
    let { data } = res;
    setProduct(data);
  }

  useEffect(() => {
    getShop();
  }, []);
  return (
    <div id="main">
      <div
        className="main--bg"
        style={{
          backgroundImage: `url(${Group})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <img src={icon9} alt="" />
          <h2>
            Choose the best <br /> healthier way <br /> of life
          </h2>
          <button>
            Explore Now <FaCircleArrowRight />
          </button>
        </div>
      </div>
      <div className="container">
        <div className="mainBanner">
          <img src={mainBanner1} alt="img" />
          <img src={mainBanner2} alt="img" />
        </div>
        <div className="main">
          <div className="main--block1">
            <img
              src={mainImg}
              alt="img"
              style={{
                width: "clamp(10rem, 50vw, 80rem)",
              }}
            />
            <div className="main--block1__text">
              <img
                src={aboutUs}
                alt="img"
                style={{
                  width: "clamp(3rem, 10vw, 50rem)",
                }}
              />
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
              <div className="main--block1__text--card">
                <h5>
                  <img
                    src={icon1}
                    alt="img"
                    style={{
                      width: "clamp(1rem, 4vw, 30rem)",
                    }}
                  />
                  <span>
                    Modern Agriculture <br /> Equipment
                  </span>
                </h5>
                <h5>
                  <img
                    src={icon2}
                    alt="img"
                    style={{
                      width: "clamp(1rem, 4vw, 30rem)",
                    }}
                  />
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

          <div className="main--block2">
            <img
              src={icon4}
              alt="img"
              style={{
                width: "clamp(3rem, 10vw, 50rem)",
              }}
            />
            <h1>Our Products</h1>

            <div className="main--block2__cards">
              {product.slice(0, count).map((el) => (
                <Product product={el} />
              ))}
            </div>

            <div className="btn">
              <button onClick={() => setCount(count + 4)}>
                Load More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="main--block3"
        style={{
          backgroundImage: `url(${BackgroundMain})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="main--block3__cards">
            <img
              src={icon6}
              alt="img"
              style={{
                width: "clamp(0.8rem, 1vw, 9rem)",
              }}
            />
            <h1>What Our Customer Saying?</h1>
            <div className="rating">
              <div className="star" />
              <div className="star" />
              <div className="star" />
              <div className="star" />
              <div className="star" />
            </div>
            <img
              src={userPhoto}
              alt="User Photo"
              style={{
                borderRadius: "60%",
                width: "clamp(2rem, 8vw, 15rem)",
                height: "clamp(2rem, 8vw, 15rem)",
                objectFit: "contain",
                margin: " clamp(0.5rem, 0.8vw, 9rem) 0",
              }}
            />
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy <br /> text of the printing and typesetting
              industry.
            </p>
            <h4>Sara Taylor</h4>
            <p className="consumer">Consumer</p>
            <div className="divider">
              <h3>&#x2022;</h3>
              <h3>&#x2022;</h3>
              <h3>&#x2022;</h3>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">100%</div>
                Organic
              </div>
              <div className="stat">
                <div className="stat-number">285</div>
                Active Product
              </div>
              <div className="stat">
                <div className="stat-number">350+</div>
                Organic Orchards
              </div>
              <div className="stat">
                <div className="stat-number">25+</div>
                Years of Farming
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main--block4">
        <div className="container">
          <div className="main--block4__title">
            <h1>
              <img src={icon7} alt="" />
              <br />
              <span> We Offer Organic For You</span>
            </h1>
            <button onClick={() => setCount1(count1 + 4)}>
              View All Product <FaCircleArrowRight />
            </button>
          </div>
          <div className="main--block4__text25">
            {product.slice(0, count1).map((el) => (
              <Product product={el} />
            ))}
          </div>
        </div>
      </div>

      <div className="main--block5">
        <img
          src={Photo2}
          alt="img"
          style={{
            width: "clamp(20rem, 50vw, 90rem)",
          }}
        />
        <div className="main--block5__store">
          <img
            src={icon8}
            alt="img"
            style={{
              width: "clamp(2rem, 8vw, 9rem)",
            }}
          />
          <h1>
            Econis is a Friendly <br /> Organic Store
          </h1>
          <h4>
            <span>Start with Our Company First</span> <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
          </h4>
          <h4>
            <span>Learn How to Grow Yourself</span> <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium br doloremque laudantium. Sed ut perspiciatis.
          </h4>
          <h4>
            <span>Farming Strategies of Today</span> <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
          </h4>
        </div>
      </div>

      <div className="main--block6">
        <div
          className="main--block6__cards1"
          style={{
            backgroundImage: `url(${bag1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "clamp(10rem, 35vw, 40rem)",
          }}
        >
          <button>Organic Juice</button>
        </div>
        <div
          className="main--block6__cards1"
          style={{
            backgroundImage: `url(${bag2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "clamp(10rem, 35vw, 40rem)",
          }}
        >
          <button>Organic Food</button>
        </div>
        <div
          className="main--block6__cards1"
          style={{
            backgroundImage: `url(${bag3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "clamp(10rem, 35vw, 40rem)",
          }}
        >
          <button>Nuts Cookis</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
