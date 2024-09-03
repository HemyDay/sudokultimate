
import updateACellByID from "./updateACellByID";
import cellMatchIsTrue from "./cellMatchisTrue";

const checkDuplicate = (cell, gridObject) => {

  for (let i = 0; i < gridObject.length; i++) {
    let ccell = gridObject[i];

    if (cellMatchIsTrue(cell, ccell) && ccell.value === cell.value && ccell.value !== 0 && cell.value !== 0){
      if (cell.isWarning.includes(ccell.id) === false){
        cell.isWarning.push(ccell.id);
      }
    } 
    else {
      if (cell.isWarning.indexOf(ccell.id) !== -1){
        cell.isWarning.splice(cell.isWarning.indexOf(ccell.id), 1);
      }
    }
    
  }
  return cell;
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


