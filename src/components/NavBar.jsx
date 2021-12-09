import logo from '../logo.png';
import React, { useState } from "react"

function navBar() {
 

  return (
  <>
    
    
    <div className="app">
      
        <div className="menu">
            <img src={logo} className="logo" alt="logo" />
            <a src="" className="boton-orange">1 Player: </a>
            <a src="" className="boton-orange">2 Player</a>
            <a src="" className="boton-orange">Reiniciar Partida</a>
        </div>
        <div className="menu-tablero">
            <a src="" className="boton-orange-sm" onClick="">4x4 </a>
            <a src="" className="boton-orange-sm" onClick="">6x6</a>
            <a src="" className="boton-orange-sm" onClick="">8x8</a>
        </div>
        
        
        
    </div>

      </>
  );   
}

export default navBar


