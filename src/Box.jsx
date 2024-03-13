import { useState } from 'react'
import './Box.css'

function Box({ handleClick }) {
  const [isOn, setIsOn] = useState(false);

  const handleBoxClick = () => {
    const newState = !isOn;
    setIsOn(newState);
    handleClick(newState);
  }
 
  const boxClassName = `box ${isOn ? 'selected' : ''}`;

  return (
    <button className={boxClassName} onClick={handleBoxClick}></button>
  );
}

export default Box;
