import React from "react";

const GameCard = ({game}) => {

  return (
    <div className="gamecard">
        
      <img src={game.background_image} alt="" />

      <h1> {game.name}</h1>
      
    </div>
  );
};

export default GameCard;
