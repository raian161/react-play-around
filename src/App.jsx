import React, { Fragment, useState } from "react";

import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [num, setNum] = useState(0);
  const [stock, setStock] = useState(10);
  const handleIncrement = () => {
    if (stock !== 0) {
      setNum(num + 1);
      setStock(stock - 1);
    }
  };
  const handleDcrement = () => {
    if (num !== 0) {
      setNum(num - 1);
      setStock(stock + 1);
    }
  };
  return (
    <Fragment>
      <Header num={num} stock={stock} />
      <Main
        stock={stock}
        num={num}
        handleDcrement={handleDcrement}
        handleIncrement={handleIncrement}
      />
      <Footer />
    </Fragment>
  );
};

export default App;
