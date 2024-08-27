// --- IMPORTS --- //

// LIBRARIES
import React from "react";
// STYLE 
import "./GameMenu.css";
// COMPONENTS
import NumPad from "./NumPad";

// --- COMPONENT --- //
const GameMenu = (props) => {

  return (
    <section className="game_menu">
      <NumPad />
    </section>
    
  );
  
}

// --- EXPORT --- //
export default GameMenu;