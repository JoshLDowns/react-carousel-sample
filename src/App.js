import React, { useState } from "react";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import IconButton from "@material-ui/core/IconButton";

import "./App.css";

const imgArray = [
  "https://res.cloudinary.com/joshdowns-dev/image/upload/v1590779613/Portfolio/token-thopter_wualjq.png",
  "https://res.cloudinary.com/joshdowns-dev/image/upload/v1590779611/Portfolio/token-hippo_lllyi8.png",
  "https://res.cloudinary.com/joshdowns-dev/image/upload/v1590779611/Portfolio/token-servo_dfxwvs.png",
  "https://res.cloudinary.com/joshdowns-dev/image/upload/v1590779610/Portfolio/token-scion_dfcgfo.png",
  "https://res.cloudinary.com/joshdowns-dev/image/upload/v1590779607/Portfolio/token-merfolkwizard_i1vnuv.png",
  "https://res.cloudinary.com/joshdowns-dev/image/upload/v1590779605/Portfolio/token-plant_qkatv5.png",
];

const App = () => {
  const [index, setIndex] = useState(0);

  const handleNav = (direction) => {
    let newIndex;
    if (direction === "right") {
      index === imgArray.length - 1 ? (newIndex = 0) : (newIndex = index + 1);
    } else {
      index === 0 ? (newIndex = imgArray.length - 1) : (newIndex = index - 1);
    }
    setIndex(newIndex);
  };

  console.log(index);

  return (
    <div className="App">
      <div id="rotating-carousel">
        <IconButton
          onClick={() => {
            handleNav("left");
          }}
        >
          <ArrowBackIosIcon fontSize="large" />
        </IconButton>
        <div id="carousel">
          <img
            className="xs-img-left"
            src={
              index === imgArray.length - 2
                ? imgArray[0]
                : index === imgArray.length - 1
                ? imgArray[1]
                : imgArray[index + 2]
            }
            alt="sm-img"
          />

          <img
            className="sm-img-left"
            src={
              index === imgArray.length - 1 ? imgArray[0] : imgArray[index + 1]
            }
            alt="sm-img"
          />
          <img className="lg-img" src={imgArray[index]} alt="card" />
          <img
            className="sm-img-right"
            src={
              index === 0 ? imgArray[imgArray.length - 1] : imgArray[index - 1]
            }
            alt="sm-img"
          />

          <img
            className="xs-img-right"
            src={
              index === 1
                ? imgArray[imgArray.length - 1]
                : index === 0
                ? imgArray[imgArray.length - 2]
                : imgArray[index - 2]
            }
            alt="sm-img"
          />
        </div>
        <IconButton
          onClick={() => {
            handleNav("right");
          }}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default App;
