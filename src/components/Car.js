import React, { useState } from "react";
import "../components/Car.scss";

function Car(props) {
  const [isShow, setShow] = useState("false");

  function showDetails() {
    setShow(!isShow);
  }

  return (
    <div className="cars__item">
      <img className="cars__item-img" src={props.img} alt="car" />

      <div className="cars__item-description description ">
        <h2 className="cars__item-make"> {props.make}</h2>
        <h3 className="cars__item-model"> {props.model}</h3>
        <p className="cars__item-year"> {props.year}</p>
        <div className={`description-details ${isShow ? "hide" : ""}`}>
          <p>{props.color}</p>
          <p>{props.engine}</p>
          <p>{props.transmission}</p>
        </div>
      </div>
      <button className="cars__item-btn btn" onClick={showDetails}>
        {isShow ? "More..." : "Hide"}
      </button>
    </div>
  );
}
export default Car;
