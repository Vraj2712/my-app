//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React,{ useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  const [Mode, setMode] = useState("light");
  //const [Theam, setTheam] = useState("green");
  const [alert, setAlert] = useState(null);

  const showMessage = (message,type) =>{
     setAlert ({msg : message,
                type : type})
      setTimeout(() => {
        setAlert(null);
      }, 1500);
     }


  const changeTheamGreen = () => {
    if (Mode === 'light' || 'dark') {
      setMode('green')
      document.body.style.backgroundColor = "#009933";
      document.body.style.color = "white";
      document.getElementById('select').style.backgroundColor = '#006600';
      showMessage('Darkmode has been enabled', 'success')
    }
  }

  const changeTheamBlue = () => {
    if (Mode === 'light' || 'dark') {
      setMode('blue')
      document.body.style.backgroundColor = "#0000cc";
      document.body.style.color = "white";
      document.getElementById('select').style.backgroundColor = '#0000cc';
      showMessage('Darkmode has been enabled', 'success')
    }
  }

  const changeTheamRed = () => {
    if (Mode === 'light' || 'dark') {
      setMode('red')
      document.body.style.backgroundColor = "#ff5050";
      document.body.style.color = "white";
      document.getElementById('select').style.backgroundColor = '#006600';
      showMessage('Darkmode has been enabled', 'success')
    }
  }
  

  const toggleMode = () => {
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showMessage('Darkmode has been enabled', 'success')
      document.title = 'textUtils-Darkmode'

    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showMessage('Lightmode has been enabled', 'success')
      document.title = 'textUtils-Lightmode'

    }
  }
  
  return (
    <>
  {/* <Router> */}

  <Navbar title = "TEXT UTILS" about = "About" mode = {Mode} toggleMode={toggleMode} changeTheam={changeTheamGreen} changeTheam1={changeTheamBlue} changeTheam2={changeTheamRed}/>
  <Alert alert = {alert}/>
  <div className="container my-5" >

  <TextForm heading="Enter the text below." mode = {Mode} alert={showMessage}/>   
  </div>

  {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          </Route>
        </Switch> */}
  {/* </div> */}
  {/* </Router>     */}

    </>
  );
}

export default App;
