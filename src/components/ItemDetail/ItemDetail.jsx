import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ItemDetail = ({
  ciudad,
  imagen,
  texto,
  pais,
  region,
  population,
  price,
}) => {
  const [cantidad, setCantidad] = useState();
  let stock = 10;
  let initial = 0;
  const [visible, setVisible] = useState("block");
  function onAdd(contador) {
    setCantidad(contador);
    setVisible("none");
  }

  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(onAdd);
      }, 0);
    });

    pedido
      .then(
        (res) =>
          cantidad > 0
            ? console.log("Se agregaron los " + cantidad + " elementos")
            : "",
        (err) => {
          console.log("error", err);
        }
      )
      .catch((err) => console.log(err));
    return () => {};
  }, [cantidad]);

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
        <ItemCount
          visible={visible}
          stock={stock}
          initial={initial}
          onAdd={onAdd}
        ></ItemCount>
        <>
          {visible === "none" ? (
            <React.Fragment>
              <button
                className="btn btn-outline-info"
                style={{ width: "20rem" }}
              >
                <NavLink className="nav-link" to="/Cart">
                  Finalizar Compra de {cantidad} Unidades
                </NavLink>
              </button>
            </React.Fragment>
          ) : (
            ""
          )}
        </>
      </div>
    </>
  );
};

export default ItemDetail;
