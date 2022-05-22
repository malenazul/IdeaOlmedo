import React from 'react'
import "./Card.css";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/CartContext";
import { useContext } from "react";

const Card = ({ imagen, texto, nombre, precio, id, q }) => {
    const {removeItem} = useContext(GlobalContext);
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
    <h4 className="txtd">{texto}</h4>
        <h4 className="txtd">Precio: USD {precio}</h4>
    <div className="card-body">
    <div
        className="row col-12 boton container-fluid"
        style={{ display: "flex", float: "center" }}
      >
        <button
          className="btn btn-outline-info"
          onClick={() => removeItem(id, q, precio)}
          style={{ width: "18rem" }}
        >
          Eliminar {q} Producto/s 
        </button>
      </div>
    </div>
  </div>
  )
}

export default Card