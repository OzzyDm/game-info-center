"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${process.env.API_KEY}`
      );
      const newData = await response.json();
      setGames(newData.results);
      console.log(newData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {games.map((game) => (
        <h1 key={game.id}>{game.name}</h1>
      ))}
    </div>
  );
}
