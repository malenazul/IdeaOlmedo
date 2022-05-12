/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalStateContext";

const ItemListContainer = ({ greeting }) => {
  const { ciudades } = useContext(GlobalContext);

  const [ciudad, setCiudad] = useState([]);
  const { continente } = useParams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function getCont(res) {
    if (continente) {
      setCiudad(
        ciudades.filter((c, i) =>
          continente.length > 0 ? continente.indexOf(c.continent) === 0 : true
        )
      );
    } else {
      setCiudad(ciudades);
    }
  }

  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(continente);
      }, 1000);
    });

    pedido
      .then(
        (res) => getCont(res),
        (err) => {
          console.log("error", err);
        }
      )
      .catch((err) => console.log(err));
    return () => {};
  }, [continente]);

  return (
    <div className="col-12" id="listContainer">
      <div
        className="row col-12"
        style={{ float: "center", display: "flex", margin: "1%" }}
      >
        <h3 className="txt1">{greeting}</h3>
      </div>

      <div className="row col-12" style={{ float: "center" }}></div>
      <div className="row col-12" style={{ float: "center", margin: "1%" }}>
        <ItemList ciudades={ciudad}></ItemList>
      </div>
    </div>
  );
};

export default ItemListContainer;
