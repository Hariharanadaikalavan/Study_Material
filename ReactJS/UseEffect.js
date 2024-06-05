import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setFirstName(event.target.value);
  };

  const printAll = () => {
    setResult(`Firstname: ${firstName}`);
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" id="firstName" value={firstName} onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={printAll}>Print</button>
            </td>
          </tr>
          <tr>
            <td id="result">{result}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
