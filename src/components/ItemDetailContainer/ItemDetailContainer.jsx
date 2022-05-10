import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ id, precio, texto }) => {
  const options = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities/" + id,
    params: { languageCode: "es" },
    headers: {
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      "X-RapidAPI-Key": "b55ac38178msh39d55c0f09c4399p1b9677jsn8c13eb6a907a",
    },
  };

  const [todos, setTodos] = useState();

  const getItem = async () => {
    const response = await axios.request(options);
    const responseJSON = await response.data;
    setTodos(responseJSON);
    console.log(responseJSON);
  };
  useEffect(() => {
    getItem();

    return () => {};
  }, []);

  return (
    <div className="row col-12 m-2">
      <>
        {!todos ? (
          <div className="row col-12">
            <h5 className="txt2l">Cargando...</h5>
          </div>
        ) : (
          <React.Fragment>
            <ItemDetail datas={texto} title=""></ItemDetail>
            <ItemDetail
              datas={todos.data["country"]}
              title="País: "
            ></ItemDetail>
            <ItemDetail
              datas={todos.data["region"]}
              title="Región: "
            ></ItemDetail>
            <ItemDetail
              datas={todos.data["population"]}
              title="Habitantes: "
            ></ItemDetail>
            <ItemDetail datas={precio} title="Precio: €"></ItemDetail>
          </React.Fragment>
        )}
      </>
    </div>
  );
};

export default ItemDetailContainer;
