// components/SearchBar.js
import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for anime..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
