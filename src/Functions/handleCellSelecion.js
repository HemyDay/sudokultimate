import handleDeselectionOfAllGrid from "./handleDeselectionOfAllGrid";
import updateACellByID from "./updateACellByID";

const handleCellSelection = (e, CELL, props) => {
  if (e.type === "mousedown") {
    if (e.ctrlKey === false) {
      handleDeselectionOfAllGrid(props.setGRID_OBJECT);
    }
    const newSelectionState = !CELL.isSelected;
    updateACellByID(CELL.id, 'isSelected', newSelectionState, props.setGRID_OBJECT);
    props.setTYPE_OF_SELECT(newSelectionState);
  } else if (e.type === "mouseenter" && props.IS_MOUSE_DOWN) {
    const newSelectionState = props.TYPE_OF_SELECT;
    if (newSelectionState !== CELL.isSelected) {
      updateACellByID(CELL.id, 'isSelected', newSelectionState, props.setGRID_OBJECT);
    }
  }
};

export default handleCellSelection;