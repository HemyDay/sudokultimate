
const handleZoneCombinations = (GRID_OBJECT, KILLER_COMBINATIONS) => {
  const ZONES_OBJECT = [[]];

  // Assign an id, goalValue and cells for each zone
  for (let ci = 0; ci < GRID_OBJECT.length; ci++) {                                          

    if (!ZONES_OBJECT[parseInt(GRID_OBJECT[ci].zone.substring(0,2))]) {                                 
      let newZone = {}
      newZone.id = parseInt(GRID_OBJECT[ci].zone.substring(0,2));
      newZone.goalValue = parseInt(GRID_OBJECT[ci].zone.substring(3,5));
      newZone.cells = []
      newZone.cells.push(GRID_OBJECT[ci])
      ZONES_OBJECT.push(newZone)
    } else {
      ZONES_OBJECT[parseInt(GRID_OBJECT[ci].zone.substring(0,2))].cells.push(GRID_OBJECT[ci])
    }

  }

  // Remove the first element as it's empty
  ZONES_OBJECT.shift();

  // Adds all possible combos for this configuration, plus a boolean value for each to determine if it's active or not
  for (let zi = 0; zi < ZONES_OBJECT.length; zi++) {

    if (ZONES_OBJECT[zi].cells.length > 1){
      ZONES_OBJECT[zi].combos = KILLER_COMBINATIONS[ZONES_OBJECT[zi].cells.length][ZONES_OBJECT[zi].goalValue].map((combo) => [[combo],[true]]);
    } else {
      ZONES_OBJECT[zi].combos = [[[ZONES_OBJECT[zi].goalValue.toString()], [true]]]
    }
  }

  return ZONES_OBJECT;
}

export default handleZoneCombinations;

