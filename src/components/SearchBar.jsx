import React, { useState } from "react";
import "../styles/searchBar.scss";
import { ExpandMoreOutlined } from "@material-ui/icons";
const SearchBar = ({ searchedQuery }) => {
  const [query, setQuery] = useState("");
  const handleInputQuery = (e) => {
    setQuery(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (query !== "") searchedQuery(query);
    setQuery("");
  };
  return (
    <form onSubmit={handleFormSubmit} className="search-form">
      <div className="search-form__input-wrapper">
        <div className="search-form__icon-wrapper">
          <ExpandMoreOutlined />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleInputQuery}
          className="search-form__input"
          placeholder="What needs to be done ?"
        />
      </div>
    </form>
  );
};

export default SearchBar;
