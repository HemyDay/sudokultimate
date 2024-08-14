// --- IMPORTS --- //
// packages ----------------------------------------------------------------
import React, {useState} from "react";
// components --------------------------------------------------------------
import MenuButtons from "./MenuButtons";
// styles ------------------------------------------------------------------
import './GameMenu.css';

// --- COMPONENT --- //
function GameMenu() {
  
  return (
    <section className="game_menu">
      <MenuButtons/>
    </section>
  );
  
}

// --- EXPORT --- //
export default GameMenu;