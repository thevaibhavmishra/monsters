import React from "react";
import './card.styles.css'

export const Card = (props) => (
    <div className="card-container" >
        <img src={`https://robohash.org/${props.dragon.id+10}?set=set4&size=180x180`} alt="monster" />
        <h2> {props.dragon.name} </h2>
        <p>{props.dragon.email} </p>
    </div>
)