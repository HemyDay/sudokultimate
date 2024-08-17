// --- IMPORTS --- //

// packages ----------------------------------------------------------------
import React, { useState, useRef } from "react";
// styles ------------------------------------------------------------------
import './SudokuCell.css';
// components --------------------------------------------------------------
import SudokuCellValue from "./SudokuCellValue";
// function ----------------------------------------------------------------

// --- COMPONENT --- //
function SudokuCell(props) {

  function initiateCellSelection() {
    if (!props.isSelected) {
      props.updateGridObject(props.id, 'isSelected', true);
      props.setTypeOfSelect(true)
    } else if (props.isSelected) {
      props.updateGridObject(props.id, 'isSelected', false);
      props.setTypeOfSelect(false)
    }
  } 
  
  function hoverCellSelection() {
    if (props.isMouseDown) {
      if (props.typeOfSelect && !props.isSelected) {
        props.updateGridObject(props.id, 'isSelected', true);
      } else if (!props.typeOfSelect && props.isSelected) {
        props.updateGridObject(props.id, 'isSelected', false);
      }
    }
  }


  // --- RETURN --- //
  return (
    <div className="sudoku_cell"
      id={props.id}
      // Properties for CSS
      cell_row={parseInt(props.id[0])}
      cell_col={parseInt(props.id[1])}
      cell_square={parseInt(props.id[2])}
      cell_is-selected={props.isSelected.toString()}
      cell_is-editable={props.isEditable.toString()}
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