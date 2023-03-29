import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { name, price, img, seller, ratings } = props.product;
  const addToCartHandler = props.addToCartHandler;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <p>Manufacturer:{seller}</p>
        <p>Rating: {ratings} stars</p>
      </div>
      <button
        onClick={() => addToCartHandler(props.product)}
        className="btn-cart"
      >
        Add To Cart
        <FontAwesomeIcon className="shopping-cart" icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Product;
