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

  const flipCard = (nameCard, number) => {
    if (firstCardSelect.nameCard === nameCard && firstCardSelect.number === number) {
      return 0;
    }
    if (!firstCardSelect.nameCard) {
      setFirstCardSelect({ nameCard, number });
    }
    else if (!secondCardSelect.nameCard) {
      setSecondCardSelect({ nameCard, number });
    }
    return 1;
  }

  const checkMatch = () => {
    if (firstCardSelect.nameCard && secondCardSelect.nameCard) {
      const match = firstCardSelect.nameCard === secondCardSelect.nameCard;
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
  const resetPlay = () => {}

  return (
    <div className='col-md-4'>
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