import React, {useState} from 'react';

// COMPONENTS
import GameInterface from './Components/GameInterface';
import KeyInputManager from './Components/KeyInputManager';

// DATA
import Grid from "./Data/Grid_Blank.json" 
import KILLER_COMBINATIONS from "./Data/KillerCombinations.json"

// FUNCTIONS 
import handleNumberPress from './Functions/handleNumberPress';
import generateZones from './Functions/generateZones';


function App() {

  // VARIABLES
  const POSSIBLE_KEY_INPUTS = [];
  const [PRESSED_KEY, setPRESSED_KEY] = useState(null)
  const [GRID_OBJECT, setGRID_OBJECT] = useState(Grid.grid_with_zones)
  const [ZONES, setZONES] = useState([])
  const [NOTE_MODE, setNOTE_MODE] = useState(false);

  // FUNCTIONS
  const onKeyRelease = () => {setPRESSED_KEY(null);};                     // Key release handler function, sets presedKey to null
  const onKeyPress = (key) => {setPRESSED_KEY(key);
    switch (true) {
      case key.code[key.code.length - 1] >= "0" && key.code[key.code.length - 1] <= "9":  handleNumberPress(key, setGRID_OBJECT, GRID_OBJECT, NOTE_MODE); break;
      default: ; break; 
    }
  };

  generateZones(GRID_OBJECT, KILLER_COMBINATIONS)
  return (<>
    <GameInterface 
      PRESSED_KEY={PRESSED_KEY} 
      GRID_OBJECT={GRID_OBJECT} 
      setGRID_OBJECT={setGRID_OBJECT}
      NOTE_MODE={NOTE_MODE}
      setNOTE_MODE={setNOTE_MODE} 
    />
    <KeyInputManager 
      POSSIBLE_KEY_INPUTS={POSSIBLE_KEY_INPUTS} 
      PRESSED_KEY={PRESSED_KEY} 
      GRID_OBJECT={GRID_OBJECT} 
      setGRID_OBJECT={setGRID_OBJECT} 
      onKeyPress={onKeyPress} 
      onKeyRelease={onKeyRelease}
    />
  </>);

}

export default App;
