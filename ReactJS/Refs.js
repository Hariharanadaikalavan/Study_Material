
<!----------------------Using Refs-------------------->

import React from 'react';

function TextInput() {
  const inputRef = React.useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}

export default TextInput;

<!----------------------Using document.getElementById-------------------->

import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const element = document.getElementById('myDiv');
    element.style.color = 'blue';
  }, []);

  return (
    <div id="myDiv">
      Hello, World!
    </div>
  );
}

export default App;
