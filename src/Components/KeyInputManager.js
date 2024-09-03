// --- IMPORTS --- //
import { useEffect, useRef } from "react";

// --- COMPONENT --- //
const KeyInputManager = ({ onKeyPress, onKeyRelease, PRESSED_KEY }) => {
  // Ref to track if a key is currently pressed
  const isKeyPressed = useRef(false);

  useEffect(() => {
    // Function to handle the keydown event
    const handleKeyDown = (e) => {
      if (!isKeyPressed.current) {
        switch (true) {  
          case e.code[e.code.length - 1] >= "0" && e.code[e.code.length - 1] <= "9" : 
            isKeyPressed.current = true;
            e.preventDefault();
            onKeyPress(e);
          break; 
          default: ; break; 
        } 
      }   
    };

    // Function to handle the keyup event
    const handleKeyUp = (e) => {
      // Trigger onKeyRelease if the released KEY matches the pressed KEY
      if (isKeyPressed.current && e.key === PRESSED_KEY.key) {
        onKeyRelease(e);
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
    
  }, [onKeyPress, onKeyRelease, PRESSED_KEY]);

  return null; // This component does not render any UI
}



// --- EXPORT --- //
export default KeyInputManager;
