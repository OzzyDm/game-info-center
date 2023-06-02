import React from "react";
import Card from "./Card";

function Results(props) {
  return (
    <div>
      {props.games.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </div>
  );
}

export default Results;
