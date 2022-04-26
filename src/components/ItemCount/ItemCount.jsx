/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
import React from "react";
import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

 const [contador, setContador] = useState(initial);
  function onSumar(){
    setContador(contador + 1);

  }
  function onRestar(){
    setContador(contador - 1);
  }
  return (
    <div className="row">
    <div className="row" style={{ float: "center", margin: "2%" }}>
      <div style={{ float: "left", display: "flex" }}>
        <button
          className="btn btn-outline-warning"
          onClick={contador > initial ? onRestar : console.log("Ya no puede restar")}
          style={{ width: "4rem" }}
        >
          - 1
        </button>
        <h5 className="txt" style={{ width: "11rem" }}>
          Pasajeros : {contador}
        </h5>
        <button
          className="btn btn-outline-warning"
          onClick={contador < stock ? onSumar : console.log("Ya no puede sumar")}
          style={{ width: "4rem" }}
        >
          + 1
        </button>
      </div>
    </div>
    <div className="row boton" style={{ float: "center"}}>
    <button
          className="btn btn-outline-info"
          onClick={onAdd}
          style={{ width: "18.9rem" }}
        >Agregar al carrito</button>
    </div>
    </div>
  );
};

export default ItemCount;
