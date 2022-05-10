import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({
  ciudad,
  imagen,
  texto,
  pais,
  region,
  population,
  price
}) => {
  return (
    <>
      <div style={{ margin: "1%" }}>
        <h1 className="txta">{ciudad}</h1>
        <img
          src={imagen}
          className="card-img-top"
          alt={ciudad}
          style={{ width: "40%", height: "40%", margin: "1%" }}
        />
        <h4 className="txtd">{texto}</h4>
        <h4 className="txtd">Pais: {pais}</h4>
        <h4 className="txtd">Región: {region}</h4>
        <h4 className="txtd">Habitantes: {population}</h4>
        <h4 className="txtd">Precio: USD {price}</h4>
      </div>
    </>

  );
};

export default ItemDetail;
