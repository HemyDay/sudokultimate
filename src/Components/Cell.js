// --- IMPORTS --- //

// LIBRARIES
import React from "react";
// STYLE 
import "./Cell.css";
// FUNCTIONS
import generateValueDisplay from "../Functions/generateValueDisplay";     // Generates the value displayed inside the cell

// --- COMPONENT --- //
const Cell = (props) => {

  // RETURN
  return (
    <div 
      className="cell"
      row={parseInt(props.CELL.id[0])}
      col={parseInt(props.CELL.id[1])}
      is_editable={props.CELL.isEditable.toString()}
      is_selected={props.CELL.isSelected.toString()}
    >
      {generateValueDisplay(props.CELL)}
    </div>
  );
}

export default Cell;
