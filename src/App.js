  import { useState } from 'react';
import './App.css';
  // import About from './components/About';
  import Navbar from './components/Navbar';
  import TextForm from './components/TextForm';
import Alert from './components/Alert';


  function App() {
    const [mode,setMode] = useState('light');
    const [textColor,setTextColor] = useState('dark');
    const [alert,setAlert] = useState(null);

    const showAlert = (message,type,color) => {
      setAlert({
        msg: message,
        type: type,
        color: color,
      })

      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }

    const toggleBlueishMode = () => {
      setMode('danger');
      setTextColor('light');
      document.body.style.backgroundColor = 'Red';
      showAlert('enable blueish mode succesfully','success','primary');
    }
    const toggleMode = () => {
      if(mode === 'dark'){
        setMode('light');
        setTextColor('dark');
        document.body.style.backgroundColor = 'white';
        showAlert('enable light mode succesfully','success','primary');
      } else {
        setMode('dark');
        setTextColor('light');
        document.body.style.backgroundColor = 'black';
        showAlert('enable dark mode succesfully','success','light');

      }
    }
    return (
      <>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode}  toggleBlueishMode={toggleBlueishMode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <TextForm showAlert={showAlert} heading="Enter Your Text to anaylze below" mode={mode} textColor={textColor}/>
       {/* <About/> */}
       

      </>
    );
  }

  export default App;
