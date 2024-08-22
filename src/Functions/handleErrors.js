
import updateACellByID from "./updateACellByID";

const checkDuplicate = (cell, gridObject) => {
  let cellOutput = cell;
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
        ccell.value === cell.value &&
        (ccell.value !== 0 && cell.value !== 0)
      ) 
    )
    {
      if (cellOutput.isWarning.includes(ccell.id) === false){
        cellOutput.isWarning.push(ccell.id);
      }
    } else {
      if (cellOutput.isWarning.indexOf(ccell.id) !== -1){
        cellOutput.isWarning.splice(cellOutput.isWarning.indexOf(ccell.id), 1);
      }
    }
  }
  return cellOutput;
}

const checkZoneTotal = (gridObject, setGridObject) => {
  let numberOfZones = 0;
  gridObject.forEach(item => parseInt(item.zone.substring(0,2)) > numberOfZones ? numberOfZones = parseInt(item.zone.substring(0,2)) : "" );

  for (let z = 0; z < numberOfZones; z++) {
    let zoneCells = gridObject.filter(item => parseInt(item.zone.substring(0,2)) === (z+1))
    let zoneMaxValue = parseInt(zoneCells[0].zone.substring(3,5))
    let zoneCurrentValue = 0;
    zoneCells.forEach(item => {zoneCurrentValue += item.value})

    if (zoneCurrentValue > zoneMaxValue) {
      for (let i = 0; i < zoneCells.length; i++) {
        let newWarning = zoneCells[i].isWarning;
        if (newWarning.indexOf('Z') === -1){newWarning.push('Z')};
        updateACellByID(zoneCells[i].id, 'isWarning', newWarning , setGridObject) 
      }
    } else {
      for (let j = 0; j < zoneCells.length; j++) {
        let newWarning = zoneCells[j].isWarning;
        if (newWarning.indexOf('Z') !== -1){newWarning.splice(newWarning.indexOf('Z'), 1);}
        updateACellByID(zoneCells[j].id, 'isWarning', newWarning , setGridObject) 
      }
    }

  }

}

const handleErrors = (gridObject, setGridObject,) => {
  setGridObject(gridObject.map((cell) => checkDuplicate(cell, gridObject)));
  checkZoneTotal(gridObject, setGridObject);
}

export default handleErrors;
