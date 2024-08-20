const determineZoneValue = (zone, idOfAlreadyGeneratedZones) => {
  if (idOfAlreadyGeneratedZones.includes(zone.substring(0,2)) === false) {
    idOfAlreadyGeneratedZones.push(zone.substring(0,2))
    return parseInt(zone.substring(3,5))
  } else {return "0"}
}

export default determineZoneValue;