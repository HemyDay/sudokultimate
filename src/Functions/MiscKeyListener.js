import React, { useEffect, useRef } from "react";

function MiscKeyListener({ onMiscKeyPress, onMiscKeyRelease, possibleKeys }) {
  const isMiscKeyPressed = useRef(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isMiscKeyPressed.current && possibleKeys.includes(event.key)) {
        onMiscKeyPress(event.key);
        isMiscKeyPressed.current = true;
      }
    };

    const handleKeyUp = () => {
      isMiscKeyPressed.current = false;
      onMiscKeyRelease();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [onMiscKeyPress]);

  return null; // This component doesn't need to render anything
}

export default MiscKeyListener;
