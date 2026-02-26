import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if(query.trim())
      navigate(`/search/${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        type="text"
        placeholder="Search posts..."
        className="border px-4 py-2 rounded-lg w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Search
      </button>
    </form>
  );
};

export default SearchBar;