// --- IMPORTS --- //
// packages ----------------------------------------------------------------
import React, {useState} from "react";
// components --------------------------------------------------------------
import MenuButtons from "./MenuButtons";
// styles ------------------------------------------------------------------
import './GameMenu.css';

// --- COMPONENT --- //
function GameMenu(props) {
  
  return (
    <section className="game_menu">
      <MenuButtons/>
      <div>
        <p>Pressed key : {props.pressedKey} </p>
        <p>Note mode : {props.isInNoteMode.toString()}</p>
      </div>
    </section>
  );
  
}

// --- EXPORT --- //
export default GameMenu;