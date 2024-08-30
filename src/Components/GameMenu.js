// --- IMPORTS --- //

// LIBRARIES
import React from "react";
// STYLE 
import "./GameMenu.css";
// COMPONENTS
import NumPadAndButtons from "./NumPadAndButtons";
import KillerSudokuMenu from "./KillerSudokuMenu";

// --- COMPONENT --- //
const GameMenu = (props) => {

  return (
    <section className="game_menu">
      <NumPadAndButtons NOTE_MODE={props.NOTE_MODE} setNOTE_MODE={props.setNOTE_MODE}/>
      <KillerSudokuMenu GRID_OBJECT={props.GRID_OBJECT} />
    </section>
    
  );
  
}

// --- EXPORT --- //
export default GameMenu;