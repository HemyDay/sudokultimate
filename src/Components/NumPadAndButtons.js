// --- IMPORTS --- //
// packages ----------------------------------------------------------------
import React from "react";
// components --------------------------------------------------------------

// styles ------------------------------------------------------------------
import './NumPadAndButtons.css';

// --- COMPONENT --- //
function NumPadAndButtons() {

  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  
  // Function to simulate a keyboard press
  const simulateKeyPress = (key) => {
    // Create and dispatch a 'keydown' event
    const keyDownEvent = new KeyboardEvent('keydown', { key });
    window.dispatchEvent(keyDownEvent);
  };

  // Function to simulate a keyboard release
  const simulateKeyRelease = (key) => {
    // Create and dispatch a 'keyup' event
    const keyUpEvent = new KeyboardEvent('keyup', { key });
    window.dispatchEvent(keyUpEvent);
  };


  return (
    <div className="num_pad">
      {digits.map((digit) => {
        return(
          <button 
            key={digit}
            onMouseDown={() => simulateKeyPress(digit)} 
            onMouseUp={() => simulateKeyRelease(digit)} 
            onMouseLeave={() => simulateKeyRelease(digit)}
          >
            {digit}
          </button>
        )
      })}
      <button 
        id="erase_button"
        onMouseDown={() => simulateKeyPress(0)} 
        onMouseUp={() => simulateKeyRelease(0)} 
        onMouseLeave={() => simulateKeyRelease(0)}
      >
        Erase
      </button>
      <button id="note_mode_button">Note Mode</button>
    </div>
  );
}

// --- EXPORT --- //
export default NumPadAndButtons;
