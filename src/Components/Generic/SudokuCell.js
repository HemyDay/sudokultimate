// --- IMPORTS --- //
// LIBRARIES
  import React from "react";
// COMPONENTS
  import SudokuCellValue from "./SudokuCellValue.js";
// STYLE
  import './SudokuCell.css';
  // FUNCTIONS
  import updateACellByID from "../../Functions/updateACellByID.js";
  import handleDeselectionOfAllGrid from "../../Functions/handleDeselectionOfAllGrid.js";

// ASSETS 
import line_dwn_cl from "../../Assets/line_dwn_cl.svg";
import line_dwn_op from "../../Assets/line_dwn_op.svg";
import line_lft_cl from "../../Assets/line_lft_cl.svg";
import line_lft_op from "../../Assets/line_lft_op.svg";
import line_rgh_cl from "../../Assets/line_rgh_cl.svg";
import line_rgh_op from "../../Assets/line_rgh_op.svg";
import line_top_cl from "../../Assets/line_top_cl.svg";
import line_top_op from "../../Assets/line_top_op.svg";

// --- COMPONENT --- //
function SudokuCell(props) {

  // VARIABLES DECLARATION
    const CELL = props.cell;

  // Function to handle cell selection on mouse down
  function initiateCellSelection() {
    if (props.pressedKey !== "Control") {
      handleDeselectionOfAllGrid(props.setGridObject);
    }
    if (!CELL.isSelected) {
      updateACellByID(CELL.id, 'isSelected', true, props.setGridObject);
      props.setTypeOfSelect(true);
    } else if (props.isSelected) {
      updateACellByID(CELL.id, 'isSelected', false, props.setGridObject);
      props.setTypeOfSelect(false);
    }
  }

  // Function to handle cell selection on mouse hover
  function hoverCellSelection() {
    if (props.isMouseDown) {
      if (props.typeOfSelect && !CELL.isSelected) {
        updateACellByID(CELL.id, 'isSelected', true, props.setGridObject);
      } else if (!props.typeOfSelect && CELL.isSelected) {
        updateACellByID(CELL.id, 'isSelected', false, props.setGridObject);
      }
    }
  }

  // Determine the image based on surrounding zones
  const getSurroundingImage = (rowOffset, colOffset, closed, open) => {
    const adjacentCell = props.gridObject.find(cell => 
      cell.id.substring(0,2) === `${parseInt(props.id[0]) + rowOffset}${parseInt(props.id[1]) + colOffset}`
    );
    return !adjacentCell || adjacentCell.zone !== CELL.zone ? closed : open;
  };

  // Determine surrounding zones
  const determineSurroundingZones = () => {

    if (CELL.zone.substring(0,2) === "00") return '';

    const top = parseInt(CELL.id[0]) === 1 ? line_top_cl : getSurroundingImage(-1, 0, line_top_cl, line_top_op);
    const right = parseInt(CELL.id[1]) === 9 ? line_rgh_cl : getSurroundingImage(0, 1, line_rgh_cl, line_rgh_op);
    const down = parseInt(CELL.id[0]) === 9 ? line_dwn_cl : getSurroundingImage(1, 0, line_dwn_cl, line_dwn_op);
    const left = parseInt(CELL.id[1]) === 1 ? line_lft_cl : getSurroundingImage(0, -1, line_lft_cl, line_lft_op);

    return `url(${top}), url(${right}), url(${down}), url(${left})`;
  };

  const generateCellStyle = () => {
    let style = {
      backgroundImage : determineSurroundingZones(),
    };
    return style;
  }
  // --- RETURN --- //
  return (
    <div className="sudoku_cell"
      id={CELL.id}
      cell_row={parseInt(CELL.id[0])}
      cell_col={parseInt(CELL.id[1])}
      cell_square={parseInt(CELL.id[2])}
      cell_is-selected={CELL.isSelected.toString()}
      cell_is-editable={CELL.isEditable.toString()}
      onMouseDown={initiateCellSelection}
      onMouseEnter={hoverCellSelection}
      style={generateCellStyle(props)}
    >
      <SudokuCellValue cellValue={CELL.value} is_editable={CELL.isEditable.toString()}/>
      <span className="killer_zone_value" zone_value={props.zoneValue.toString()}>{props.zoneValue}</span>
    </div>
  );
}

// --- EXPORT --- //
export default SudokuCell;

