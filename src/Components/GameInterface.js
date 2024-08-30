// --- IMPORTS --- //
// LIBRARIES
import React, {useState} from 'react';

// STYLE 
import "./GameInterface.css";
// COMPONENTS
import GameGrid from "./GameGrid";
import GameMenu from "./GameMenu";


// --- COMPONENT --- //
const GameInterface = (props) => {

  return (
    <section className="game_interface">
      <GameGrid PRESSED_KEY={props.PRESSED_KEY} GRID_OBJECT={props.GRID_OBJECT} setGRID_OBJECT={props.setGRID_OBJECT}/>
      <GameMenu NOTE_MODE={props.NOTE_MODE} setNOTE_MODE={props.setNOTE_MODE} GRID_OBJECT={props.GRID_OBJECT}/>
    </section>
  );
  
}

// --- EXPORT --- //
export default GameInterface;