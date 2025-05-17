import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <input
        placeholder="Search tasks..."
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
