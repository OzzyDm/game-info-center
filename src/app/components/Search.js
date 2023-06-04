"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/games/${search}`);
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
