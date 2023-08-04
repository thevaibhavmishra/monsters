import React from "react";
import './card-list.styles.css'
import { Card } from "../card/card.component";

export const CardList = (props) =>  (
    <div className="card-list" >
      
        {props.dragons.map( dragon=>(
        <Card key={dragon.id} dragon={dragon} />
        ) )
        }
    </div>
);

