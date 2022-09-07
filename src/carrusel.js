import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Tools from "../src/assets/Tools.jpg";
import Tlhf from "../src/assets/tlhf.jpg";
import Oro from "../src/assets/oro verde.jpg";
import Se from "../src/assets/Se.jpg";
import Sj from "../src/assets/sj.jpg";
import Knx from "../src/assets/knx.jpg";
import Born from "../src/assets/Born.jpg";
import "./carrusel.css";


export default class Autoplay extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="global">
        <h1 style={{ textAlign: "center", marginBottom: 50 }} className="titulo">
          {" "}
          Marcas que confiaron en nosotros{" "}
        </h1>
        <Slider {...settings}>
          <div>
          <img style={{ height: 250, backgroundSize: "cover" }} src={Tools} alt="Logo-knx" />
          </div>
          <div>
            <img style={{ height: 250, backgroundSize: "cover" }} src={Knx} alt="Logo-knx" />
          </div>
          <div>
            <img style={{ height: 250, backgroundSize: "cover" }} src={Oro} alt="Logo-knx" />
          </div>
          <div>
            <img style={{ height: 250, backgroundSize: "cover" }} src={Se} alt="Logo-knx" />
          </div>
          <div>
            <img style={{ height: 250, backgroundSize: "cover" }} src={Sj} alt="Logo-knx" />
          </div>
          <div>
            <img style={{ height: 250, backgroundSize: "cover" }} src={Tlhf} alt="Logo-knx" />
          </div>
          <div>
            <img style={{ height: 250, backgroundSize: "cover" }} src={Born} alt="Logo-knx" />
          </div>
        </Slider>
      </div>
    );
  }
}
