const updateACellByID = (cellID, change, newValue, setGridObject) => {
  setGridObject((prevGrid) => prevGrid.map(cell =>
    cell.id === cellID ? { ...cell, [change]: newValue } : cell
  ));
};

export default updateACellByID;