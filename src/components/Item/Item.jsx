import React from "react";
import "./Item.css";
<<<<<<< Updated upstream
=======
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { NavLink } from "react-router-dom";

const Item = ({ imagen, texto, nombre, precio, id }) => {
  const [visible, setVisible] = useState(false);
  const [detalle, setDetalle] = useState("");

  function onDetail() {
    visible === false ? setVisible(true) : setVisible(false);
    //setDetalle(´/Item/´);
  }

  useEffect(() => {
    return () => {};
  }, []);
>>>>>>> Stashed changes

const Item = ({imagen, texto, nombre, precio }) => {
  return (
    <div
      className="card"
      style={{
        width: "20rem",
        margin: "0.3%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <h3 className="txt2t">{nombre}</h3>
      <img src={imagen} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <p className="card-text txt3">{texto}</p>
        <button
          className="btn btn-outline-info"
          style={{ width: "10rem" }}
<<<<<<< Updated upstream
        >Mas Detalles</button>
     <h5 className="txt2i">Precio:  €{precio}</h5>
=======
          onClick={onDetail}
        >
          <NavLink className="nav-link" to={`/Item/${id}`}>
            Mas Detalles
          </NavLink>
        </button>
      </div>
>>>>>>> Stashed changes
    </div>
      </div>
   
  );
};

export default Item;
