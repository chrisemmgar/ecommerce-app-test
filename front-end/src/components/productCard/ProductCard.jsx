import React from "react";

const ProductCard = (item) => {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} />
      <h2> {item.name} </h2>
      <p> {item.price} </p>
    </div>
  );
};

export default ProductCard;