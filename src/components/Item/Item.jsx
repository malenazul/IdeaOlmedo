import React from "react";
import "./Item.css";

const Item = ({imagen, texto, nombre, precio }) => {
  return (
    <div
      className="card"
      style={{
        width: "20rem",
        margin: "0.3%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <h3 className="txt2t">{nombre}</h3>
      <img src={imagen} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <p className="card-text txt3">{texto}</p>
        <button
          className="btn btn-outline-info"
          style={{ width: "10rem" }}
        >Mas Detalles</button>
     <h5 className="txt2i">Precio:  €{precio}</h5>
    </div>
      </div>
   
  );
};

export default Item;
