// --- IMPORTS --- //

// LIBRARIES
import React from "react";
// STYLE 
import "./GameMenu.css";
// COMPONENTS
import NumPadAndButtons from "./NumPadAndButtons";

// --- COMPONENT --- //
const GameMenu = (props) => {

  return (
    <section className="game_menu">
      <NumPadAndButtons />
    </section>
    
  );
  
}

// --- EXPORT --- //
export default GameMenu;