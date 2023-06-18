import React from "react";
import "./home.css";

export default function Home(props) {
  return (
    <div className="bloque1">
    <div className="house">
      <div className="imagen" key="i">
        <img src={props.photo} alt="" />
      </div>
      <div className="detalles">
        <div className="superHost" key="i">
          {props.superHost} SUPER HOST
        </div>
        <div className="type" key="i">
          {props.type}
        </div>
        <div className="rating" key="i">
          <img src="src\img\star(1).svg" alt="star" height="20" width="19" />
          {props.rating}
        </div>
      </div>
      <div className="Title" key="i">
        {props.title}
      </div>
    </div>
    </div>
  );
}
