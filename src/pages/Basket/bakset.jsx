import React, { useEffect } from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/context";
import { TiDelete } from "react-icons/ti";

const Basket = () => {
  const { basket, setBasket } = useContext(ProductContext);

  function delPro(Id) {
    let res = basket.filter((el) => {
      return el.id !== Id;
    });
    setBasket(res);
  }

  useEffect(() => {
    delPro(basket);
    window.scroll(0, 0);
  }, []);

  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <div className="basket--content">
            {basket.map((el) => (
              <div className="basket--content__block">
                <img src={el.image} alt="img" width={100} />
                <h1>{el.title}</h1>
                <div className="basket--content__block--count">
                  <h2> {el.price}</h2>
                  <div className="basket--content__block--count__quantity">
                    <button>-</button>
                    <h5>{el.quantity}</h5>
                    <button>+</button>
                  </div>
                </div>
                <button>{el.category}</button>
                <a onClick={() => delPro(el.id)}>
                  <TiDelete />
                </a>
              </div>
            ))}
          </div>
          <div className="basket--bar">
            <div className="basket--bar__block">
              <div
                className="basket--bar__block--scroll"
                style={{
                  background:
                    basket.length === 1
                      ? "red"
                      : basket.length === 2
                      ? "yellowgreen"
                      : basket.length === 3
                      ? "yellow"
                      : basket.length === 4
                      ? "orange"
                      : basket.length === 5
                      ? "red"
                      : "",

                  width:
                    basket.length === 1
                      ? "20%"
                      : basket.length === 2
                      ? "40%"
                      : basket.length === 3
                      ? "60%"
                      : basket.length === 4
                      ? "80%"
                      : basket.length === 5
                      ? "100%"
                      : "",
                }}
              >
                <h2>
                  {basket.length === 1
                    ? "20%"
                    : basket.length === 2
                    ? "40%"
                    : basket.length === 3
                    ? "60%"
                    : basket.length === 4
                    ? "80%"
                    : basket.length === 5
                    ? "100%"
                    : ""}
                </h2>
              </div>
              {basket.length === 5 ? (
                <h3>
                  <i>The basket is full!</i>
                </h3>
              ) : basket.length === 0 ? (
                <h3>
                  <i
                    style={{
                      color: "green",
                    }}
                  >
                    Can be added to cart!
                  </i>
                </h3>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
