// --- IMPORTS --- //
// packages ----------------------------------------------------------------
import React, {useState} from "react";
// components --------------------------------------------------------------
import SudokuGrid from "./SudokuGrid";
import MiscKeyListener from "../../Functions/MiscKeyListener";
// styles ------------------------------------------------------------------
import './PlayableArea.css';

// --- COMPONENT --- //
function PlayableArea() {
  
  const [pressedMiscKey, setPressedMiscKey] = useState(null)
  let possibleKeys = ["Control", "Enter", "Space"]
  const onMiscKeyPress = (keyPressed) => {setPressedMiscKey(keyPressed);}; 
  const onMiscKeyRelease = () => {setPressedMiscKey(null);};
  
  return (
    <section className="playable_area">
      <MiscKeyListener onMiscKeyPress={onMiscKeyPress} onMiscKeyRelease={onMiscKeyRelease} possibleKeys={possibleKeys}/>
      <SudokuGrid/>
      
    </section>
  );
  
}

// --- EXPORT --- //
export default PlayableArea;