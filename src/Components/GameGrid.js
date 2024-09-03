// --- IMPORTS --- //

// LIBRARIES
import React, {useState} from "react";
// STYLE 
import "./GameGrid.css";
// COMPONENTS
import Cell from "./Cell";
// FUNCTIONS

// --- COMPONENT --- //
const GameGrid = (props) => {

  return (
    <section className="game_grid">
      {Object.entries(props.LEVEL.cells).map((cell) => {
        {return (
          <Cell
            key={cell[0]}
            CELL={cell[1]}
            LEVEL={props.LEVEL}
          />
        )}
      })}
    </section>
    
  );
  
}

// --- EXPORT --- //
export default GameGrid;