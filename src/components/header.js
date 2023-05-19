import React from "react";

export function Header(props){

    return (
        <header className="Header">
            <h1>Music Memory</h1>
            <h2>Puntuación más alta: {props.topscore}</h2>
            <h2>Puntuación: {props.score}</h2>            
        </header>
    )

}