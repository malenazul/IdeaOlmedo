/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
import React from "react";
import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);
  function onSumar() {
    setContador(contador + 1);
  }
  function onRestar() {
    setContador(contador - 1);
  }
  return (
    <div className="row col-12 " style={{ display: "flex", float: "center" }}>
      <div className="row col-12 count" style={{ float: "center" }}>
        <div className="row col-12" style={{ display: "flex" }}>
          <button
            className="btn btn-outline-warning"
            onClick={
              contador > initial ? onRestar : console.log("Ya no puede restar")
            }
            style={{ width: "4rem" }}
          >
            - 1
          </button>
          <h5 className="txt" style={{ width: "9rem" }}>
            Pasajeros : {contador}
          </h5>
          <button
            className="btn btn-outline-warning"
            onClick={
              contador < stock ? onSumar : console.log("Ya no puede sumar")
            }
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
          onClick={onAdd}
          style={{ width: "18rem" }}
        >
          Agregar al carrito {contador}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
