// --- IMPORTS --- //
// packages ----------------------------------------------------------------
import React, {useState} from "react";
// components --------------------------------------------------------------

// styles ------------------------------------------------------------------
import './MenuButtons.css';

// --- COMPONENT --- //
function MenuButtons() {
  
  return (
    <section className="menu_buttons">
      <div className="num_pad">
        <button className="num_pad_button">1</button>
        <button className="num_pad_button">2</button>
        <button className="num_pad_button">3</button>
        <button className="num_pad_button">4</button>
        <button className="num_pad_button">5</button>
        <button className="num_pad_button">6</button>
        <button className="num_pad_button">7</button>
        <button className="num_pad_button">8</button>
        <button className="num_pad_button">9</button>
      </div>
      <div className="tool_pad">
        <button className="tool_pad_button">erase</button>
        <button className="tool_pad_button">notes</button>
      </div>
    </section>
  );
  
}

// --- EXPORT --- //
export default MenuButtons;
