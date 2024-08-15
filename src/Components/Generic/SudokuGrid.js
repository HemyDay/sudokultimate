// --- IMPORTS --- //
// packages ----------------------------------------------------------------
import React, {useState} from "react";
// components --------------------------------------------------------------
import SudokuCell from "./SudokuCell";
// styles ------------------------------------------------------------------
import './SudokuGrid.css';

// --- COMPONENT --- //
function SudokuGrid(props) {

    
  const [isMouseDown,   setIsMouseDown]   = useState(false);              // Variable to keep track of the state of the mouse down event
  const [typeOfSelect,  setTypeOfSelect] = useState(false);               // Variable to keep track of the state of the selection type (is the user selecting or unselecting cells)
  const handleMouseDown = () => {setIsMouseDown(true);};                  // Event handler for when the mouse button is pressed down
  const handleMouseUp = () => {setIsMouseDown(false);};                   // Event handler for when the mouse button is released

  
  return (
    <section className="sudoku_grid"
      onContextMenu={(e) => {e.preventDefault();}}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
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
            // Grid object
            updateGridObject={props.updateGridObject}
            gridObject={props.gridObject}
            // Mouse events
            typeOfSelect={typeOfSelect}
            setTypeOfSelect={setTypeOfSelect}
            isMouseDown={isMouseDown}
            handleDeselectionOfAllGrid={props.handleDeselectionOfAllGrid}
            // Keyboard events
            pressedKey={props.pressedKey} 
          />
        )
      })}
    </section>
  );
  
}

// --- EXPORT --- //
export default SudokuGrid;