import React, { useState } from "react";

function FilterBySearch({ onChange }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    if (onChange) {
      onChange({ query: query });
    }
  };

  return (
    <div className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        name="year"
        value={query}
        onChange={handleChange}
      />
      <button
        className="btn btn-outline-success"
        // type="submit"
        onClick={onSubmit}
      >
        Search
      </button>
    </div>
  );
}

export default FilterBySearch;
