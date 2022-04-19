/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Card = ({imagen,texto,nombre}) => {
  return (
    <div className="card" style={{width: "17.8rem"}}>
         <a>{nombre}</a>
    <img src={imagen} className="card-img-top" alt={nombre}/>
    <div className="card-body">
      <p className="card-text">{texto}</p>
    </div>
  </div>
    
  )
}

export default Card