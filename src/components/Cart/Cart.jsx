import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // const cart = props.cart // option 1
  //   const { cart } = props; // option 2
    // console.log(cart);

  let totalPrice = 0;
  let totalShipping = 0;
    for (const product of cart) {
      totalPrice = totalPrice + product.price;
      totalShipping = totalShipping + product.shipping;
  }
  const tex = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tex;
  return (
    <div className="cart">
      <h3>Cart summary</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total price: ${totalPrice}</p>
      <p>Total Shipping: ${totalShipping.toFixed(2)}</p>
      <p>Tex: ${tex.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
