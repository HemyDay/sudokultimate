import React, { useEffect, useRef } from "react";

function NumberKeyListener({ onNumberPress }) {
  const isKeyPressed = useRef(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isKeyPressed.current && event.key >= "0" && event.key <= "9") {
        onNumberPress(event.key);
        isKeyPressed.current = true;
      }
    };

    const handleKeyUp = () => {
      isKeyPressed.current = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [onNumberPress]);

  return null; // This component doesn't need to render anything
}

export default NumberKeyListener;
