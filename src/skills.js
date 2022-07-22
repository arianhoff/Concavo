import React from 'react'
import "./skills.css"

const skills = () => {
  return (
    <div className="contenedor-skills" id="skills">
    <h3>Programas utilizados</h3>
    <div className="skill">
      <div className="info">
        <p><span className="lista"></span>Illustrator</p>
        <span className="porecentaje"></span>
      </div>
      <div className="barra">
        <div id="html" className="barra-progreso1"></div>
      </div>
    </div>

    <div className="skill">
      <div className="info">
        <p><span className="lista"></span>Photoshop</p>
        <span className="porecentaje"></span>
      </div>
      <div className="barra">
        <div id="react" className="barra-progreso2"></div>
      </div>
    </div>

    <div className="skill">
      <div className="info">
        <p><span className="lista"></span>Adobe After Effects</p>
        <span className="porecentaje"></span>
      </div>
      <div className="barra">
        <div id="js" className="barra-progreso3"></div>
      </div>
    </div>

    <div className="skill">
      <div className="info">
        <p><span className="lista"></span>Solidworks</p>
        <span className="porecentaje"></span>
      </div>
      <div className="barra">
        <div id="bd" className="barra-progreso4"></div>
      </div>
    </div>

    <div className="skill">
      <div className="info">
        <p><span className="lista"></span>Keyshot</p>
        <span className="porecentaje"></span>
      </div>
      <div className="barra">
        <div id="ps" className="barra-progreso5"></div>
      </div>
    </div>

    {/* <div className="skill">
      <div className="info">
        <p><span className="lista"></span>After Effects</p>
        <span className="porecentaje">80%</span>
      </div>
      <div className="barra">
        <div id="af" className="barra-progreso6"></div>
      </div>
    </div> */}
  </div>
  )
}

export default skills