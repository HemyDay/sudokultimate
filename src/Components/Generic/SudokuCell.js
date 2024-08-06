// --- IMPORTS --- //

// packages ----------------------------------------------------------------
import React, { useState }  from "react";
// styles ------------------------------------------------------------------
import './SudokuCell.css';
// components --------------------------------------------------------------
import SudokuCellValue from "./SudokuCellValue";

// --- COMPONENT --- //
function SudokuCell(props) {

  // --- STATE --- //

  const [cellValue, setCellValue] = useState(props.value || 0);
  const [isEditable, setIsEditable] = useState(props.isEditable || true)
  const [isSelected, setIsSelected] = useState(false);

  // --- RETURN --- //
  return (
    <div className="sudoku_cell" 
    id={props.id}
    cell_row={parseInt(props.id[0])}
    cell_col={parseInt(props.id[1])}
    cell_square={parseInt(props.id[2])}
    cell_isEditable={isEditable.toString()}
    >
      <SudokuCellValue cellValue={cellValue}/>
    </div>
  );
}

// --- EXPORT --- //
export default SudokuCell;
