import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { db } from "../../service/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { detail } = useParams();
  const [todos, setTodos] = useState();
  const [ciudad, setCiudad] = useState([]);

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

  useEffect(() => {
    const miproducto = doc(db, "ciudades", detail);
    getDoc(miproducto)
      .then((prod) => {
        setCiudad({ id: prod.id, ...prod.data() });
      })
      .then(() => {
        getItem();
      });

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
              texto={ciudad["text"]}
              pais={todos.data["country"]}
              region={todos.data["region"]}
              population={todos.data["population"]}
              price={ciudad["price"]}
              id={ciudad["id"]}
              cont={ciudad["categoryID"]}
            ></ItemDetail>
          </React.Fragment>
        )}
      </>
    </div>
  );
};

export default ItemDetailContainer;
