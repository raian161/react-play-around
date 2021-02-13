import React from "react";
import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={styles.header}>
      {" "}
      <p>cart {props.num}</p>
      <p>stock {props.stock}</p>
    </header>
  );
};

export default Header;
