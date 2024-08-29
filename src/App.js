import React, {useState} from 'react';

// COMPONENTS
import GameInterface from './Components/GameInterface';
import KeyInputManager from './Components/KeyInputManager';

// DATA
import Grid from "./Data/Grid_Blank.json" 

// FUNCTIONS 
import handleNumberPress from './Functions/handleNumberPress';


function App() {

  // VARIABLES
  const POSSIBLE_KEY_INPUTS = [];
  const [PRESSED_KEY, setPRESSED_KEY] = useState(null)
  const [GRID_OBJECT, setGRID_OBJECT] = useState(Grid.grid_with_zones)
  const [NOTE_MODE, setNOTE_MODE] = useState(false);

  // FUNCTIONS
  const onKeyRelease = () => {setPRESSED_KEY(null);};                     // Key release handler function, sets presedKey to null
  const onKeyPress = (keyPressed) => {                                    // Key press handler function
    setPRESSED_KEY(keyPressed);
    switch (true) {
      case keyPressed >= 0 && keyPressed <= 9:  handleNumberPress(keyPressed, setGRID_OBJECT, GRID_OBJECT, NOTE_MODE); break;
      default: break;
    }
};

  return (<>
    <GameInterface 
      PRESSED_KEY={PRESSED_KEY} 
      GRID_OBJECT={GRID_OBJECT} 
      setGRID_OBJECT={setGRID_OBJECT}
    />
    <KeyInputManager 
      POSSIBLE_KEY_INPUTS={POSSIBLE_KEY_INPUTS} 
      PRESSED_KEY={PRESSED_KEY} GRID_OBJECT={GRID_OBJECT} 
      setGRID_OBJECT={setGRID_OBJECT} 
      onKeyPress={onKeyPress} 
      onKeyRelease={onKeyRelease}
      />
  </>);

}

export default App;
