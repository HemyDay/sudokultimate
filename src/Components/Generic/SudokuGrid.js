// --- IMPORTS --- //
// LIBRARIES
  import React, { useState } from "react";
// COMPONENTS
  import SudokuCell from "./SudokuCell";
// STYLE
  import './SudokuGrid.css';
// FUNCTIONS
  import determineZoneValue from "../../Functions/determineZoneValue";

// --- COMPONENT --- //
function SudokuGrid(props) {

  // VARIABLES DECLARATION
    const [isMouseDown, setIsMouseDown] = useState(false);          // State to track mouse button status
    const [typeOfSelect, setTypeOfSelect] = useState(false);        // State to track selection type (select/unselect)
    let idOfAlreadyGeneratedZones = [];                             // Array with the id of already generated zones

  // FUNCTIONS DECLARATION
    const handleMouseDown = () => {setIsMouseDown(true);};          // Event handler for mouse down event
    const handleMouseUp = () => {setIsMouseDown(false);};           // Event handler for mouse up event

  // RETURN
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
            cell={cell}
            updateGridObject={props.updateGridObject}
            gridObject={props.gridObject}
            typeOfSelect={typeOfSelect}
            setTypeOfSelect={setTypeOfSelect}
            isMouseDown={isMouseDown}
            handleDeselectionOfAllGrid={props.handleDeselectionOfAllGrid}
            pressedKey={props.pressedKey}
            zoneValue={determineZoneValue(cell.zone, idOfAlreadyGeneratedZones)}
          />
        )
      })}
    </section>
  );
}

// --- EXPORT --- //
export default SudokuGrid;
