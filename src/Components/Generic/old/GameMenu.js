// --- IMPORTS --- //

// packages ----------------------------------------------------------------
import React from "react";

// styles ------------------------------------------------------------------
import './GameMenu.css';

// --- COMPONENT --- //
function GameMenu() {

  const simulateKeyPress = (key) => {
    const eventOptions = {
      key: key,
      code: `Digit${key}`, // Using 'Digit' prefix for numbers
      keyCode: key.charCodeAt(0),
      which: key.charCodeAt(0),
      bubbles: true,
      cancelable: true
    };
  
    const keyDownEvent = new KeyboardEvent('keydown', eventOptions);
    const keyUpEvent = new KeyboardEvent('keyup', eventOptions);
  
    document.dispatchEvent(keyDownEvent);
    document.dispatchEvent(keyUpEvent);
  }
  
  // --- RETURN --- //
  return (
    <section className="game_menu">
      <div className="button_pad">
        <button type="button" onClick={() => simulateKeyPress('1')}><span>1</span></button>
        <button type="button" onClick={() => simulateKeyPress('2')}><span>2</span></button>
        <button type="button" onClick={() => simulateKeyPress('3')}><span>3</span></button>
        <button type="button" onClick={() => simulateKeyPress('4')}><span>4</span></button>
        <button type="button" onClick={() => simulateKeyPress('5')}><span>5</span></button>
        <button type="button" onClick={() => simulateKeyPress('6')}><span>6</span></button>
        <button type="button" onClick={() => simulateKeyPress('7')}><span>7</span></button>
        <button type="button" onClick={() => simulateKeyPress('8')}><span>8</span></button>
        <button type="button" onClick={() => simulateKeyPress('9')}><span>9</span></button>
      </div>
    </section>
  );
}

// --- EXPORT --- //
export default GameMenu;
