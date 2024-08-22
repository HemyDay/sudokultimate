import handleErrors from "./handleErrors";
import removeNotesOnPlacement from "./removeNotesOnPlacement.js";

const handleNumberChange = (cell, number, isInNoteMode, gridObject) => {
  if (cell.isSelected && cell.isEditable) {                                                                                                    
    if (isInNoteMode) {
      if (cell.value >= 0 && cell.value <= 9) {cell.value = [0,0,0,0,0,0,0,0,0]}
      if (cell.value[number-1] === 0 ) {cell.value[number-1] = number} else {cell.value[number-1] = 0}
    } 
    else {
      cell.value === Number(number) ? cell.value = 0 : cell.value = Number(number);
      removeNotesOnPlacement(cell, gridObject);
    }                                                                  
  }
}

const handleNumberPress = (number, setGridObject, gridObject, isInNoteMode) => {
  setGridObject(gridObject.map((cell) => handleNumberChange(cell, number, isInNoteMode, gridObject)));
  handleErrors(gridObject, setGridObject);
}

export default handleNumberPress;