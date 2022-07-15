import React from "react";
import './footer.css';

const footer = () => {
  return (
    <div id="footer">
      <p>Todos los derechos reservados - 2022</p>

      <div className="redes">
        <a
          href="https://www.linkedin.com/in/arian-hoffmann-726376161/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.behance.net/arianhoffmann1">
          <i className="fa-brands fa-behance-square"></i>
        </a>
        <a href="https://www.instagram.com/ari.hoffmann/">
          <i className="fa-brands fa-instagram-square"></i>
        </a>
      </div>
    </div>
  );
};

export default footer;
