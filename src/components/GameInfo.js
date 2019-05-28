import React from "react";

const GameInfo = ({ gameState = "stale", currentPlayer = "unkown" }) => (
  <h3>{gameState == "stale" ? "It's your turn " : ""} {currentPlayer}
      {gameState == "stale" ? "" : " wins !"}</h3>
);

export default GameInfo;
