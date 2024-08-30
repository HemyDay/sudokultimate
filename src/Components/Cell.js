// --- IMPORTS --- //

// LIBRARIES
import React from "react";
// STYLE 
import "./Cell.css";
// FUNCTIONS
import generateCellStyle from "../Functions/generateCellStyle";           // Generates style for the Killer Sudoku mode
import generateValueDisplay from "../Functions/generateValueDisplay";     // Generates the value displayed inside the cell
import handleCellSelection from "../Functions/handleCellSelecion";
import handleZoneSelection from "../Functions/handleZoneSelection";

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
      style={generateCellStyle(CELL, props.GRID_OBJECT)}
      onMouseDown={(e) => {handleCellSelection(e, CELL, props)}}
      onMouseEnter={(e) => {handleCellSelection(e, CELL, props)}}
      onDoubleClick={(e) => {handleZoneSelection(CELL, props)}}
    >
      {generateValueDisplay(CELL)}
      <span className="killer_zone_value" zone_value={props.zoneValue.toString()}>{props.zoneValue}</span>
    </div>
  );
}

export default Cell;
