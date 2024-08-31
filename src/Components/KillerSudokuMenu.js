// --- IMPORTS --- //

// LIBRARIES
import React, {useState} from "react";
// STYLE 
import "./KillerSudokuMenu.css";
// FUNCTIONS
import getAllSelectedCells from "../Functions/getAllSelectedCells";

// --- COMPONENT --- //
const KillerSudokuMenu = (props) => {
   
  const determineKillerComboToDisplay = (GRID_OBJECT, ZONES) => {
    let selectedCells = getAllSelectedCells(GRID_OBJECT);

    if (selectedCells.length > 0 && 
      selectedCells.length === ZONES[parseInt(selectedCells[0].substring(0,2))-1].cells.length &&
      selectedCells.every( (val, i, arr) => val === arr[0] )
      ){
      return ZONES[parseInt(selectedCells[0].substring(0,2))-1] 
    } else {
      return null;
    }
  
  }

  const determineDisplayCombo = (GRID_OBJECT, ZONES) => {
    let combo = determineKillerComboToDisplay(GRID_OBJECT, ZONES);
    let output = <div> </div>

    if (combo === null) {
      return <div> </div>
    } else {
      return <div>
        {combo.combos.map((combination) => {
          return(
            <div>
              <button key={combination[0]}>{combination[0]}</button>
              <input type="checkbox" value={combination[1]}></input>
            </div>
          )
        })}
      </div>
    }

  }


  return (
    <section className="killer_menu">
      {determineDisplayCombo(props.GRID_OBJECT, props.ZONES)}
    </section>
    
  );
  
}

// --- EXPORT --- //
export default KillerSudokuMenu;