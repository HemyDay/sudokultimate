// --- IMPORTS --- //

// LIBRARIES
import React from "react";

// COMPONENTS
import GameGrid from "./GameGrid";


// --- COMPONENT --- //
const GameInterface = (props) => {

  return (
    <section className="game_interface">
      <GameGrid PRESSED_KEY={props.PRESSED_KEY} GRID_OBJECT={props.GRID_OBJECT}/>
      <div className="menu"></div>
    </section>
    
  );
  
}

// --- EXPORT --- //
export default GameInterface;