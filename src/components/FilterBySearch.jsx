import React, { useState } from "react";

function FilterBySearch({ onChange }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = () => {
    if (onChange) {
      onChange({ year: query });
    }
  };

  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        name="year"
        value={query}
        onChange={handleChange}
      />
      <button className="btn" type="submit" onClick={onSubmit}>
        Search
      </button>
    </form>
  );
}

export default FilterBySearch;
