import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [bgColor, setBgColor] = useState('');
  
  const handleClick = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App">
      <div className="border border-3" id="changecolor" style={{ backgroundColor: bgColor }}>
        <h1><center>Color Picker</center></h1>
        <div className="button justify-content-center">
          <input type="button" value="#e0e0e0" className="btn1 bg-info" onClick={() => handleClick('#e0e0e0')} />
          <input type="button" value="#6fcf97" className="btn2 bg-success" onClick={() => handleClick('#6fcf97')} />
          <input type="button" value="#56ccf2" className="btn3 bg-primary" onClick={() => handleClick('#56ccf2')} />
          <input type="button" value="#bb6bd9" className="btn4 bg-danger" onClick={() => handleClick('#bb6bd9')} />
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-flex justify-content-center mt-4 border border-5 bg-dark text-white w-50">
            <h3>Background Color: <span id="box1">{bgColor}</span></h3>
          </div>
        </div>
        <p><center>Try clicking on one of the colors above to change the background color of this page!!</center></p>
      </div>
    </div>
  );
}

export default App;
