<!-------------------UseState------------------>
  
import { useState } from "react";

function App() {
  const [name, setName] = useState("Ihechikara");
  const changeName = () => {
    setName("Chikara");
  };

  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={changeName}> Click me </button>
    </div>
  );
}

export default App;

<!------------UseState in InputField--------->
  
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <p>{name}</p>
      </form>
    </div>
  );
}

export default App;

<!-------------UseState & UseEffect------------->

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the button ${count} times`)
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;

<!------------Use State & Use Effect using Button---------------------->

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the first button ${count} times`);
  }, [count]);

  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the second button ${count2} times`)
  }, [count2]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount2(count2 + 1)}>Click me</button>
    </div>
  );
}

export default App;

<!------------Use State & Use Effect using API Fetch---------------------->

import { useState, useEffect} from 'react'

function useFetchData(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(`Error: ${err}`));
    }, [url]);

    return { data };
}

export default useFetchData

useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(`Error: ${err}`));
    }, [url]);

<!------------API Fetch---------------------->

import useFetchData from './useFetchData'
 
function Users() {
    const { data } = useFetchData("https://api.github.com/users");

  return (
      <div>
          {data && (
            data.map((user) =>(
                <div className="text-white" key={user.id}>
                    <h1> {user.login} </h1>
                    <p> { user.type } </p>
                </div>
            ))
          )}
      </div>
  )
}

export default Users;
