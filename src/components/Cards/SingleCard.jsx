import React from "react";
import classes from "./SingleCard.module.css";

const Card = ({ card, onChoice, flipped, disabled, className }) => {
  const clickHandler = () => {
    {
      !disabled && onChoice(card);
    }
  };

  return (
    <div className={`${className} ${classes.card}`}>
      <img
        src={card.src}
        className={
          flipped
            ? `${classes.img} ${classes["front-flipped"]}`
            : `${classes.img}`
        }
      />
      <div
        className={
          flipped
            ? `${classes.back} ${classes["back-flipped"]}`
            : `${classes.back}`
        }
        onClick={clickHandler}
      />
    </div>
  );
};

export default Card;
