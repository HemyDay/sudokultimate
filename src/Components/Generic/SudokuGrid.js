// --- IMPORTS --- //
import React, { useState } from "react";
import SudokuCell from "./SudokuCell";
import './SudokuGrid.css';

// --- COMPONENT --- //
function SudokuGrid(props) {
  // State to track mouse button status
  const [isMouseDown, setIsMouseDown] = useState(false);
  // State to track selection type (select/unselect)
  const [typeOfSelect, setTypeOfSelect] = useState(false);

  // Event handler for mouse down event
  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  // Event handler for mouse up event
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <section className="sudoku_grid"
      onContextMenu={(e) => { e.preventDefault(); }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {props.gridObject.map((cell) => {
        return (
          <SudokuCell
            key={cell.id}
            id={cell.id}
            value={cell.value}
            isSelected={cell.isSelected}
            isEditable={cell.isEditable}
            isWarning={cell.isWarning}
            zone={cell.zone}
            updateGridObject={props.updateGridObject}
            gridObject={props.gridObject}
            typeOfSelect={typeOfSelect}
            setTypeOfSelect={setTypeOfSelect}
            isMouseDown={isMouseDown}
            handleDeselectionOfAllGrid={props.handleDeselectionOfAllGrid}
            pressedKey={props.pressedKey}
          />
        )
      })}
    </section>
  );
}

// --- EXPORT --- //
export default SudokuGrid;
