/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
import React from "react";
import "./ItemCount.css";
import { useState, useEffect } from "react";

const ItemCount = ({ visible, stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);
  const [v, setV] = useState(visible);
  function onSumar() {
    setContador(contador + 1);
  }
  function onRestar() {
    setContador(contador - 1);
  }
  useEffect(() => {
    setV(visible);

    return () => {};
  }, [visible]);

  return (
    <div className="row col-12 " style={{ float: "center", display: v }}>
      <div className="row col-12 count" style={{ float: "center" }}>
        <div className="row col-12" style={{ display: "flex" }}>
          <button
            className="btn btn-outline-warning"
            onClick={contador > initial ? onRestar : () => {}}
            style={{ width: "4rem" }}
          >
            - 1
          </button>
          <h5 className="txt" style={{ width: "9rem" }}>
            Pasajeros : {contador}
          </h5>
          <button
            className="btn btn-outline-warning"
            onClick={contador < stock ? onSumar : () => {}}
            style={{ width: "4rem" }}
          >
            + 1
          </button>
        </div>
      </div>
      <div
        className="row col-12 boton container-fluid"
        style={{ display: "flex", float: "center" }}
      >
        <button
          className="btn btn-outline-info"
          onClick={() => onAdd(contador)}
          style={{ width: "18rem" }}
        >
          Agregar al carrito {contador}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
