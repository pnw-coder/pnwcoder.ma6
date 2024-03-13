import { useState } from 'react'
import Box from './Box'
import './Grid.css'

/*
Grid component creates a 2x2 grid of Box components, using the state of the box to update the counter
function, if a box is on the counter is incremented if it is off it is decremeneted.
*/
function Grid() {
  // Initializes the state to track the count of selected boxes
  const [count, setCount] = useState(0)

  // Function to handle the click events on boxes and increment or decrement the count
  const handleClick = (isOn) => {
    // Update the count based on whether a box's state is set to on or off
    setCount((prevCount) => (isOn ? prevCount + 1: prevCount - 1));
  }
  
  // Renders the Grid component with counter as the header
  return (
    <div>
        <div className='count-header'>
            <p>Count: {count}</p>
        </div>
        <div className='box-container'>
            <div className="row">
                <Box key={0} handleClick={handleClick} />
                <Box key={1} handleClick={handleClick} />
            </div>
            <div className="row">
                <Box key={2} handleClick={handleClick} />
                <Box key={3} handleClick={handleClick} />
            </div>
        </div>
    </div>
  );
}

export default Grid;
