/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
import React from "react";
import "./ItemCount.css";

const ItemCount = ({stock, initial, onAdd, onSubstract, disponibles}) => {
 

 
  return (
    <div className="row" style={{ float: "center", margin: "2%" }}>
      <div style={{ float: "left", display: "flex" }}>
        <button
          className="btn btn-outline-warning"
          onClick={initial > 0 ? onSubstract : ""}
          style={{ width: "10%" }}
        >
          - 1
        </button>
        <h5 className="txt" style={{ width: "30%" }}>
          Pasajeros : {initial}
        </h5>
        <button
          className="btn btn-outline-warning"
          onClick={initial < stock ? onAdd : ""}
          style={{ width: "10%" }}
        >
          + 1
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
