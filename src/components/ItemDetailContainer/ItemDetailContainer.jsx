import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/CartContext";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const { detail } = useParams();
  const [todos, setTodos] = useState();
  const [ciudad, setCiudad] = useState([]);
  const { ciudades } = useContext(GlobalContext);

  const options = {
    method: "GET",
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/` + detail,
    params: { languageCode: "es" },
    headers: {
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      "X-RapidAPI-Key": "b55ac38178msh39d55c0f09c4399p1b9677jsn8c13eb6a907a",
    },
  };

  const getItem = async () => {
    const response = await axios.request(options);
    const responseJSON = await response.data;

    setTodos(responseJSON);
  };
  function getCity() {
    const citi = ciudades.filter((c, i) =>
      detail.length > 0 ? detail.indexOf(c.id) === 0 : true
    );
    setCiudad(citi[0]);
  }

  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(getItem());
      }, 1000);
    });
    pedido
      .then(
        (res) => getCity(),
        (err) => {
          console.log("error", err);
        }
      )
      .catch((err) => console.log(err));

    return () => {};
  }, [detail]);

  return (
    <div className="card col-11 m-2">
      <>
        {!todos ? (
          <Loader loading="true" />
        ) : (
          <React.Fragment>
            <ItemDetail
              ciudad={ciudad["title"]}
              imagen={ciudad["pictureUrl"]}
              texto={ciudad["description"]}
              pais={todos.data["country"]}
              region={todos.data["region"]}
              population={todos.data["population"]}
              price={ciudad["price"]}
              id={ciudad["id"]}
              cont={ciudad["continent"]}
            ></ItemDetail>
          </React.Fragment>
        )}
      </>
    </div>
  );
};

export default ItemDetailContainer;
