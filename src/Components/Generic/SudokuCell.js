// --- IMPORTS --- //
import React from "react";
import './SudokuCell.css';
import SudokuCellValue from "./SudokuCellValue.js";

// --- STYLES --- //
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

  // Function to handle cell selection on mouse down
  function initiateCellSelection() {
    if (props.pressedKey !== "Control") {
      props.handleDeselectionOfAllGrid();
    }
    if (!props.isSelected) {
      props.updateGridObject(props.id, 'isSelected', true);
      props.setTypeOfSelect(true);
    } else if (props.isSelected) {
      props.updateGridObject(props.id, 'isSelected', false);
      props.setTypeOfSelect(false);
    }
  }

  // Function to handle cell selection on mouse hover
  function hoverCellSelection() {
    if (props.isMouseDown) {
      if (props.typeOfSelect && !props.isSelected) {
        props.updateGridObject(props.id, 'isSelected', true);
      } else if (!props.typeOfSelect && props.isSelected) {
        props.updateGridObject(props.id, 'isSelected', false);
      }
    }
  }

  // Determine the image based on surrounding zones
  const getSurroundingImage = (rowOffset, colOffset, closed, open) => {
    const adjacentCell = props.gridObject.find(cell => 
      cell.id.substring(0,2) === `${parseInt(props.id[0]) + rowOffset}${parseInt(props.id[1]) + colOffset}`
    );
    return !adjacentCell || adjacentCell.zone !== props.zone ? closed : open;
  };

  // Determine surrounding zones
  const determineSurroundingZones = () => {

    if (props.zone.substring(0,2) === "00") return '';

    const top = parseInt(props.id[0]) === 1 ? line_top_cl : getSurroundingImage(-1, 0, line_top_cl, line_top_op);
    const right = parseInt(props.id[1]) === 9 ? line_rgh_cl : getSurroundingImage(0, 1, line_rgh_cl, line_rgh_op);
    const down = parseInt(props.id[0]) === 9 ? line_dwn_cl : getSurroundingImage(1, 0, line_dwn_cl, line_dwn_op);
    const left = parseInt(props.id[1]) === 1 ? line_lft_cl : getSurroundingImage(0, -1, line_lft_cl, line_lft_op);

    return `url(${top}), url(${right}), url(${down}), url(${left})`;
  };

  const generateCellStyle = (props) => {
    let style = {
      backgroundImage : determineSurroundingZones(),
    };
    return style;
  }
  // --- RETURN --- //
  return (
    <div className="sudoku_cell"
      id={props.id}
      cell_row={parseInt(props.id[0])}
      cell_col={parseInt(props.id[1])}
      cell_square={parseInt(props.id[2])}
      cell_is-selected={props.isSelected.toString()}
      cell_is-editable={props.isEditable.toString()}
      onMouseDown={initiateCellSelection}
      onMouseEnter={hoverCellSelection}
      style={generateCellStyle(props)}
    >
      <SudokuCellValue cellValue={props.value} is_editable={props.isEditable.toString()}/>
      <span className="killer_zone_value" cellvalue={props.cellValue.toString()}>{props.cellValue}</span>
    </div>
  );
}

// --- EXPORT --- //
export default SudokuCell;

