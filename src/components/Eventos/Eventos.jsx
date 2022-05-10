import React from "react";
import { useState, useEffect } from "react";



const container = {
  minHeight: "100yh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};





const Eventos = () => {
    const [state, setState] = useState("")

    const handleChange = (e)=>{
        const {value} = e.target
        console.log(value);
    }
    const handleKeyDown =(e)=>{
        const {key} = e
    
        console.log(key);
        const vocales = 'aeiou';
        if(vocales.indexOf(key.toLowerCase()) === -1){
            setState(state + key)
        }
    }
  return (
    <div style={container}>
      <form action="">
        <label htmlFor="nombre"></label>
        <input value={state} onChange={handleChange} onKeyDown={handleKeyDown} id="nombre" type="text" />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Eventos;
