import React from 'react'
import Concavo from "./assets/concavonosotros.jpg"
import "../src/nosotros.css"
import Plan from "./assets/PlanDePrecios.pdf"

const nosotros = () => {
  return (
    <div id='sobremi'>
         <div className="contenedor-foto">
        <img src={Concavo} alt="Foto Personal" />
      </div>
      <div className="sobremi">
        <p className="titulo-seccion">Sobre Nosotros</p>
        <h2>Hola, Somos <span>Cóncavo</span></h2>
        <h3>Diseñadores Gráficos | Industriales</h3>
        <p>
          
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur.</p>
        <a href={Plan} download>Descarga nuestros planes</a>
      </div>
    </div>
  )
}

export default nosotros;