// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert =(message,type) =>{
      setAlert({
        msg : message, 
        type : type
      })
      setTimeout(()=>{
          setAlert(null);
      },1000)
  }

  const toggleMode =() =>{
      if (mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
          showAlert("Dark Mode Enabled", "success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        showAlert("Light Mode Enabled", "success");
      }
  }

  const redMode = ()=>{
    if(mode === 'light' || mode === 'dark')
    {
      setMode('danger');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Red Mode Enabled", "success");
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" textUtilsHome="Home" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<Textform heading="Enter The Text Here To Analyse" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
  );
}

export default App;
