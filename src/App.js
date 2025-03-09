import React, { useState } from 'react';
import './App.css';
import Avatar from './Avatar';

function App() {
  const defaultColor = '#FFFFFF';
  const [squareColor, setSquareColor] = useState(defaultColor);

  const handleColorChange = (e) => {
    setSquareColor(e.target.value);
  };

  const resetColor = () => {
    setSquareColor(defaultColor);
  };

  return (
    <div className="container">
      <div className="background-box" style={{ backgroundColor: squareColor }}>
        <Avatar />
        <p className="avatar-text">Avatar</p>
      </div>
      <div className="controls">
        <input 
          type="color" 
          value={squareColor} 
          onChange={handleColorChange} 
          aria-label="Pick a square color"
        />
        <button onClick={resetColor}>Reset</button>
      </div>
    </div>
  );
}

export default App;