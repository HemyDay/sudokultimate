import KILLER_COMBOS from '../Data/KillerCombinations.json'

let template_zone = { 
  "id" : 0,
  "goalValue" : 0,
  "cells" : [],
  "isZoneWarning" : false,
  "combos" : []
}

const generateZones = (CELLS) => {
  let output = [];

  for (let i = 0; i < CELLS.length; i++) {
    console.log(output[CELLS[i].zone.substring(0,2)])
  }

  return ''
}

export default generateZones;