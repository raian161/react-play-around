import React, { useState } from "react";
import styles from "./Main.module.scss";
import img from "./img/download.jpg";

const Main = (props) => {
  return (
    <main className={styles.main}>
      <div>
        <h3>
          test product <img src={img} alt="lays" />
        </h3>
        <p>product added: {props.num} </p>
        <p>price: 10 </p>
        <p>Available in stock: {props.stock} </p>
        <button onClick={props.handleDcrement}>-</button>
        <button onClick={props.handleIncrement}>add to cart</button>
        <button onClick={props.handleIncrement}>+</button>
      </div>
    </main>
  );
};

export default Main;
