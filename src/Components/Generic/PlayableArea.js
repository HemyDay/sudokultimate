// --- IMPORTS --- //
// LIBRARIES
  import React, { useState } from "react";
// COMPONENTS
  import SudokuGrid from "./SudokuGrid";
  import GameMenu from "./GameMenu";
  import KeyInputListener from "./KeyInputListener";
// STYLE
  import './PlayableArea.css';
// FUNCTIONS
  import handleNumberPress from "../../Functions/handleNumberPress.js";
  import handleDeselectionOfAllGrid from "../../Functions/handleDeselectionOfAllGrid.js";
// DATA
  import Grid from "../../Grids/Grid_Blank.json" 

// --- COMPONENT --- //
function PlayableArea() {
  // VARIABLES DECLARATION
    const [gridObject, setGridObject] = useState(Grid.grid_with_zones);   // State to store grid cell data
    const [pressedKey, setPressedKey] = useState(null);                   // Currently pressed key
    const possibleKeys = ["Enter", "Shift", "Escape", "Control"];         // State to track the currently pressed key
    const [isInNoteMode, setIsInNoteMode] = useState(false);              // State to toggle note-taking mode

  // FUNCTIONS DECLARATION

    // Key press handler function
    const onKeyPress = (keyPressed) => {
      // Save the currently pressed key in pressedKey
        setPressedKey(keyPressed);
        switch (true) {
          case keyPressed >= 0 && keyPressed <= 9:  handleNumberPress(keyPressed, setGridObject, gridObject, isInNoteMode); break;
          case keyPressed === "Escape":             handleDeselectionOfAllGrid(setGridObject); break;
          case keyPressed === "Shift":              setIsInNoteMode(!isInNoteMode); break;
          default: break;
        }
      };

    // Key release handler function, sets presedKey to null
    const onKeyRelease = () => {setPressedKey(null);};

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
        setGridObject={setGridObject}
        isInNoteMode={isInNoteMode}
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