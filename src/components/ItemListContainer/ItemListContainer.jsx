/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState} from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../service/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Loader from "../Loader/Loader";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(false);

  const [ciudad, setCiudad] = useState([]);
  const { continente } = useParams();
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    setLoading(true);
    const micoleccion = collection(db, "ciudades");

    const filtrados = continente
      ? query(micoleccion, where("categoryID", "==", continente))
      : micoleccion;
    getDocs(filtrados)
      .then((datos) => {
        setCiudad(datos.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {};
  }, [continente]);

  return (
    <div
      className="container-fluid"
      id="listContainer"
      style={{ height: "100% !important" }}
    >
      <div
        className="row col-12"
        style={{ float: "center", display: "flex", margin: "1%" }}
      >
        <h3 className="txt1">{greeting}</h3>
      </div>

      <div className="row col-12" style={{ float: "center", margin: "1%" }}>
        {loading ? (
          <Loader loading={loading} />
        ) : (
          <ItemList ciudades={ciudad}></ItemList>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
