// --- IMPORTS --- //

// LIBRARIES
import React from "react";
// STYLE 
import "./Cell.css";
// FUNCTIONS
import generateValueDisplay from "../Functions/generateValueDisplay";     // Generates the value displayed inside the cell

// --- COMPONENT --- //
const Cell = (props) => {

  // VARIABLES
  const CELL = props.CELL;  

  // RETURN
  return (
    <div 
      className="cell"
      row={parseInt(CELL.id[0])}
      col={parseInt(CELL.id[1])}
      is_editable={CELL.isEditable.toString()}
      is_selected={CELL.isSelected.toString()}
    >
      {generateValueDisplay(CELL)}
    </div>
  );
}

export default Cell;
