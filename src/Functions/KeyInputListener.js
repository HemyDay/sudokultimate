import React, { useEffect, useRef } from "react";

function KeyInputListener({onKeyPress, onKeyRelease, possibleKeys, pressedKey}) {
  const isKeyPressed = useRef(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((!isKeyPressed.current && event.key >= "0" && event.key <= "9") || (!isKeyPressed.current && possibleKeys.includes(event.key))) {
        onKeyPress(event.key);
        isKeyPressed.current = true;
      }
    };

    const handleKeyUp = (event) => {
      if (isKeyPressed.current && event.key === pressedKey) {
        onKeyRelease(event.key);
        isKeyPressed.current = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [onKeyPress]);

  return null; // This component doesn't need to render anything
}

export default KeyInputListener;
