import React, { useEffect, useRef } from "react";

function KeyInputListener({ onKeyPress, onKeyRelease, possibleKeys, pressedKey }) {
  // Ref to track whether a key is currently pressed
  const isKeyPressed = useRef(false);

  useEffect(() => {
    // Function to handle the 'keydown' event
    const handleKeyDown = (event) => {
      const isDigitKey = event.key >= "0" && event.key <= "9";
      const isAllowedKey = possibleKeys.includes(event.key);

      // Trigger onKeyPress if no key is currently pressed, and the pressed key is either a digit or in possibleKeys
      if (!isKeyPressed.current && (isDigitKey || isAllowedKey)) {
        onKeyPress(event.key);
        isKeyPressed.current = true; // Mark key as pressed
      }
    };

    // Function to handle the 'keyup' event
    const handleKeyUp = (event) => {
      // Trigger onKeyRelease if a key was pressed and the released key matches the pressedKey prop
      if (isKeyPressed.current && event.key === pressedKey) {
        onKeyRelease(event.key);
        isKeyPressed.current = false; // Reset key pressed status
      }
    };

    // Add event listeners for keydown and keyup on component mount
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Cleanup event listeners on component unmount to prevent memory leaks
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [onKeyPress, onKeyRelease, possibleKeys, pressedKey]); // Dependencies: Re-run effect if any of these props change

  return null; // This component does not render anything
}

export default KeyInputListener;
