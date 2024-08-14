// --- IMPORTS --- //
// packages ----------------------------------------------------------------
import React, {useState} from "react";
// components --------------------------------------------------------------
import SudokuCell from "./SudokuCell";
// styles ------------------------------------------------------------------
import './SudokuGrid.css';

// --- COMPONENT --- //
function SudokuGrid(props) {
  
  return (
    <section className="sudoku_grid">
    {props.gridObject.map((cell) => {
        return(
          <SudokuCell
            //Utils
            key={cell.id} 
            id={cell.id}
            // Values
            value={cell.value}
            isSelected={cell.isSelected}
            isEditable={cell.isEditable}
            isWarning={cell.isWarning}
          />
        )
      })}
    </section>
  );
  
}

// --- EXPORT --- //
export default SudokuGrid;