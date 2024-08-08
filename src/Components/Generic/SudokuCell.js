// --- IMPORTS --- //

// packages ----------------------------------------------------------------
import React, { useState } from "react";
// styles ------------------------------------------------------------------
import './SudokuCell.css';
// components --------------------------------------------------------------
import SudokuCellValue from "./SudokuCellValue";

// --- COMPONENT --- //
function SudokuCell(props) {

  // --- EVENT HANDLERS --- //
  
  function initiateCellSelection() {
    if (!props.isSelected) {
      props.setSelectedCells({})
      props.handleCellSelection(props.id, true);
      props.setTypeOfSelect(true)
    } else if (props.isSelected) {
      props.setSelectedCells({})
      props.handleCellSelection(props.id, false);
      props.setTypeOfSelect(false)
    }
  } 
  
  function hoverCellSelection() {
    if (props.isMouseDown) {
      if (props.typeOfSelect && !props.isSelected) {
        props.handleCellSelection(props.id, true);
      } else if (!props.typeOfSelect && props.isSelected) {
        props.handleCellSelection(props.id, false);
      }
    }
  }

  // --- STATES --- //

  const [cellValue, setCellValue] = useState(props.value || 0);
  const [isEditable, setIsEditable] = useState(props.isEditable || true);


  // --- RETURN --- //
  return (
    <div className="sudoku_cell"
      id={props.id}
      // Properties for CSS
      cell_row={parseInt(props.id[0])}
      cell_col={parseInt(props.id[1])}
      cell_square={parseInt(props.id[2])}
      cell_is-editable={isEditable.toString()}
      cell_is-selected={props.isSelected.toString()}

      // Event handlers
      onMouseDown={initiateCellSelection}
      onMouseEnter={hoverCellSelection}
    >
      <SudokuCellValue cellValue={props.value} />
    </div>
  );
}

// --- EXPORT --- //
export default SudokuCell;