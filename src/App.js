import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Board from './components/Board';

function App() {

  
  return (
    <>
      <NavBar />
      <Board/>
    </>
  );
}

export default App;