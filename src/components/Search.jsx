import React, { useState } from "react";

export const Search = ({ searchClickHandler }) => {
  const [searchText, setSearchtext] = useState("");
  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Enter restuarant name for search"
        value={searchText}
        onChange={(e) => setSearchtext(e.target.value)}
      />
      <button
        onClick={() => {
          searchClickHandler(searchText);
        }}
      >
        Search
      </button>
    </div>
  );
};
