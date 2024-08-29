// --- IMPORTS --- //

// LIBRARIES
import React, {useState} from "react";
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
  const [TYPE_OF_SELECT, setTYPE_OF_SELECT] = useState(false);        // State to track selection type (select/unselect)
  const [IS_MOUSE_DOWN, setIS_MOUSE_DOWN] = useState(false);          // State to track mouse button status

  // FUNCTIONS
  const handleMouseDown = () => {setIS_MOUSE_DOWN(true);};          // Event handler for mouse down event
  const handleMouseUp = () => {setIS_MOUSE_DOWN(false);};           // Event handler for mouse up event

  return (
    <section className="game_grid"
      onContextMenu={(e) => { e.preventDefault(); }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {props.GRID_OBJECT.map((cell) => {
        return (
          <Cell
            key={cell.id}
            CELL={cell}
            setGRID_OBJECT={props.setGRID_OBJECT}
            GRID_OBJECT={props.GRID_OBJECT}
            zoneValue={determineZoneValue(cell.zone, idOfAlreadyGeneratedZones)}
            TYPE_OF_SELECT={TYPE_OF_SELECT}
            setTYPE_OF_SELECT={setTYPE_OF_SELECT}
            IS_MOUSE_DOWN={IS_MOUSE_DOWN}
          />
        )
      })}
    </section>
    
  );
  
}

// --- EXPORT --- //
export default GameGrid;