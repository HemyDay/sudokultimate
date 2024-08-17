// --- IMPORTS --- //
import React from "react";
import './SudokuCell.css';
import SudokuCellValue from "./SudokuCellValue.js";

// --- COMPONENT --- //
function SudokuCell(props) {
  // Function to handle cell selection on mouse down
  function initiateCellSelection() {
    if (props.pressedKey !== "Control") {
      props.handleDeselectionOfAllGrid();
    }
    if (!props.isSelected) {
      props.updateGridObject(props.id, 'isSelected', true);
      props.setTypeOfSelect(true);
    } else {
      props.updateGridObject(props.id, 'isSelected', false);
      props.setTypeOfSelect(false);
    }
  }

  // Function to handle cell selection on mouse hover
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
      cell_row={parseInt(props.id[0])}
      cell_col={parseInt(props.id[1])}
      cell_square={parseInt(props.id[2])}
      cell_is-selected={props.isSelected.toString()}
      cell_is-editable={props.isEditable.toString()}
      onMouseDown={initiateCellSelection}
      onMouseEnter={hoverCellSelection}
    >
      <SudokuCellValue cellValue={props.value} />
    </div>
  );
}

// --- EXPORT --- //
export default SudokuCell;
