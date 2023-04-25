import React from 'react';
import './App.css';
import Homescreen from './Homescreen';
import{BrowserRouter as Router,Routes,Route,}from "react-router-dom";
import LoginScreen from './Loginscreen';

function App() { 
  const user =localStorage.getItem("user");
  return (
    <div className="app">
      {user}
      <Router>
        {!user ? (
            <Routes>
              <Route exact path='/' element={<LoginScreen/>} />   
            </Routes>          
          ) : (
            <Routes>
            <Route exact path='/' element={<Homescreen/>} />
            </Routes>
          )
        }
      </Router>
    </div>
  );
}
export default App;
