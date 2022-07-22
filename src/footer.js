import React from "react";
import './footer.css';

const footer = () => {
  return (
    <div id="footer">
      <p>Cóncavo.Design | Since ©2022 - Todos los derechos reservados.</p>

      <div className="redes">
        <a href="https://www.behance.net/cncavodesign" target="blank">
          <i className="fa-brands fa-behance-square"></i>
        </a>
        <a href="https://www.instagram.com/concavodesign/" target="blank">
          <i className="fa-brands fa-instagram-square"></i>
        </a>
      </div>
    </div>
  );
};

export default footer;
