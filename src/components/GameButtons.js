import React from "react";
import './GameButtons.css'

function GameButtons (props) {


       return ( 
           <>
        <button onClick = {props.addScore}>+{props.increment}</button>       
         <button onClick = {props.incrementByOne}>Pay 10 points to change from +{props.increment} to +{props.increment + 1}</button>  
        </>
       )

}


export default GameButtons;