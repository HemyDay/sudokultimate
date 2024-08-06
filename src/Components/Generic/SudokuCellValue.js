// --- IMPORTS --- //

// packages ----------------------------------------------------------------
import React, { useState }  from "react";
// styles ------------------------------------------------------------------
import './SudokuCellValue.css';

// --- COMPONENT --- //
function SudokuCellValue(props) {

  switch (true) {

    case props.cellValue === 0 : 
      return (<div className="sudoku_cell_value"> </div>); break;
    
    case props.cellValue >= 1 && props.cellValue <= 9 : 
      return (<div className="sudoku_cell_value">{props.cellValue}</div>); break;
    
    case props.cellValue.length > 1 : 
      return (
        <div className="sudoku_cell_value notes_mode" >
          {props.cellValue.map(
            note => {
              if (note === 0) return (<p> </p>);
              else return (<p>{note}</p>); 
            }
          )}
        </div>
      ); break;
    
    default:
      return (
        <div className="sudoku_cell_value"> </div>)
  }

}

// --- EXPORT --- //
export default SudokuCellValue;
