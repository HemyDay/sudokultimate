import handleDeselectionOfAllGrid from "./handleDeselectionOfAllGrid";
import updateACellByID from "./updateACellByID";

const handleCellSelection = (e, CELL, props) => {
  if (e.type === "mousedown") {
    if (props.pressedKey !== "Control") {
      handleDeselectionOfAllGrid(props.setGridObject);
    }
    const newSelectionState = !CELL.isSelected;
    updateACellByID(CELL.id, 'isSelected', newSelectionState, props.setGridObject);
    props.setTypeOfSelect(newSelectionState);
  } else if (e.type === "mouseenter" && props.isMouseDown) {
    const newSelectionState = props.typeOfSelect;
    if (newSelectionState !== CELL.isSelected) {
      updateACellByID(CELL.id, 'isSelected', newSelectionState, props.setGridObject);
    }
  }
};

export default handleCellSelection;