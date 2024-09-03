// --- IMPORTS --- //
// LIBRARIES
import React, {useState} from 'react';

// DATA
import levelTemplate from '../Data/levelTemplate.json'
import LEVEL_1 from '../Data/LEVEL_1.json'

// FUNCTIONS

// COMPONENTS
import GameGrid from './GameGrid';
import KeyInputManager from './KeyInputManager';

// --- COMPONENT --- //
const LevelHandling = (props) => {

  const [LEVEL, setLEVEL] = useState({
    "cells" : LEVEL_1.cells
  }
)

  return (
    <section>
      <GameGrid LEVEL={LEVEL} setLEVEL={setLEVEL}/>
    </section>
  );
  
}

// --- EXPORT --- //
export default LevelHandling;