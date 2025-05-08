import React from "react";

const Product = ({ product }) => {
  return (
    <div id="">
      <div className="product">
        <div className="product--card">
          <div className="product--card__block">
            <button>{product.category}</button>
            <img
              src={product.image}
              alt="img"
              style={{
                width: "clamp(1rem, 10vw, 20rem)",
                margin:
                  "0 clamp(0.1rem, 1vw, 10rem) 0  clamp(0.1rem, 1.5vw, 10rem)",
              }}
            />
            <h2>{product.name}</h2>
            <hr />
            <div className="product--card__block--text">
              <h3>{product.price}</h3>
              <h4> {"★".repeat(product.rating)}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
