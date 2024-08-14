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
        <p>pressed key : {props.pressedKey} </p>
      </div>
    </section>
  );
  
}

// --- EXPORT --- //
export default GameMenu;