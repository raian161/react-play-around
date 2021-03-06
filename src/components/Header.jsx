import React from "react";
import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={styles.header}>
      {""}
      <p>cart {props.num}</p>
      <p>price {props.price}</p>
      <p>stock {props.stock}</p>
      <button onClick={props.handleDcrement}>-</button>
      <button onClick={props.handleIncrement}>+</button>
    </header>
  );
};

export default Header;
