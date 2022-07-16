import React from 'react'
import Arian from "./assets/arian.jpg"
import "../src/nosotros.css"
import Curriculum from "./assets/cv.pdf"

const nosotros = () => {
  return (
    <div id='sobremi'>
         <div className="contenedor-foto">
        <img src={Arian} alt="Foto Personal" />
      </div>
      <div className="sobremi">
        <p className="titulo-seccion">Sobre Mi</p>
        <h2>Hola, soy <span>Arian Hoffmann</span></h2>
        <h3>Desarrollador Web Full Stack</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          voluptatem laboriosam harum exercitationem ex.
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur.</p>
        <a href={Curriculum} download>Descargar CV</a>
      </div>
    </div>
  )
}

export default nosotros;