
const duplicateFinder = (cell, gridObject) => {
  let output = cell.isWarning;
    for (let i = 0; i < gridObject.length; i++) {
      let ccell = gridObject[i];
      if (
        ( 
          ccell.id[0] === cell.id[0] || 
          ccell.id[1] === cell.id[1] ||
          ccell.id[2] === cell.id[2] ||
          ccell.zone.substring(0,2) === cell.zone.substring(0,2)
        )
        &&
        ( 
          ccell.id !== cell.id &&
          ccell.value === cell.value 
        ) 
        &&
        (
          ccell.value !== 0 && cell.value !== 0
        )
      )
      {
        if (output.includes(ccell.id) === false){
          output.push(ccell.id);
        }
      } else {
        if (output.indexOf(ccell.id) !== -1){
          output.splice(output.indexOf(ccell.id), 1);
        }
      }
    }
  return output;
};


const checkDuplicate = (cell, gridObject) => {
  let cellOutput = cell;
  cellOutput.isWarning = duplicateFinder(cell, gridObject);  
  return cellOutput;
}


const handleErrors = (gridObject, setGridObject,) => {
  setGridObject(gridObject.map((cell) => checkDuplicate(cell, gridObject)));
  console.log("Errors have been checked")
}

export default handleErrors;
