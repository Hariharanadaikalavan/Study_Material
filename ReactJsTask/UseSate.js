import { useState } from "react";

export function Pract() {
    const [name, setName] = useState("hari");
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [email, setEmail] = useState("");
    const [bgColor, setBgColor] = useState("white");

    function handleNameChange(event) {
        setInputName(event.target.value);
    }

    function handleEmailChange(event) {
        setInputEmail(event.target.value);
    }

    function toChange() {
        setName(inputName);
        setEmail(inputEmail);
        setBgColor("lightblue"); // Change background color here
    }

    return (
        <div style={{ backgroundColor: bgColor, padding: "20px" }}>
            <input 
                type="text" 
                placeholder="enter your name"
                value={inputName}
                onChange={handleNameChange}
            />
            <input 
                type="text"
                placeholder="enter your email"
                value={inputEmail}
                onChange={handleEmailChange}
            />
            <button onClick={toChange}>Click me</button>
            <h1>your name is: {name}</h1>
            <h1>your email is: {email}</h1>
        </div>
    );
}


