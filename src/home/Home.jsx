import React from "react";
import "./home.css";

export default function Home(props) {
  return (
    <div className="bloque1">
    <div className="house">
      <div className="imagen" key="image">
        <img src={props.imagen} alt="" />
      </div>
      <div className="detalles">
        <div className="superHost" key="superHost">
          {props.superHost} SUPER HOST
        </div>
        <div className="type" key="type">
          {props.type}
        </div>
        <div className="rating" key="rating">
          {props.rating}
        </div>
      </div>
      <div className="Title" key="title">
        {props.title}
      </div>
    </div>
    </div>
  );
}
