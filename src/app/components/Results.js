import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

function Results() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${process.env.API_KEY}`
      );
      const newData = await response.json();
      setGames(newData.results);
    };

    fetchData();
  }, []);

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {games.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </div>
  );
}

export default Results;
