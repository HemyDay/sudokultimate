// --- IMPORTS --- //
import React, { useState } from "react";
import SudokuGrid from "./SudokuGrid";
import GameMenu from "./GameMenu";
import KeyInputListener from "../../Functions/KeyInputListener";
import './PlayableArea.css';
import Grid from "../../Grids/Grid_Blank.json"

// --- COMPONENT --- //
function PlayableArea() {
  // State to store grid cell data
  const [gridObject, setGridObject] = useState(Grid.grid_blank);

  // Function to update grid cell properties
  const updateGridObject = (cellID, change, newValue) => {
    setGridObject((prevGrid) => prevGrid.map(cell =>
      cell.id === cellID ? { ...cell, [change]: newValue } : cell
    ));
  };

  /// State to track the currently pressed key
  const [pressedKey, setPressedKey] = useState(null);
  const possibleKeys = ["Enter", "Shift", "Escape", "Control"];
  
  // State to toggle note-taking mode
  const [isInNoteMode, setIsInNoteMode] = useState(false);

  const handleNumberChange = (cell, number) => { 
  // Check if the cell is selected and editable
    if (cell.isSelected && cell.isEditable) {
    // Save current state of the cell in newCell
      let newCell = cell;
    // If the cell.value is not already the number, update it to be 0, else update it to be the number
      newCell.value === number ? newCell.value = 0 : newCell.value = number;
    // return the new cell with changed value
      return newCell
    // If the cell is not selected or editable, return its current state
    } else {return cell;}
  };

  const handleNoteChange = (cell, number) => {
  // Check if the cell is selected and editable
    if (cell.isSelected && cell.isEditable) {
    // Save current state of the cell in newCell
      let newCell = cell;
    // If the cell.value is not already an array, create one
      if (newCell.value >= 0 && newCell.value <= 9) {newCell.value = [0,0,0,0,0,0,0,0,0]}
    // Toggle the selected number in the cell.value array (0-indexed)
      if (newCell.value[number-1] === 0 ) {newCell.value[number-1] = number} else {newCell.value[number-1] = 0}
    // return the new cell with changed array
      return newCell;
  // If the cell is not selected or editable, return its current state
    } else {return cell;}
  }

  // Function to handle number input for normal or note mode
  const handleNumberPress = (number) => {
  // Check if the game is not in note mode
    if (!isInNoteMode) {
    // Execute the funciton to handle number change
      setGridObject(gridObject.map((cell) => handleNumberChange(cell, number)));
    } else {
    // Execute the function to handle note change
      setGridObject(gridObject.map((cell) => handleNoteChange(cell, number)));
    }
  };

  // Function to deselect all selected cells in the grid. For each cell in the GridObject, set its isSelected property to false
  const handleDeselectionOfAllGrid = () => {
    setGridObject((prevGrid) =>
      prevGrid.map((cell) =>
        cell.isSelected ? { ...cell, isSelected: false } : cell
      )
    );
  };

  // Key press handler function
  const onKeyPress = (keyPressed) => {
  // Save the currently pressed key in pressedKey
    setPressedKey(keyPressed);
    switch (true) {
      case keyPressed >= 0 && keyPressed <= 9:
        handleNumberPress(keyPressed);
        break;
      case keyPressed === "Escape":
        handleDeselectionOfAllGrid();
        break;
      case keyPressed === "Shift":
        setIsInNoteMode(!isInNoteMode);
        break;
    }
  };

  // Key release handler function, sets presedKey to null
  const onKeyRelease = (keyReleased) => {
    setPressedKey(null);
  };

  // --- RETURN --- //
  return (
    <section className="playable_area">
      <KeyInputListener 
        onKeyPress={onKeyPress} 
        onKeyRelease={onKeyRelease} 
        possibleKeys={possibleKeys} 
        pressedKey={pressedKey}
      />

      <SudokuGrid 
        gridObject={gridObject}
        updateGridObject={updateGridObject}
        isInNoteMode={isInNoteMode}
        handleDeselectionOfAllGrid={handleDeselectionOfAllGrid}
        pressedKey={pressedKey} 
      />

      <GameMenu 
        pressedKey={pressedKey} 
        isInNoteMode={isInNoteMode}
      />
    </section>
  );
}

// --- EXPORT --- //
export default PlayableArea;