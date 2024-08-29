// --- IMPORTS --- //

// packages ----------------------------------------------------------------
import React from "react";
// styles ------------------------------------------------------------------
import './SudokuCellValue.css';

// --- COMPONENT --- //
function SudokuCellValue(props) {

  switch (true) {

    case props.cellValue >= 0 && props.cellValue <= 9 : 
      return (
        <div 
          className="sudoku_cell_value" 
          is_editable={props.is_editable}
        >
        {props.cellValue > 0 ? props.cellValue : ""}
        </div>
      );
    
    case props.cellValue.length > 1 : 
      return (
        <div className="sudoku_cell_value notes_mode">
          {props.cellValue.map((note, index) => {
            return <p key={index}>{note === 0 ? "" : note }</p>;
          })}
        </div>
      ); 
    
    default:
      return (
        <div className="sudoku_cell_value" is_editable={props.is_editable}> </div>)
  }

}

// --- EXPORT --- //
export default SudokuCellValue;
