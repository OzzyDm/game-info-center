"use client";

import { useState, useEffect } from "react";
import Results from "./components/Results";

export default function Home() {
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
    <div>
      <Results games={games} />
    </div>
  );
}
