import React, { useState, useEffect } from "react";
import "./Item.css";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { NavLink } from "react-router-dom";




const Item = ({ imagen, texto, nombre, precio, id }) => {
  const [visible, setVisible] = useState(false);

  function onDetail() {
    visible === false ? setVisible(true) : setVisible(false);

  }

  useEffect(() => {
    return () => {};
  }, []);


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
        <button
          className="btn btn-outline-info"
          style={{ width: "10rem" }}

        >
          <NavLink className="nav-link" to={`/Item/${id}`}>
            Mas Detalles
          </NavLink>
        </button>
      </div>


        
      
    </div>
  );
};

export default Item;
