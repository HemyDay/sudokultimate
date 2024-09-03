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

  const updateComboActiveForSaidZone = (combo, combination, ZONES, setZONES) => {
    console.log(ZONES)
    ZONES[combo.id-1].combos.find((e) => e === combination)[1] = [!combination[1]];
    console.log(ZONES)
  }

  let combo = determineKillerComboToDisplay(props.GRID_OBJECT, props.ZONES);

  if (combo === null) {
    return (
    <section className="killer_menu">
      <div> </div>
    </section>  
    )
  } else {
    return (
    <section className="killer_menu">
        <div className="combo_info"> 
          <p>Value : {combo.goalValue} </p>
          <p>Cells : {combo.cells.length}</p>
        </div>
        {combo.combos.map((combination) => {
          return(
            <button 
              className="one_combo" 
              key={combination[0]}
              is_active={combination[1]}
              onClick={() => updateComboActiveForSaidZone(combo, combination, props.ZONES, props.setZONES)}
            >
              {combination[0]}
            </button>
          )
        })}
    </section>
    )
  }
  
}

// --- EXPORT --- //
export default KillerSudokuMenu;