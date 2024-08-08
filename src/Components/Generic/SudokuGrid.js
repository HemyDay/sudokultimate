// --- IMPORTS --- //

// packages ----------------------------------------------------------------
import React, { useState, useRef } from "react";
import { useClickOutside } from '@shelf/react-outside-click';
// components --------------------------------------------------------------
import SudokuCell from "./SudokuCell";
// styles ------------------------------------------------------------------
import './SudokuGrid.css';

// --- COMPONENT --- //
function SudokuGrid(props) {
  const GRID_GENERATION_IDS = ['111', '121', '131', '142', '152', '162', '173', '183', '193','211', '221', '231', '242', '252', '262', '273', '283', '293','311', '321', '331', '342', '352', '362', '373', '383', '393','414', '424', '434', '445', '455', '465', '476', '486', '496','514', '524', '534', '545', '555', '565', '576', '586', '596','614', '624', '634', '645', '655', '665', '676', '686', '696','717', '727', '737', '748', '758', '768', '779', '789', '799','817', '827', '837', '848', '858', '868', '879', '889', '899','917', '927', '937', '948', '958', '968', '979', '989', '999'];
  
  const [isMouseDown, setIsMouseDown] = useState(false);              // Variable to keep track of the state of the mouse down event
  const [typeOfSelect, setTypeOfSelect] = useState(false);            // Variable to keep track of the state of the selection type (is the user selecting or unselecting cells)
  const [noteMode, setNoteMode] = useState(false);                    // Variable to keep track of the state of the note mode
  const [selectedCells, setSelectedCells] = useState({});             // State to keep track of selected cells

  const ref = useRef(null);                                           // This part I'm not sure how it works, but it's part of the react-outside-click library 
  
const handleMouseDown = () => { setIsMouseDown(true); };              // Event handler for when the mouse button is pressed down
const handleMouseUp = () => { setIsMouseDown(false); };               // Event handler for when the mouse button is released

const handleClickOutside = () => {setSelectedCells({});};             // handleClickOutside fires when the user clicks outside of the grid
useClickOutside(ref, handleClickOutside, { mouseEvent: 'mousedown' });

// Function to handle cell selection
const handleCellSelection = (id, isSelected) => {
  setSelectedCells((prev) => ({
    ...prev,
    [id]: isSelected,
  }));
};

// --- RETURN --- //
  return (
    <div className="sudoku_grid"
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onContextMenu={(e) => {e.preventDefault();}}
    >
      {GRID_GENERATION_IDS.map((id) => (
        <SudokuCell
          key={id} 
          id={id}
          isMouseDown={isMouseDown}
          isCtrlDown={props.isCtrlDown}
          isShiftDown={props.isShiftDown}
          setTypeOfSelect={setTypeOfSelect}
          typeOfSelect={typeOfSelect}
          isSelected={selectedCells[id] || false}
          handleCellSelection={handleCellSelection}
          setSelectedCells={setSelectedCells}
          selectedCells={selectedCells}
          initialValue={0}
          noteMode={noteMode}
        />
      ))}
    </div>

  );
}

// --- EXPORT --- //
export default SudokuGrid;
