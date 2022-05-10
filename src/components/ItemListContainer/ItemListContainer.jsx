/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  let stock = 10;
  let initial = 0;

  const ciudades = [
    {
      id: "Q220",
      title: "Roma",
      continent: "Europa",
      description:
        "La capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial.",
      price: 450,
      pictureUrl:
        "https://www.caracteristicas.co/wp-content/uploads/2017/02/imperio-romano-e1562350281661.jpg",
    },
    {
      id: "Q90",
      title: "Paris",
      continent: "Europa",
      description:
        "La capital de Francia, es una importante ciudad europea y un centro mundial del arte, la moda, la gastronomía y la cultura.",
      price: 415,
      pictureUrl:
        "https://www.diarioelnorte.com.ar/wp-content/uploads/2021/12/istockphoto-1145422105-612x612-1.jpg",
    },
    {
      id: "Q64",
      title: "Berlin",
      continent: "Europa",
      description:
        "La capital alemana, data del siglo XIII. Los elementos que recuerdan la turbulenta historia de la ciudad en el siglo XX incluyen el Monumento del Holocausto y los restos del Muro de Berlín con grafitis.",
      price: 380,
      pictureUrl:
        "https://cdn2.civitatis.com/alemania/berlin/free-tour-berlin-grid.jpg",
    },
    {
      id: "Q1492",
      title: "Barcelona",
      continent: "Europa",
      description:
        "La capital cosmopolita de la región de Cataluña en España, es conocida por su arte y arquitectura. La fantástica iglesia de la Sagrada Familia y otros hitos modernistas diseñados por Antoni Gaudí adornan la ciudad.",
      price: 480,
      pictureUrl:
        "https://fotos.hoteles.net/articulos/guia-barcelona-ciudad-2400-1.jpg",
    },
    {
      id: "Q1486",
      title: "Buenos Aires",
      continent: "America",
      description:
        "Buenos Aires es la gran capital cosmopolita de Argentina. Su centro es la Plaza de Mayo, rodeada de imponentes edificios del siglo XIX, incluida la Casa Rosada, el icónico palacio presidencial que tiene varios balcones.",
      price: 460,
      pictureUrl:
        "https://www.ipsa.org/sites/default/files/news-announcements/news/image-146716_1.jpg",
    },
    {
      id: "Q8678",
      title: "Rio de Janeiro",
      continent: "America",
      description:
        "Río de Janeiro es una enorme ciudad costera de Brasil, famosa por sus playas de Copacabana e Ipanema, la estatua del Cristo Redentor de 38 m de alto sobre el cerro del Corcovado y el morro Pan de Azúcar, una cima de granito con teleféricos que ascienden a su cima.",
      price: 475,
      pictureUrl:
        "https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744__480.jpg",
    },
    {
      id: "Q987",
      title: "Nueva Delhi",
      continent: "Asia",
      description:
        "Nueva Delhi​ es la capital de la República de la India y sede del poder ejecutivo, legislativo y judicial de su Gobierno. Está situada en la metrópolis de Delhi y es uno de sus nueve distritos.",
      price: 495,
      pictureUrl:
        "https://www.turismoviajar.com/wp-content/uploads/2019/09/Delhi-India.jpg",
    },
    {
      id: "Q1490",
      title: "Tokio",
      continent: "Asia",
      description:
        "Tokio, la ajetreada capital de Japón, mezcla lo ultramoderno y lo tradicional, desde los rascacielos iluminados con neones hasta los templos históricos. El opulento santuario Shinto Meiji es conocido por su puerta altísima y los bosques circundantes.",
      price: 500,
      pictureUrl:
        "https://ep01.epimg.net/elviajero/imagenes/2020/04/30/actualidad/1588237365_988791_1588237524_noticia_normal.jpg",
    },
  ];

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

      <div className="row col-12" style={{ float: "center" }}>
        <ItemCount
          stock={stock}
          initial={initial}
          onAdd={() => console.log("Se agregaron los elementos")}
        ></ItemCount>
      </div>
      <div className="row col-12" style={{ float: "center", margin: "1%" }}>
        <ItemList ciudades={ciudad}></ItemList>
      </div>
    </div>
  );
};

export default ItemListContainer;
