import React from 'react'
import Concavo from "./assets/concavonosotros.jpg"
import "../src/nosotros.css"
import Plan from "./assets/planesconcavo.pdf"

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
        <p>Somos dos amigos con una trayectoria de 6 años entre trabajos y estudios. Hoy decidimos emprender de la mano del <b>DISEÑO</b> haciendo lo que amamos.<br/>
        <br/>
          ¿Cuál es nuestro trabajo en <b>CÓNCAVO</b>?<br/>
          Ayudar a las personas a encontrar la estética de su emprendimiento / empresa maximizando la exposición en las redes sociales, otorgando todas las herramientas que tenemos a nuestro alcance para lograrlo.<br/>
          <br/>
          ¿Qué planes ofrecemos?<br/>
          Aquí puedes descargar los planes vigentes de <b>CÓNCAVO</b>, y además, comunicarte con nosotros para cotizarlo de manera personalizada.</p>
        <a href={Plan} download>Descarga nuestros planes</a>
      </div>
    </div>
  )
}

export default nosotros;