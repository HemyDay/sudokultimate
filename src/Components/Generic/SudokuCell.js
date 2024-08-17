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

  const determineSurroundingZones = () => {
    let top = '';
    let right = '';
    let bottom = '';
    let left = '';

    let cellrow = parseInt(props.id[0]);
    let cellcol = parseInt(props.id[1]);

    if (props.zone !== "00") {

      if (cellrow === 1) { 
        top = line_top_cl;
      }
      else if (cellrow !== 1) {  
        let topCellObject = props.gridObject.find((cell) => cell.id.substring(0,2) === `${cellrow-1}${cellcol}`);
        topCellObject.zone === props.zone ? top = line_top_op : top = line_top_cl;
      }

      if (cellcol === 9) { 
        right = line_rgh_cl;
      }
      else if (cellcol !== 9) {  
        let rghCellObject = props.gridObject.find((cell) => cell.id.substring(0,2) === `${cellrow}${cellcol+1}`);
        rghCellObject.zone === props.zone ? right = line_rgh_op : right = line_rgh_cl;
      }

      if (cellrow === 9) { 
        bottom = line_dwn_cl;
      }
      else if (cellrow !== 9) {  
        let botCellObject = props.gridObject.find((cell) => cell.id.substring(0,2) === `${cellrow+1}${cellcol}`);
        botCellObject.zone === props.zone ? bottom = line_dwn_op  : bottom = line_dwn_cl;
      }

      if (cellcol === 1) { 
        left = line_lft_cl;
      }
      else if (cellcol !== 1) {  
        let lftCellObject = props.gridObject.find((cell) => cell.id.substring(0,2) === `${cellrow}${cellcol-1}`);
        lftCellObject.zone === props.zone ? left = line_lft_op : left = line_lft_cl;
      }
  
    }
    
    return 'url('+top+'),'+'url('+right+'),'+'url('+bottom+'),'+' url('+left+')'
  }
   
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

