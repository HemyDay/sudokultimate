// --- IMPORTS --- //
// packages ----------------------------------------------------------------
import React, {useState} from "react";
// components --------------------------------------------------------------
import SudokuGrid from "./SudokuGrid";
import GameMenu from "./GameMenu";

import KeyInputListener from "../../Functions/KeyInputListener";
// styles ------------------------------------------------------------------
import './PlayableArea.css';

// --- COMPONENT --- //
function PlayableArea() {

  // GRID OBJECT -----------------------------------------------------------
  const [gridObject, setGridObject] = useState([
    {"id": "111" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "121" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "131" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "142" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "152" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "162" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "173" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "183" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "193" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "211" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "221" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "231" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "242" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "252" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "262" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "273" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "283" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "293" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "311" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "321" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "331" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "342" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "352" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "362" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "373" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "383" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "393" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "414" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "424" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "434" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "445" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "455" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "465" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "476" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "486" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "496" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "514" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "524" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "534" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "545" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "555" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "565" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "576" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "586" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "596" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "614" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "624" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "634" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "645" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "655" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "665" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "676" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "686" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "696" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "717" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "727" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "737" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "748" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "758" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "768" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "779" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "789" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "799" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "817" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "827" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "837" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "848" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "858" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "868" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "879" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "889" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "899" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "917" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "927" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "937" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "948" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "958" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "968" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "979" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "989" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
    {"id": "999" , "value": 0, "isSelected": false, "isWarning": false, "isEditable": true },
  ]);

  const updateGridObject = (cellID, change, newValue) => {
    setGridObject((prevGrid) => prevGrid.map(cell =>
      cell.id === cellID ? { ...cell, [change]: newValue } : cell
    ));
  };

  // KEY INPUTS ------------------------------------------------------------

  const [pressedKey, setPressedKey] = useState(null)
  const possibleKeys = ["Enter"]
  
  const onKeyPress = (keyPressed) => {
    setPressedKey(keyPressed);
    console.log("onKeyPress : " + keyPressed + " pressed")
  }; 

  const onKeyRelease = (keyReleased) => {
    console.log("onKeyRelease : " + keyReleased + " released")
    setPressedKey(null);
  };
  
  // --- RETURN --- //
  return (
    <section className="playable_area">

      <KeyInputListener 
        onKeyPress={onKeyPress} 
        onKeyRelease={onKeyRelease} 
        possibleKeys={possibleKeys} 
        pressedKey={pressedKey}
      />

      <SudokuGrid 
        gridObject={gridObject}
      />

      <GameMenu 
        pressedKey={pressedKey} 
      />

    </section>
  );
  
}

// --- EXPORT --- //
export default PlayableArea;