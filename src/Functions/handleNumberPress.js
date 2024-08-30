import handleErrors from "./handleErrors.js";
import removeNotesOnPlacement from "./removeNotesOnPlacement.js";

const handleNumberChange = (cell, key, GRID_OBJECT, NOTE_MODE) => {
  if (cell.isSelected && cell.isEditable) {
    let number = Number(key.code[key.code.length - 1]);                                                             
    if (NOTE_MODE === true || key.ctrlKey === true) {
      if (cell.value >= 0 && cell.value <= 9) {cell.value = [0,0,0,0,0,0,0,0,0]}
      if (cell.value[number-1] === 0 ) {cell.value[number-1] = number} else {cell.value[number-1] = 0}
    } 
    else {
      cell.value === number ? cell.value = 0 : cell.value = number;
      removeNotesOnPlacement(cell, GRID_OBJECT);
    }                                                                  
  }
}

const handleNumberPress = (key, setGRID_OBJECT, GRID_OBJECT, NOTE_MODE) => {
  setGRID_OBJECT(GRID_OBJECT.map((cell) => handleNumberChange(cell, key, GRID_OBJECT, NOTE_MODE)));
  handleErrors(GRID_OBJECT, setGRID_OBJECT);
}

export default handleNumberPress;