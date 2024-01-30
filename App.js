// This component was created by Yaswanth Vasudevan (8830598)
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'; // Importing the new HomePage component
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <Router>
      <div className="container-fluid">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/About" element={<About/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
        </Routes>
      </div>
      <Footer/>
      
    </Router>
  );
}

export default App;
