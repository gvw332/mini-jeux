import React, { useState, useEffect } from 'react';

const cardImages = [
  { "src": "/images/fantasy_image_0_0.png", matched: false },
  { "src": "/images/fantasy_image_0_1.png", matched: false },
  { "src": "/images/fantasy_image_0_2.png", matched: false },
  { "src": "/images/fantasy_image_1_0.png", matched: false },
  { "src": "/images/fantasy_image_1_1.png", matched: false },
  { "src": "/images/fantasy_image_1_2.png", matched: false }
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random(), isFlipped: false }));

    setCards(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    setCards(prevCards => {
      return prevCards.map(c => {
        if (c.id === card.id) {
          return { ...c, isFlipped: true };
        } else {
          return c;
        }
      });
    });
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
    setCards(prevCards => {
      return prevCards.map(card => {
        if (!card.matched) {
          return { ...card, isFlipped: false };
        } else {
          return card;
        }
      });
    });
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <>
      <button onClick={shuffleCards}>Nouveau Jeu</button>
      <div className="cards">
        {cards.map(card => (
          <div className="card" key={card.id} onClick={() => !disabled && !card.isFlipped && handleChoice(card)}>
            {card.isFlipped || card.matched ? (
              <img src={card.src} alt="Card front" />
            ) : (
              <img src="/images/card-back.png" alt="Card Back" />
            )}
          </div>
        ))}
      </div>
      <p>Tentatives: {turns}</p>
    </>
  );
};

export default MemoryGame;
