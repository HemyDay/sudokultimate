// --- IMPORTS --- //
// LIBRARIES
  import React from "react";
// COMPONENTS
  import SudokuCellValue from "./SudokuCellValue.js";
// STYLE
  import './SudokuCell.css';
// FUNCTIONS
  import handleCellSelection from "../../../../src/Functions/handleCellSelecion.js";
  import generateCellStyle from "../../../Functions/generateCellStyle.js";
  import handleDoubleClickOnCell from "../../../Functions/handleDoubleClickOnCell.js";

// --- COMPONENT --- //
function SudokuCell(props) {

  // VARIABLES DECLARATION
    const CELL = props.cell;

  // FUNCTION DECLARATION
    const handleDoubleClick = () => {handleDoubleClickOnCell(CELL, props.setGridObject, props.gridObject);};  // Event handler for double click event
    
  // --- RETURN --- //
  return (
    <div className="sudoku_cell"
      id={CELL.id}
      cell_row={parseInt(CELL.id[0])}
      cell_col={parseInt(CELL.id[1])}
      cell_square={parseInt(CELL.id[2])}
      cell_is-selected={CELL.isSelected.toString()}
      cell_is-editable={CELL.isEditable.toString()}
      cell_is-warning={CELL.isWarning.length > 0 ? "true" : "false"}
      onMouseDown={(e) => {handleCellSelection(e, CELL, props)}}
      onMouseEnter={(e) => {handleCellSelection(e, CELL, props)}}
      style={generateCellStyle(CELL, props.gridObject)}
      onDoubleClick={handleDoubleClick}
    >
      <span className="killer_zone_value" zone_value={props.zoneValue.toString()}>{props.zoneValue}</span>
      <SudokuCellValue cellValue={CELL.value} is_editable={CELL.isEditable.toString()}/>
    </div>
  );
}

// --- EXPORT --- //
export default SudokuCell;

