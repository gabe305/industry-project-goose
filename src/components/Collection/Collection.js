import React from "react";
import "./Collection.scss";
import img1 from "../../assets/Images/col1.png";
import img2 from "../../assets/Images/col2.png";
import img3 from "../../assets/Images/col3.png";
import img4 from "../../assets/Images/col4.png";
import img5 from "../../assets/Images/col5.png";
import wint1 from "../../assets/Images/wint1.png";
import wint2 from "../../assets/Images/wint2.png";
import wint3 from "../../assets/Images/wint3.png";
import wint4 from "../../assets/Images/wint4.png";
import wint5 from "../../assets/Images/wint5.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Collection({ isSpring }) {
  const buttonRight = document.getElementsByClassName("collection__right");
  const buttonLeft = document.getElementsByClassName("collection__left");

  buttonRight.onclick = function () {
    const slider = document.getElementsByClassName("collection__slider");
    slider[0].scrollLeft = slider[0].scrollLeft - 1000;
  };
  buttonLeft.onclick = function () {
    const slider = document.getElementsByClassName("collection__slider");
    slider[0].scrollLeft = slider[0].scrollLeft + 1000;
  };

  return (
    <div className="collection">
      <h1 className="collection__subheader">Spring Collection</h1>
      <div className="collection__carousel">
        <MdChevronLeft
          size={40}
          className="collection__button collection__left"
          onClick={buttonRight.onclick}
        />
        <div id="slider" className="collection__slider">
          <img
            className="collection__card-img"
            src={isSpring ? img1 : wint1}
            alt="Wordmark Adjustable Cap Arctic Florals"
          />
          <img
            className="collection__card-img"
            src={isSpring ? img2 : wint2}
            alt="Men's crofton Down Hoody"
          />
          <img
            className="collection__card-img"
            src={isSpring ? img3 : wint3}
            alt="Kitsilano Jacket Arctic Florals"
          />
          <img
            className="collection__card-img"
            src={isSpring ? img4 : wint4}
            alt="Cypress Vest Arctic Florals"
          />
          <img
            className="collection__card-img"
            src={isSpring ? img5 : wint5}
            alt="Muskoka Womens Pants Arctic Florals"
          />
        </div>
        <MdChevronRight
          size={40}
          className="collection__button collection__right"
          onClick={buttonLeft.onclick}
        />
      </div>
    </div>
  );
}

export default Collection;

