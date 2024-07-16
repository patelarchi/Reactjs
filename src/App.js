import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils"/>
      <TextForm heading="Enter Your Text to anaylze below"/>
    </>
  );
}

export default App;
