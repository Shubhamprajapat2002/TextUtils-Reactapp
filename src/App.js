import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('primary'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'primary'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('primary');
      document.body.style.backgroundColor = 'white';
      showAlert("primary mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
            {/* <TextForm heading="Enter the text to analyze below" mode={mode} /> */}
        <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
      {/* <Router>
       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
        <Route path='/about' >
          <About/>
        </Route>
        <Route>
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> 
        </Route>

        </Routes>


        </div>
        </Router> */}
    </>
  );
}
export default App;
