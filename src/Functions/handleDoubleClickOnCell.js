
const handleDoubleClickOnCell = (cell, setGridObject, gridObject) => {
  if (cell.value >= 1 && cell.value <= 9){
    gridObject.forEach(ccell => ccell.value === cell.value && ccell.id !== cell.id ? ccell.highlighted = true : ccell.highlighted = false);
  } else {
    gridObject.forEach(ccell => ccell.highlighted = false);
  }
};

export default handleDoubleClickOnCell;