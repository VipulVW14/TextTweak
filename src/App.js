import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';
import About from './components/About';  
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";

// eslint-disable-next-line 
/* eslint-disable */ 

function App(){
  const [mode,setMode]= useState('light'); //Whether dark mode is enabled or not
  
  // const [alert, setAlert]= useState(showAlert);
  // const showAlert=(message, type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout(()=>{
  //     setAlert(null);
  //   },1500)
  // }

  const toggleMode=()=>{
    if(mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor= '#042743';
      // showAlert("Dark mode has been enabled", "success")
      document.title='TextUtils - Dark Mode'
    
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing Mode';
      // },2000)
      // setInterval(()=>{
      //   document.title='Install TextUtils Now'
      // },1500)   
    }
    else {
      setMode('light')
      document.body.style.backgroundColor= 'white';
      // showAlert("Light  mode has been enabled", "success")
      document.title='TextUtils - Light Mode'
    }
  }
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils"/> */}
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <TextForm/>
        <About/>
        {/* <Alert alert={alert}/> */}
        <div className="container my-3">
          {/* <Routes>
            /users --> Component 1
            /users/home --> Component 2
            <Route exact path='/about' element={<About />} />
            <Route exact path='/' element={<TextForm showAlertheading="Enter the text to analyse" />} />
          </Routes> */}
        </div>
      {/* </Router> */}
    </div>
  );
}
export default App;
 