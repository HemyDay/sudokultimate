const generateValueDisplay = (CELL) => {
  switch (true) {
    
    case CELL.value > 0 : 
    return <p className="not_note">{CELL.value}</p> ;
    
    case CELL.value.length > 1 : 
    return <p className="note">
      {CELL.value.map((note, index) => {
            return <span key={index}>{note === 0 ? "" : note }</span>;
          })}
    </p>;
    
    default : 
    return <p className="not_note"></p> ;
  }
}

export default generateValueDisplay;