import React from "react";
import './Game.css';


const Game = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.setClick(props.id)}/>
    </div>
  </div>
);

export default Game;
