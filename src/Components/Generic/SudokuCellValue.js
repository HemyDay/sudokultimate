// --- IMPORTS --- //

// packages ----------------------------------------------------------------
import React, { useState }  from "react";
// styles ------------------------------------------------------------------
import './SudokuCellValue.css';

// --- COMPONENT --- //
function SudokuCellValue(props) {

  switch (true) {

    case props.cellValue === 0 : 
      return (<div className="sudoku_cell_value" is_editable={props.is_editable}> </div>); break;
    
    case props.cellValue >= 1 && props.cellValue <= 9 : 
      return (<div className="sudoku_cell_value" is_editable={props.is_editable}>{props.cellValue}</div>); break;
    
    case props.cellValue.length > 1 : 
      return (
        <div className="sudoku_cell_value notes_mode">
          {props.cellValue.map((note, index) => {
            if (note === 0) return <p key={index} is_editable={props.is_editable}> </p>;
            else return <p key={index} is_editable={props.is_editable}>{note}</p>;
          })}
        </div>
      ); 
    break;
    
    default:
      return (
        <div className="sudoku_cell_value" is_editable={props.is_editable}> </div>)
  }

}

// --- EXPORT --- //
export default SudokuCellValue;
