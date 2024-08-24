// --- IMPORTS --- //

// LIBRARIES
import React, {useState} from "react";
// STYLE 
import "./Cell.css";
// FUNCTIONS
import generateCellStyle from "../Functions/generateCellStyle";

// --- COMPONENT --- //
const Cell = (props) => {

  // VARIABLES
  const CELL = props.CELL;

  // FUNCTIONS
  const valueDisplay = (value) => {
    switch (true) {
      case value > 0        : return <p className="not_draft">{value}</p> ;
      case value.length > 1 : return <p className="draft">{value}</p>;
      default               : return <p className="not_draft"></p> ;
    }
  }

  // RETURN
  return (
    <div 
      className="cell"
      row={parseInt(CELL.id[0])}
      col={parseInt(CELL.id[1])}
      editable={CELL.isEditable.toString()}
      style={generateCellStyle(CELL, props.GRID_OBJECT)}
    >
      {valueDisplay(CELL.value)}
      <span className="killer_zone_value" zone_value={props.zoneValue.toString()}>{props.zoneValue}</span>
    </div>
  );
}

export default Cell;

// // --- IMPORTS --- //
// // LIBRARIES
// 
// // COMPONENTS
//   import SudokuCellValue from "./SudokuCellValue.js";
// // STYLE
//   import './SudokuCell.css';
// // FUNCTIONS
//   import handleCellSelection from "../../../Functions/handleCellSelecion.js";
//   import generateCellStyle from "../../../Functions/generateCellStyle.js";
//   import handleDoubleClickOnCell from "../../../Functions/handleDoubleClickOnCell.js";

// // --- COMPONENT --- //
// function SudokuCell(props) {

//   // VARIABLES DECLARATION
//     const CELL = props.cell;

//   // FUNCTION DECLARATION
//     const handleDoubleClick = () => {handleDoubleClickOnCell(CELL, props.setGridObject, props.gridObject);};  // Event handler for double click event
    
//   // --- RETURN --- //
//   return (
//     <div className="sudoku_cell"
//       id={CELL.id}
//       cell_row={parseInt(CELL.id[0])}
//       cell_col={parseInt(CELL.id[1])}
//       cell_square={parseInt(CELL.id[2])}
//       cell_is-selected={CELL.isSelected.toString()}
//       cell_is-editable={CELL.isEditable.toString()}
//       cell_is-warning={CELL.isWarning.length > 0 ? "true" : "false"}
//       onMouseDown={(e) => {handleCellSelection(e, CELL, props)}}
//       onMouseEnter={(e) => {handleCellSelection(e, CELL, props)}}
//       style={generateCellStyle(CELL, props.gridObject)}
//       onDoubleClick={handleDoubleClick}
//     >
//       <span className="killer_zone_value" zone_value={props.zoneValue.toString()}>{props.zoneValue}</span>
//       <SudokuCellValue cellValue={CELL.value} is_editable={CELL.isEditable.toString()}/>
//     </div>
//   );
// }

// // --- EXPORT --- //
// export default SudokuCell;

