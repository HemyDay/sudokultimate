// --- IMPORTS --- //

// packages ----------------------------------------------------------------
import React, {useState} from "react";
// components --------------------------------------------------------------
import SudokuGrid from "./SudokuGrid";
// styles ------------------------------------------------------------------
import './PlayableArea.css';

// --- COMPONENT --- //
function PlayableArea() {

  // Key listeners ----------------------------------------------------------------
  const [isCtrlDown, setIsCtrlDown] = useState(false);
  const [isShiftDown, setIsShiftDown] = useState(false);

  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'Control' : if (isCtrlDown === false) {setIsCtrlDown(true)}; ; break;
      case 'Shift' : if (isShiftDown === false) {setIsShiftDown(true)}; ; break;
    }
  });

  document.addEventListener('keyup', (event) => {
    switch (event.key) {
      case 'Control' : if (isCtrlDown === true) {setIsCtrlDown(false)}; break;
      case 'Shift' : if (isShiftDown === true) {setIsShiftDown(false)}; break;
    }
  });

  return (
    <section className="playable_area">
      <SudokuGrid
        isCtrlDown={isCtrlDown}
        isShiftDown={isShiftDown}
      />
    </section>
  );
  
}

// --- EXPORT --- //
export default PlayableArea;