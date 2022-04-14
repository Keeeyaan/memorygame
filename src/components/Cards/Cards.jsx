import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import SingleCard from "./SingleCard";
import classes from "./Cards.module.css";

const Cards = ({ cardImages }) => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [modal, setModal] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        let matchCards = cards.map((card) => {
          if (card.src === choiceOne.src) {
            return { ...card, matched: true };
          }
          return card;
        });
        setCards(matchCards);
        resetChoices();
      } else {
        setTimeout(() => resetChoices(), 600);
      }
    }
  }, [choiceOne, choiceTwo]);

  const choiceHandler = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetChoices = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((turns) => turns + 1);
    setDisabled(false);
  };

  const closeModalHandler = () => {
    setModal(false);
    shuffleCards();
  };

  return (
    <React.Fragment>
      {modal && <Modal onClick={closeModalHandler} />}
      <div className={classes.container}>
        <h1 className={classes.title}>Memory Game Friends Edition</h1>
        <button className={classes.btn} onClick={shuffleCards}>
          Reset
        </button>
        <div className={classes.grid}>
          {cards.map((card) => (
            <SingleCard
              className={classes.card}
              key={card.id}
              card={card}
              onChoice={choiceHandler}
              disabled={disabled}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            />
          ))}
        </div>
        <h2 className={classes.turns}>{turns}</h2>
      </div>
    </React.Fragment>
  );
};

export default Cards;
