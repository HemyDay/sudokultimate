
const cellMatchIsTrue = (cell, ccell) => {
  if (
    ( 
      ccell.id[0] === cell.id[0] || 
      ccell.id[1] === cell.id[1] ||
      ccell.id[2] === cell.id[2] ||
      ccell.zone.substring(0,2) === cell.zone.substring(0,2)
    )
    &&
    ( 
      ccell.id !== cell.id
    ) 
  )
  {
    return true;
  } else {
    return false;
  }
  
}

export default cellMatchIsTrue;
