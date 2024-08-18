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

//  const randomColors = ["#82531E80","#2219F880","#DE9BE480","#96ACF280","#DA3D1680","#96DF5E80","#18568B80","#087C7280","#D4510080","#EEFFAA80","#1D584C80","#69718580","#9D92A480","#C283A280","#F4712780","#CBFF9280","#E036B480","#B6F70080","#9F31FA80","#339ACC80","#9BCC9980","#1A175980","#BC8C3880","#F9401E80","#37606F80","#33299D80","#17836E80","#6D302680","#8AC94580","#CC5E1B80","#AE373680","#C95A85"]
  // Function to handle cell selection on mouse down
  function initiateCellSelection() {
    if (props.pressedKey !== "Control") {
      props.handleDeselectionOfAllGrid();
    }
    if (!props.isSelected && props.isEditable) {
      props.updateGridObject(props.id, 'isSelected', true);
      props.setTypeOfSelect(true);
    } else if (props.isSelected && props.isEditable) {
      props.updateGridObject(props.id, 'isSelected', false);
      props.setTypeOfSelect(false);
    }
  }

  // Function to handle cell selection on mouse hover
  function hoverCellSelection() {
    if (props.isMouseDown) {
      if (props.typeOfSelect && !props.isSelected && props.isEditable) {
        props.updateGridObject(props.id, 'isSelected', true);
      } else if (!props.typeOfSelect && props.isSelected && props.isEditable) {
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
      // backgroundColor : randomColors[Number(props.zone.substring(0,2))-1],
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
      <SudokuCellValue cellValue={props.value} />
    </div>
  );
}

// --- EXPORT --- //
export default SudokuCell;

