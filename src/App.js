import React, {useState} from 'react';

// COMPONENTS
import GameInterface from './Components/GameInterface';
import KeyInputManager from './Components/KeyInputManager';

// DATA
import Grid from "./Data/Grid_Blank.json" 

// FUNCTIONS
function App() {

  const POSSIBLE_KEY_INPUTS = [];
  const [PRESSED_KEY, setPRESSED_KEY] = useState(null)
  const [GRID_OBJECT, setGRID_OBJECT] = useState(Grid.grid_with_zones)

  return (<>
    <GameInterface PRESSED_KEY={PRESSED_KEY} GRID_OBJECT={GRID_OBJECT} setGRID_OBJECT={setGRID_OBJECT}/>
    <KeyInputManager POSSIBLE_KEY_INPUTS={POSSIBLE_KEY_INPUTS} PRESSED_KEY={PRESSED_KEY}/>
  </>);

}

export default App;
