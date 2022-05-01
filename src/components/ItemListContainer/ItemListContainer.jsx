/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import roma from "../ItemListContainer/roma.jpg";
import barcelona from "../ItemListContainer/barcelona.jpg";
import berlin from "../ItemListContainer/berlin.jpeg";
import paris from "../ItemListContainer/paris.jpg";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  let stock = 10;
  let initial = 0;
  const ciudades = [
    {
      id: 1,
      title: "Roma",
      description:
        "La capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial.",
      price: 450,
      pictureUrl: "https://www.caracteristicas.co/wp-content/uploads/2017/02/imperio-romano-e1562350281661.jpg",
    },
    {
      id: 2,
      title: "Paris",
      description:
        "La capital de Francia, es una importante ciudad europea y un centro mundial del arte, la moda, la gastronomía y la cultura.",
      price: 415,
      pictureUrl:"https://www.diarioelnorte.com.ar/wp-content/uploads/2021/12/istockphoto-1145422105-612x612-1.jpg",
    },
    {
      id: 3,
      title: "Berlin",
      description:
        "La capital alemana, data del siglo XIII. Los elementos que recuerdan la turbulenta historia de la ciudad en el siglo XX incluyen el Monumento del Holocausto y los restos del Muro de Berlín con grafitis.",
      price: 380,
      pictureUrl:"https://cdn2.civitatis.com/alemania/berlin/free-tour-berlin-grid.jpg",
    },
    {
      id: 4,
      title: "Barcelona",
      description:
        "La capital cosmopolita de la región de Cataluña en España, es conocida por su arte y arquitectura. La fantástica iglesia de la Sagrada Familia y otros hitos modernistas diseñados por Antoni Gaudí adornan la ciudad.",
      price: 480,
      pictureUrl: "https://fotos.hoteles.net/articulos/guia-barcelona-ciudad-2400-1.jpg",
    },
  ];

  const [ciudad, setCiudad] = useState([]);

  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ciudades);
      }, 2000);
    });

    pedido.then(
        (res) => setCiudad(res),
        (err) => {
          console.log("error", err);
        }
      )
      .catch((err) => console.log(err));
    return () => {};
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid

    <div className="col-12" id="listContainer">
      <h3 className="txt1">{greeting}</h3>
      <div className="row col-12" style={{ float: "center" }}>
        <ItemCount
          stock={stock}
          initial={initial}
          onAdd={() => console.log("Se agregaron los elementos")}
        ></ItemCount>
      </div>
      <div className="row col-12" style={{ float: "center" }}>
        <ItemList ciudades={ciudad}></ItemList>
      </div>
    </div>
  );
};

export default ItemListContainer;
