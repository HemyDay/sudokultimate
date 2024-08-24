// --- IMPORTS --- //

// LIBRARIES
import React from "react";
// STYLE 
import "./GameGrid.css";
// COMPONENTS
import Cell from "./Cell";
// FUNCTIONS
import determineZoneValue from "../Functions/determineZoneValue";

// --- COMPONENT --- //
const GameGrid = (props) => {

  // VARIABLES
  let idOfAlreadyGeneratedZones = [];         

  return (
    <section className="game_grid">
      {props.GRID_OBJECT.map((cell) => {
        return (
          <Cell
            key={cell.id}
            CELL={cell}
            GRID_OBJECT={props.GRID_OBJECT}
            zoneValue={determineZoneValue(cell.zone, idOfAlreadyGeneratedZones)}
          />
        )
      })}
    </section>
    
  );
  
}

// --- EXPORT --- //
export default GameGrid;