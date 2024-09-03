
const handleDeselectionOfAllGrid = (setGRID_OBJECT) => {
  setGRID_OBJECT((prevGrid) =>
    prevGrid.map((cell) =>
      cell.isSelected ? { ...cell, isSelected: false } : cell
    )
  );
};

export default handleDeselectionOfAllGrid;