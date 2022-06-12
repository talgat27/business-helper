import React from "react";
import "./FirstPage.css";
import FirstImages from '../../images/First_images.svg'
import ArrowLeft from "../../images/left_arrow.svg";
import ArrowRight from "../../images/right_arrow.svg";
import Carouselbox from "../Carousel/Carouselbox"

export default function FirstPage() {
  return (
    <body>
      <Carouselbox />
      <div className="body">
        <div className="first_page">
        </div>
      </div>
    </body>
  );
}
