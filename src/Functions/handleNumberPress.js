import handleErrors from "./handleErrors.js";
import removeNotesOnPlacement from "./removeNotesOnPlacement.js";

const handleNumberChange = (cell, number, GRID_OBJECT, NOTE_MODE) => {
  if (cell.isSelected && cell.isEditable) {                                                                                                    
    if (NOTE_MODE === true) {
      if (cell.value >= 0 && cell.value <= 9) {cell.value = [0,0,0,0,0,0,0,0,0]}
      if (cell.value[number-1] === 0 ) {cell.value[number-1] = number} else {cell.value[number-1] = 0}
    } 
    else {
      cell.value === Number(number) ? cell.value = 0 : cell.value = Number(number);
      removeNotesOnPlacement(cell, GRID_OBJECT);
    }                                                                  
  }
}

const handleNumberPress = (number, setGRID_OBJECT, GRID_OBJECT, NOTE_MODE) => {
  setGRID_OBJECT(GRID_OBJECT.map((cell) => handleNumberChange(cell, number, GRID_OBJECT, NOTE_MODE)));
  handleErrors(GRID_OBJECT, setGRID_OBJECT);
}

export default handleNumberPress;