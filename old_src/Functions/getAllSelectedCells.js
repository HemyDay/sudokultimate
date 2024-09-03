const getAllSelectedCells = (GRID_OBJECT) => {
  let selectedCells = []
  GRID_OBJECT.forEach(cell => {if (cell.isSelected === true) {selectedCells.push(cell.zone)}});
  return selectedCells;
}

export default getAllSelectedCells;