
const generateZones = (GRID_OBJECT, KILLER_COMBINATIONS) => {
  let zoneID = [];
  GRID_OBJECT.forEach(cell => {
    if (zoneID.indexOf(cell.zone) === -1) {
      zoneID.push(cell.zone);
    }
  });
  console.log(zoneID);
}

export default generateZones;