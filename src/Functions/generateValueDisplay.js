const generateValueDisplay = (CELL) => {
  switch (true) {
    case CELL.value > 0         : return <p className="not_draft">{CELL.value}</p> ;
    case CELL.value.length > 1  : return <p className="draft">{CELL.value}</p>;
    default                     : return <p className="not_draft"></p> ;
  }
}

export default generateValueDisplay;