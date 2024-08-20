// ASSETS 
  import line_dwn_cl from "../Assets/line_dwn_cl.svg";
  import line_dwn_op from "../Assets/line_dwn_op.svg";
  import line_lft_cl from "../Assets/line_lft_cl.svg";
  import line_lft_op from "../Assets/line_lft_op.svg";
  import line_rgh_cl from "../Assets/line_rgh_cl.svg";
  import line_rgh_op from "../Assets/line_rgh_op.svg";
  import line_top_cl from "../Assets/line_top_cl.svg";
  import line_top_op from "../Assets/line_top_op.svg";

  
  // Determine the image based on surrounding zones
   const getSurroundingImage = (rowOffset, colOffset, closed, open, CELL, gridObject) => {
    const adjacentCell = gridObject.find(cell => 
      cell.id.substring(0,2) === `${parseInt(CELL.id[0]) + rowOffset}${parseInt(CELL.id[1]) + colOffset}`
    );
    return !adjacentCell || adjacentCell.zone !== CELL.zone ? closed : open;
  };

// Determine surrounding zones
  const determineSurroundingZones = (CELL, gridObject) => {

    if (CELL.zone.substring(0,2) === "00") return '';

    const top = parseInt(CELL.id[0]) === 1 ? line_top_cl : getSurroundingImage(-1, 0, line_top_cl, line_top_op, CELL, gridObject);
    const right = parseInt(CELL.id[1]) === 9 ? line_rgh_cl : getSurroundingImage(0, 1, line_rgh_cl, line_rgh_op, CELL, gridObject);
    const down = parseInt(CELL.id[0]) === 9 ? line_dwn_cl : getSurroundingImage(1, 0, line_dwn_cl, line_dwn_op, CELL, gridObject);
    const left = parseInt(CELL.id[1]) === 1 ? line_lft_cl : getSurroundingImage(0, -1, line_lft_cl, line_lft_op, CELL, gridObject);

    return `url(${top}), url(${right}), url(${down}), url(${left})`;
  };

// Generate inline style
  const generateCellStyle = (CELL, gridObject) => {
    let style = {
      backgroundImage : determineSurroundingZones(CELL, gridObject),
    };
    return style;
  }

export default generateCellStyle;