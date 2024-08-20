const handleNumberChange = (cell, number, isInNoteMode) => {
  if (cell.isSelected && cell.isEditable) {                                             
    let newCell = cell;                                                                 
    if (isInNoteMode) {
      if (newCell.value >= 0 && newCell.value <= 9) {newCell.value = [0,0,0,0,0,0,0,0,0]}
      if (newCell.value[number-1] === 0 ) {newCell.value[number-1] = number} else {newCell.value[number-1] = 0}
    } else {
      newCell.value === number ? newCell.value = 0 : newCell.value = number;
    }
    return newCell;                                                                     
  } else {return cell;}   
}

const handleNumberPress = (number, setGridObject, gridObject, isInNoteMode) => {
  setGridObject(gridObject.map((cell) => handleNumberChange(cell, number, isInNoteMode)));
}

export default handleNumberPress;