import React, { Fragment, useState } from "react";

import "./App.scss";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [num, setNum] = useState(0);
  const [stock, setStock] = useState(10);
  const [price, setPrice] = useState(0);
  const handleIncrement = () => {
    if (stock !== 0) {
      setNum(num + 1);
      setStock(stock - 1);
      setPrice(price + 10);
    }
  };
  const handleDcrement = () => {
    if (num !== 0) {
      setNum(num - 1);
      setStock(stock + 1);
      setPrice(price - 10);
    }
  };
  return (
    <Fragment>
      <Header
        num={num}
        stock={stock}
        price={price}
        handleDcrement={handleDcrement}
        handleIncrement={handleIncrement}
      />
      <Main
        stock={stock}
        price={price}
        num={num}
        handleDcrement={handleDcrement}
        handleIncrement={handleIncrement}
      />
      <Cart
        stock={stock}
        price={price}
        num={num}
        handleDcrement={handleDcrement}
        handleIncrement={handleIncrement}
      />
      <Footer />
    </Fragment>
  );
};

export default App;
