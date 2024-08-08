// --- IMPORTS --- //

// packages ----------------------------------------------------------------
import React, { useState }  from "react";
// styles ------------------------------------------------------------------
import './SudokuCell.css';
// components --------------------------------------------------------------
import SudokuCellValue from "./SudokuCellValue";


// --- COMPONENT --- //
function SudokuCell(props) {

  // --- EVENT HANDLERS --- //
  
  function initiateCellSelection() {
    setIsSelected(!isSelected)
    props.setTypeOfSelect(!isSelected)
    console.log(!isSelected)
  } 
  
  function handleCellSelection() {
    if (props.isMouseDown === true) {
      if (props.typeOfSelect === true && isSelected === false) {
        setIsSelected(true);
      }
      else if (props.typeOfSelect === false && isSelected === true) {
        setIsSelected(false);
      }
    }
  }

  // --- STATES --- //

  const [cellValue,     setCellValue]     = useState(props.value      || 0);
  const [isEditable,    setIsEditable]    = useState(props.isEditable || true)
  const [isSelected,    setIsSelected]    = useState(false);
  const [isInNoteMode,  setIsInNoteMode]  = useState(false);

  // --- RETURN --- //
  return (
    <div className="sudoku_cell" 
    id={props.id}
    // Proprieties for CSS
    cell_row={parseInt(props.id[0])}
    cell_col={parseInt(props.id[1])}
    cell_square={parseInt(props.id[2])}
    cell_isEditable={isEditable.toString()}
    cell_isSelected={isSelected.toString()}

    // Event handlers
    onMouseDown={() => initiateCellSelection()}
    onMouseEnter={() => handleCellSelection()}
    >
      <SudokuCellValue cellValue={cellValue}/>
    </div>
  );
}

// --- EXPORT --- //
export default SudokuCell;
