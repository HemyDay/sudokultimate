
const handleDeselectionOfAllGrid = (setGridObject) => {
  setGridObject((prevGrid) =>
    prevGrid.map((cell) =>
      cell.isSelected ? { ...cell, isSelected: false } : cell
    )
  );
};

export default handleDeselectionOfAllGrid;