const selectCellInSameZone = (ccell, zoneID) => {
  let zoneCells = [];
  if (ccell.zone.substring(0,2) === zoneID.substring(0,2)) {
    ccell.isSelected = true;
    zoneCells.push(ccell);
  } else {
    ccell.isSelected = false;
  }
  return ccell;
}
const handleZoneSelection = (CELL, props) => {
  props.setGRID_OBJECT(props.GRID_OBJECT.map((ccell) => selectCellInSameZone(ccell, CELL.zone)));

}

export default handleZoneSelection;