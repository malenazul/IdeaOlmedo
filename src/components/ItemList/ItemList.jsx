import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import Loader from "../Loader/Loader";

const ItemList = ({ ciudades }) => {
  return (
    <div className="row col-12 m-2">
      <>
        {ciudades.length > 0 ? (
          ciudades.map((ciudad, index) => (
            <React.Fragment key={index}>
              <Item
                imagen={ciudad.pictureUrl}
                nombre={ciudad.title}
                id={ciudad.id}
              ></Item>
            </React.Fragment>
          ))
        ) : (
          <Loader loading="true" />
        )}
      </>
    </div>
  );
};

export default ItemList;
