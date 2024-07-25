<!==================================Normal Function=======================================>

import { useState } from "react";

export function Pract() {
    const [name, setName] = useState("hari");
    const [inputValue, setInputValue] = useState("");

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function toChange() {
        setName(inputValue);
    }

    return (
        <>
            <input 
                type="text" 
                placeholder="enter your name"
                value={inputValue}
                onChange={handleChange}
            />
            <button onClick={toChange}>Click me</button>
            <h1>your name is: {name}</h1>
        </>
    );
}

<!===============================Arrow function ============================================>

import { useState } from "react";

export function Pract() {
    const [name, setName] = useState("hari");
    const [inputValue, setInputValue] = useState("");

    function toChange() {
        setName(inputValue);
    }

    return (
        <>
            <input 
                type="text" 
                placeholder="enter your name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={toChange}>Click me</button>
            <h1>your name is: {name}</h1>
        </>
    );
}

