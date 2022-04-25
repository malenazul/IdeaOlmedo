/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
import React from "react";
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = () => {
  const [contador, setContador] = useState(0);
  const [stock, setStock] = useState(10);

  function onAdd() {
    setContador(contador + 1);
    setStock(stock - 1);
  }
  function onSubstract() {
    setContador(contador - 1);
    setStock(stock + 1);
  }
  return (
    <div className="row" style={{ float: "center", margin: "2%" }}>
      <div style={{ float: "left", display: "flex" }}>
        <button
          className="btn btn-outline-warning"
          onClick={contador > 0 ? onSubstract : ""}
          style={{ width: "10%" }}
        >
          - 1
        </button>
        <h5 className="txt" style={{ width: "30%" }}>
          Pasajeros : {contador}
        </h5>
        <button
          className="btn btn-outline-warning"
          onClick={contador < 10 ? onAdd : ""}
          style={{ width: "10%" }}
        >
          + 1
        </button>
        <h5 className="ms-5 txt" style={{ width: "60%", float: "right" }}>
          Asientos Disponibles : {stock}
        </h5>
      </div>
    </div>
  );
};

export default ItemCount;
