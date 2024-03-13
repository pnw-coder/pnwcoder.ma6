import { useState } from 'react'
import Box from './Box'
import './Grid.css'


function Grid() {
  const [count, setCount] = useState(0)

  const handleClick = (isOn) => {
    setCount((prevCount) => (isOn ? prevCount + 1: prevCount - 1));
  }
 
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
