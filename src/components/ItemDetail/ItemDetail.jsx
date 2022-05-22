import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/CartContext";

const ItemDetail = ({
  ciudad,
  imagen,
  texto,
  pais,
  region,
  population,
  price,
  id,
  cont
}) => {
  const [cantidad, setCantidad] = useState();
  let stock = 10;
  let initial = 1;
  const [visible, setVisible] = useState("block");
  const { ciudades, addItem, clear, isInCart, removeItem, carrito, setCarrito } = useContext(GlobalContext);

  function onAdd(contador) {
    setCantidad(contador);
    setVisible("none");
    let is = isInCart(id);
    if(!is){
      addItem({
        id: id,
        title: ciudad,
        continent: cont,
        description: texto,
        price: price,
        pictureUrl: imagen,
        quantity : contador
      })
    }
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
            ? console.log("Se agregaron los elementos" +  carrito.map((e, i)=>{
              console.log(e)
            }))
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
              <div className = "col-12">
              <button
                className="btn btn-outline-info"
               
                style={{ width: "20rem", margin: "0.3%",
                display: "flex",
                justifyContent: "space-around" }}
              >
                <NavLink className="nav-link" to="/Cart">
                  Terminar mi compra
                </NavLink>
              </button>
              <button
                className="btn btn-outline-info"
                style={{ width: "20rem", margin: "0.3%",
                display: "flex",
                justifyContent: "space-around" }}
              >
                <NavLink className="nav-link" to="/">
                  Seguir Comprando
                </NavLink>
              </button>
              </div>
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
