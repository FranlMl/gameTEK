import './App.scss';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './compos/Home';
import Header from './compos/Header';
import { useState } from 'react';



function App() {


  return (


    <div className="App">

      <Router>

         <Header/>

          <Routes>

              <Route path='/' element = {<Home/>}/> 

          </Routes>

      </Router>
      
    </div>
  );
}

export default App;
