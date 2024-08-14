// --- IMPORTS --- //

// packages ----------------------------------------------------------------
import React, { useState, useRef } from "react";
// styles ------------------------------------------------------------------
import './SudokuCell.css';
// components --------------------------------------------------------------
import SudokuCellValue from "./SudokuCellValue.js";
// function ----------------------------------------------------------------

// --- COMPONENT --- //
function SudokuCell(props) {

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
    >
      <SudokuCellValue cellValue={props.value} />
    </div>
  );
}

// --- EXPORT --- //
export default SudokuCell;