import React from 'react'
import './portfolio.css'
import Imagen from './assets/hola.jpg'

const portfolio = () => {
  return (
    <div id="portfolio">
         <h3 className="titulo-seccion">Mis Proyectos</h3>
      <div className="fila">
        <div className="proyecto">
          <div className="overlay">
            <img src={Imagen} alt="Imagen del Proyecto" />
            <div className="info">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
        </div>
        <div className="proyecto">
          <div className="overlay">
            <img src={Imagen} alt="Imagen del Proyecto" />
            <div className="info">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
        </div>
        <div className="proyecto">
          <div className="overlay">
            <img src={Imagen} alt="Imagen del Proyecto" />
            <div className="info">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fila">
        <div className="proyecto">
          <div className="overlay">
            <img src={Imagen} alt="Imagen del Proyecto" />
            <div className="info">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
        </div>
        <div className="proyecto">
          <div className="overlay">
            <img src={Imagen} alt="Imagen del Proyecto" />
            <div className="info">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
        </div>
        <div className="proyecto">
          <div className="overlay">
            <img src={Imagen} alt="Imagen del Proyecto" />
            <div className="info">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fila">
        <div className="proyecto">
          <div className="overlay">
            <img src={Imagen} alt="Imagen del Proyecto" />
            <div className="info">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
        </div>
        <div className="proyecto">
          <div className="overlay">
            <img src={Imagen} alt="Imagen del Proyecto" />
            <div className="info">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
        </div>
        <div className="proyecto">
          <div className="overlay">
            <img src={Imagen} alt="Imagen del Proyecto" />
            <div className="info">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default portfolio