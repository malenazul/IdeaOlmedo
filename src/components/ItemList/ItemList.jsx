import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ ciudades }) => {
  return (
    <div className="row col-12 m-2">
      <>
        {ciudades.length > 0 ? (
          ciudades.map((ciudad, index) => (
            <React.Fragment key={index}>
              <Item
                imagen={ciudad.pictureUrl}
                texto={ciudad.description}
                nombre={ciudad.title}
                precio={ciudad.price}
                id={ciudad.id}
              ></Item>
            </React.Fragment>
          ))
        ) : (
          <div className="row col-12">
            <h4 className="txt2l">Cargando...</h4>
          </div>
        )}
      </>
    </div>
  );
};

export default ItemList;
