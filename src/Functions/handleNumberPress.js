import handleErrors from "./handleErrors.js";
import removeNotesOnPlacement from "./removeNotesOnPlacement.js";

const handleNumberChange = (cell, number, GRID_OBJECT, capslock) => {
  if (cell.isSelected && cell.isEditable) {                                                                                                    
    if (capslock === true) {
      if (cell.value >= 0 && cell.value <= 9) {cell.value = [0,0,0,0,0,0,0,0,0]}
      if (cell.value[number-1] === 0 ) {cell.value[number-1] = number} else {cell.value[number-1] = 0}
    } 
    else {
      cell.value === Number(number) ? cell.value = 0 : cell.value = Number(number);
      removeNotesOnPlacement(cell, GRID_OBJECT);
    }                                                                  
  }
}

const handleNumberPress = (number, capslock, setGRID_OBJECT, GRID_OBJECT) => {
  setGRID_OBJECT(GRID_OBJECT.map((cell) => handleNumberChange(cell, number, GRID_OBJECT)));
  handleErrors(GRID_OBJECT, setGRID_OBJECT);
}

export default handleNumberPress;