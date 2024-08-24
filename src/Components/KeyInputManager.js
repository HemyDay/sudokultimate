// --- IMPORTS --- //
import { useEffect, useRef } from "react";

// --- COMPONENT --- //
const KeyInputManager = ({ onKeyPress, onKeyRelease, POSSIBLE_KEY_INPUTS, PRESSED_KEY }) => {
  // Ref to track if a key is currently pressed
  const isKeyPressed = useRef(false);

  useEffect(() => {
    // Function to handle the keydown event
    const handleKeyDown = (event) => {
      const isDigitKey = event.key >= "0" && event.key <= "9";
      const isAllowedKey = POSSIBLE_KEY_INPUTS.includes(event.key);

      // Trigger onKeyPress if the key is valid and not already pressed
      if (!isKeyPressed.current && (isDigitKey || isAllowedKey)) {
        onKeyPress(event.key);
        isKeyPressed.current = true;
      }
    };

    // Function to handle the keyup event
    const handleKeyUp = (event) => {
      // Trigger onKeyRelease if the released key matches the pressed key
      if (isKeyPressed.current && event.key === PRESSED_KEY) {
        onKeyRelease(event.key);
        isKeyPressed.current = false;
      }
    };

    // Add event listeners for keydown and keyup
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [onKeyPress, onKeyRelease, POSSIBLE_KEY_INPUTS, PRESSED_KEY]);

  return null; // This component does not render any UI
}

// --- EXPORT --- //
export default KeyInputManager;
