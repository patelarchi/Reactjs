  import { useState } from 'react';
import './App.css';
  // import About from './components/About';
  import Navbar from './components/Navbar';
  import TextForm from './components/TextForm';


  function App() {
    const [mode,setMode] = useState('light');
    const [textColor,setTextColor] = useState('dark');
    const toggleMode = () => {
      if(mode === 'dark'){
        setMode('light');
        setTextColor('dark');
        document.body.style.backgroundColor = 'white';
      } else {
        setMode('dark');
        setTextColor('light');
        document.body.style.backgroundColor = 'black';
      }
    }
    return (
      <>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <TextForm heading="Enter Your Text to anaylze below" mode={mode} textColor={textColor}/>
       {/* <About/> */}
      </>
    );
  }

  export default App;
