import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import { GlobalContext } from "../../context/CartContext";
import { db } from "../../service/firebase";
import { addDoc, collection, getFirestore } from "firebase/firestore";



const Formulario = () => {

    const {
        carrito,
        total, 
        clear
      } = useContext(GlobalContext);

    const [orderID, setOrderID] = useState();
    function mostrarOrder(order){
       if(order){
        window.alert("Felicidades. Su compra ha sido exitosa. Su numero de orden es: " + orderID)
       }

    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormulario({
          ...formulario,
          buyer: {
            ...formulario.buyer,
            [id]: value,
          },
        });
      };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const oCollection = collection(db, "orders");
            console.log(formulario);
            await addDoc(oCollection, formulario).then(({id})=> setOrderID(id));
            
            
            clear();
           
        } catch (error) {
            console.log(error)
        }
       

      };
    const itemsCart = carrito.map(({ id, title, price, quantity }) => ({
        id,
        title,
        price,
        quantity,
      }));
    
    
    const [formulario, setFormulario] = useState({
        buyer: {
            name: "",
            phone: "",
            email: ""
        },
        items: itemsCart,
        date: Date(),
        total: total
        
      });

    useEffect(() => {
     
        mostrarOrder(orderID);
    
      return () => {
        
      }
    }, [orderID])
    
    

  return (
    <form className="g-3 form needs-validation"  onSubmit={handleSubmit} id="form">
  <div className="col-md-8">
    <label className="form-label">Nombre</label>
    <input  type="text" className="form-control" id="name" onChange={handleChange} required/>
    <div className="invalid-feedback">
      Ingrese su nombre
    </div>
  </div>
  <div className="col-md-8">
    <label className="form-label">Teléfono</label>
    <input  type="text" className="form-control" id="phone" onChange={handleChange} required/>
    <div className="invalid-feedback">
      Ingrese su teléfono
    </div>
  </div>
  <div className="col-md-8">
    <label className="form-label">Email</label>
      <input type="text" className="form-control" id="email" aria-describedby="inputGroupPrepend" onChange={handleChange} required/>
      <div className="invalid-feedback">
        Ingrese su email
      </div>
  </div>
  <div className="col-md-8">
    <label className="form-label">Confirmar Email</label>
      <input type="text" className="form-control" id="email" aria-describedby="inputGroupPrepend" onChange={handleChange} required/>
      <div className="invalid-feedback">
        Ingrese su email
      </div>
  </div>
 
  <div className="col-12">
    <button className="btn btn-primary" type="submit"   style={{marginTop: "3%"}}>Terminar compra de USD {total}</button>
  </div>
</form>
  )
}

export default Formulario