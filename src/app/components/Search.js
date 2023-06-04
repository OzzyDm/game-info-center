"use client";

import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearch("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords..."
      />
      <button disabled={!search} type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
