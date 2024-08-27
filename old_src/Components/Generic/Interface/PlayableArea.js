// --- IMPORTS --- //
// LIBRARIES
  import React, { useState } from "react";
// COMPONENTS
  import SudokuGrid from "../GameGrid/SudokuGrid.js";
  import GameMenu from "./GameMenu.js";
  import KeyInputListener from "./KeyInputListener.js";
// STYLE
  import './PlayableArea.css';
// FUNCTIONS
  import handleNumberPress from "../../../Functions/handleNumberPress.js";
  import handleDeselectionOfAllGrid from "../../../../src/Functions/handleDeselectionOfAllGrid.js";
// DATA
  import Grid from "../../../../src/Data/Grid_Blank.json" 

// --- COMPONENT --- //
function PlayableArea() {
  // VARIABLES DECLARATION
    const [gridObject, setGridObject] = useState(Grid.grid_with_zones);   // State to store grid cell data
    const [pressedKey, setPressedKey] = useState(null);                   // Currently pressed key
    const possibleKeys = ["Enter", "Shift", "Escape", "Control"];         // State to track the currently pressed key
    const [isInNoteMode, setIsInNoteMode] = useState(false);              // State to toggle note-taking mode

  // FUNCTIONS DECLARATION
    const onKeyRelease = () => {setPressedKey(null);};                    // Key release handler function, sets presedKey to null
    const onKeyPress = (keyPressed) => {                                  // Key press handler function
        setPressedKey(keyPressed);
        switch (true) {
          case keyPressed >= 0 && keyPressed <= 9:  handleNumberPress(keyPressed, setGridObject, gridObject, isInNoteMode); break;
          default: break;
        }
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