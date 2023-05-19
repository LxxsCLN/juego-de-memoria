import React from "react";

export function Header(props){

    return (
        <header className="Header">
            <h1>Music Memory</h1>
            <p>Puntuación más alta: {props.topscore}</p>
            <p>Puntuación: {props.score}</p>
            
        </header>
    )

}