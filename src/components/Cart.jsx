import React from "react";
import styles from "./Cart.module.scss";

const Cart = (props) => {
  return (
    <cart className={styles.cart}>
      {""}
      <p>cart {props.num}</p>
      <p>price {props.price}</p>
      <p>stock {props.stock}</p>
      <button onClick={props.handleDcrement}>-</button>
      <button onClick={props.handleIncrement}>+</button>
    </cart>
  );
};

export default Cart;
