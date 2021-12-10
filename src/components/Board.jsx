import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import '../App.css';
import  images from '../components/Images';

function Board() {

  const [cards, setCards] = useState([]);
  const [firstCardSelect, setFirstCardSelect] = useState({});
  const [secondCardSelect, setSecondCardSelect] = useState({});
  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);
  const [num, setNum] = useState(16);
  const [won,setWon] = useState("");
  const [activeCards,setActiveCards] = useState([]);
  const [counter, setCounter] = useState(0);
 const [container, setContainer]= useState('cards-container')

  const sizeBoard = () => {
    setCards(images.slice(0, num).sort(function(){return Math.random() -0.5}));
  } 

const setBoard = (size) =>{
  setNum(36);
  setCards(images.slice(0, num).sort(function(){return Math.random() -0.5}));
  if(num===36){
  setContainer('cards-container6');
  }
}

  useEffect(() => {
    sizeBoard()
       
  }, [])

  useEffect(() => {
    checkMatch();
  }, [secondCardSelect]);

  const flipCard = (name, number, img, index) => {

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
    setCounter (counter + 2);
    setDisabledCards([firstCardSelect.number, secondCardSelect.number]);
    resetCards();
    checkWon();
    
  };

  const unflipCards = () => {
    setUnflippedCards([firstCardSelect.number, secondCardSelect.number]);
    resetCards();
  };

  const resetCards = () => {
    setFirstCardSelect({});
    setSecondCardSelect({});
  }
  const resetBoard = () => {
    window.location.reload()
  }

  const checkWon = () =>{
    if(counter === (cards.length-2)){
      
      setWon("You Won the Game!!!");
    }
  }


  return (
    <div className='col-md-4'>
      <div className="menu-tablero">
      
            <a src="" className="boton-orange-sm" onClick={setBoard}>4x4 </a>
            <a src="" className="boton-orange-sm" onClick={setBoard}>6x6</a>
            {/* <a src="" className="boton-orange-sm" onClick={setBoard}>8x8</a> */}
        <h1 className='result'>Match Result: {won}</h1>
        <a src="" className="boton-orange-sm" onClick={resetBoard}>Reset Game</a>
        
      </div>
      <div className={container} >
      
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