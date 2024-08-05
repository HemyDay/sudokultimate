// --- IMPORTS --- //

// packages ----------------------------------------------------------------
import React from "react";
// styles ------------------------------------------------------------------
import './SudokuCell.css';


// --- COMPONENT --- //
function SudokuCell(props) {
  return (
    <div className="sudoku_cell" 
    id={props.id}
    cell_row={parseInt(props.id[0])}
    cell_col={parseInt(props.id[1])}
    cell_square={parseInt(props.id[2])}
    >
      <div className="sudoku_cell_value">
        {props.id}
      </div>

    </div>
  );
}

// --- EXPORT --- //
export default SudokuCell;
