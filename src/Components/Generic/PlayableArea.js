// --- IMPORTS --- //

// packages ----------------------------------------------------------------
import React from "react";
// components --------------------------------------------------------------
import SudokuGrid from "./SudokuGrid";
// styles ------------------------------------------------------------------
import './PlayableArea.css';

// --- COMPONENT --- //
function PlayableArea() {

  return (
    <section className="playable_area">
      <SudokuGrid/>
    </section>
  );
  
}

// --- EXPORT --- //
export default PlayableArea;