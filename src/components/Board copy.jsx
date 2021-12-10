import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import '../App.css';
import  images from '../components/Images';

function Board() {

  const [cards, setCards] = useState([]);
  const [firstCardSelect, setFirstCardSelect] = useState({});
  const [secondCardSelect, setSecondCardSelect] = useState({});
  var l={}
  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);
  const [num, setNum] = useState(16);
  const [won,setWon] = useState(false);
  const [activeCards,setActiveCards] = useState([]);
  const [points,setPoints] = useState([]);

  const sizeBoard = () => {
    setCards(images.slice(0, num).sort(function(){return Math.random() -0.5}))
    ;
  } 

  useEffect(() => {
    sizeBoard()
    
    
  }, [])

  useEffect(() => {
    checkMatch();
  }, [secondCardSelect]);

  const flipCard = (name, number, img) => {
    if (firstCardSelect.name === name && firstCardSelect.number === number) {
      return 0;
    }
    if (!firstCardSelect.name) {
      setFirstCardSelect({ name, number, img });
      
    }
    else if (!secondCardSelect.name) {
      setSecondCardSelect({ name, number, img});
    }
    return 1;
  }

  const checkMatch = () => {
    if (firstCardSelect.name && secondCardSelect.name) {
      const match = firstCardSelect.img == secondCardSelect.img;
      match ? disableCards() : unflipCards();
     
    }
  }

  const disableCards = () => {
    setDisabledCards([firstCardSelect.number, secondCardSelect.number]);
    resetCards();
  };

  const unflipCards = () => {
    setUnflippedCards([firstCardSelect.number, secondCardSelect.number]);
    resetCards();
  };

  const resetCards = () => {
    setFirstCardSelect({});
    setSecondCardSelect({});
  }
  const resetBoard = () => {}

  return (
    <div className='col-md-4'>
      <div className="menu-tablero">
         <a src="" className="boton-orange-sm" onClick={resetBoard}>Reiniciar Partida</a>
      </div>
      <div className='cards-container' >
      
        {
          cards.map((card, index) => (
            <Card
              name={card.nameCard}
              number={index}
              frontFace={card.img}
              flipCard={flipCard}
              unflippedCards={unflippedCards}
              disabledCards={disabledCards}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Board;