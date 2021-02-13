import React, { useState } from "react";
import styles from "./Main.module.scss";

const Main = () => {
  const [num, setNum] = useState(0);
  const handleIncrement = () => {
    setNum(num + 1);
  };
  const handleIcrement = () => {
    if (num !== 0) {
      setNum(num - 1);
    }
  };

  return (
    <main className={styles.main}>
      <div>
        <h3>test product</h3>
        <p>product added: {num} </p>
        <button onClick={handleIcrement}>-</button>
        <button>add to cart</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </main>
  );
};

export default Main;
