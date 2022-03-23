import React, { useState } from "react";
import Card from "./Card";

export default function UserHome() {
  const [name, setName] = useState(undefined);
  const [search, setSearch] = useState("");
  function handleSearch(event) {
    setName(search);
  }
  return (
    <div id="userHome">
      <div className="search">
        <div>
          <input
            type="text"
            placeholder="Type here to search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="searchBox"
          />
          <button id="searchButton" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div className="courses">
        <Card name={name} />
      </div>
    </div>
  );
}

