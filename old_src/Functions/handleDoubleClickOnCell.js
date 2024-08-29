
const handleDoubleClickOnCell = (cell, setGridObject, gridObject) => {

  const allCells = document.querySelectorAll("div.sudoku_cell_value");
  const allNotes = document.querySelectorAll("div.sudoku_cell_value > p");
  allCells.forEach((element) => {element.setAttribute("highlighted", "false");});
  allNotes.forEach((element) => {element.setAttribute("highlighted", "false");});

  if (cell.value >= 1 && cell.value <= 9){
    allCells.forEach((element) => {if(parseInt(element.innerHTML) === cell.value) {element.setAttribute("highlighted", "true");}});
    allNotes.forEach((element) => {if(parseInt(element.innerHTML) === cell.value) {element.setAttribute("highlighted", "true");}});
  }
};

export default handleDoubleClickOnCell;