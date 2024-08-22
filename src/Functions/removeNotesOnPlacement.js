import cellMatchIsTrue from "./cellMatchisTrue";

const removeNotesOnPlacement = (cell, gridObject) => {
  if (cell.value >= 1 && cell.value <= 9){
    
    for (let i = 0; i < gridObject.length; i++) {

      let ccell = gridObject[i];

      if (cellMatchIsTrue(cell, ccell) && typeof ccell.value === 'object' && ccell.value[cell.value -1] !== 0){ 
        ccell.value[cell.value -1] = 0;
      }
      
    }
    
  }
  
}

export default removeNotesOnPlacement;