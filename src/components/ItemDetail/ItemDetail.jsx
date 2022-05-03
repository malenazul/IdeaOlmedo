import React from "react";

const ItemDetail = ({ datas, title }) => {
  return (
    <h5 className="txt2i">
      {title}
      {datas}
    </h5>
  );
};

export default ItemDetail;
