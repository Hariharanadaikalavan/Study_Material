<!----------------------------Install the router package------------------------->
  
npm install react-router-dom@6
  
<!---------------------------index.js---looks@Initially-------------------------->
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

<!---------------------------index.js---looks@Ended-------------------------->

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

<!-------------------------------First HOME Component-------------------------------->
function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
}

export default Home;

<!-------------------------------Second ABOUT Component-------------------------------->
  
import React from 'react'

function About() {
    return (
        <div>
            <h1>This is the about page</h1>
        </div>
    )
}

export default About

<!-------------------------------Third CONTACT Component-------------------------------->
  
import React from 'react'

function Contact() {
    return (
        <div>
            <h1>This is the contact page</h1>
        </div>
    )
}

export default Contact

<!---------------------------------App.js-------------------------------->
  
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default App

<!-------------------------------Updated HOME Component-------------------------------->
  
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="about">Click to view our about page</Link>
      <Link to="contact">Click to view our contact page</Link>
    </div>
  );
}

export default Home;
