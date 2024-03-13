import { useState } from 'react'
import './Box.css'

/*
Box component represents a clickable box with a function to change the box's background 
color, uses handleClick prop from parent componen to update its current state.
*/
function Box({ handleClick }) {
  // Initialize state to track whether a box is on or off
  const [isOn, setIsOn] = useState(false);

  // Function to handle the box click event turns it on or off
  const handleBoxClick = () => {
    // Toggles the state of the box
    const newState = !isOn;
    setIsOn(newState);
    // Call the parent component's click handler and passes the new state
    handleClick(newState);
  }
  
  // Initializes a variable that determines the className based on the box's state
  const boxClassName = `box ${isOn ? 'selected' : ''}`;

  // Renders the box as a button with appropriate className based on its state
  return (
    <button className={boxClassName} onClick={handleBoxClick}></button>
  );
}

export default Box;
