import './App.css';
import Navbar from './compenents/Navbar';
import TextForm from './compenents/TextForm';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');


  // Toggle the themes;
  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');    
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
        {/* Navbar */}
        {/*<Navbar title="Text Format" aboutus = "About" aboutHomepage = "Home" mode={mode} toggleMode = {toggleMode}/> */}

        <Navbar title="Text Format" mode={mode} toggleMode = {toggleMode}/>

        {/* TextForm */}
        <div className="container my-3">
          <TextForm heading = "Enter text to analyze" mode={mode}/>
        </div>
        
    </>
  );
}

export default App;
