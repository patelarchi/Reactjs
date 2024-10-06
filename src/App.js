import { useState } from 'react';
import './App.css';
import ContactUs from './components/ContactUs'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes, // Change from Switch to Routes
  Route // Use Route as in v6
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [textColor, setTextColor] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type, color) => {
    setAlert({
      msg: message,
      type: type,
      color: color,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleBlueishMode = () => {
    setMode('danger');
    setTextColor('light');
    document.body.style.backgroundColor = 'Red';
    showAlert('Enable blueish mode successfully', 'success', 'primary');
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setTextColor('dark');
      document.body.style.backgroundColor = 'white';
      showAlert('Enable light mode successfully', 'success', 'primary');
    } else {
      setMode('dark');
      setTextColor('light');
      document.body.style.backgroundColor = 'black';
      showAlert('Enable dark mode successfully', 'success', 'light');
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleBlueishMode={toggleBlueishMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} /> {/* Use element prop */}
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text to analyze below" mode={mode} textColor={textColor} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
