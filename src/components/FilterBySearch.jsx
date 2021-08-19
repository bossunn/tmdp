import React, { useState } from "react";

function FilterBySearch({ onChange }) {
  const [query, setQuery] = useState("");
  // const [movieSearch, setMovieSearch] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (onChange) {
      onChange({ query: query });
    }
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   fetch(
  //     "https://api.themoviedb.org/3/search/movie?api_key=ef00cf5a1cc0ab1356dff9793ace7634&language=en-US&query=" +
  //       query
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMovieSearch(data.results);
  //     });
  //   if (onChange) {
  //     onChange(movieSearch);
  //   }
  //   // setQuery("");
  // };

  return (
    <form className="d-flex" onSubmit={onSubmit}>
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
        type="submit"
        // onClick={onSubmit}
      >
        Search
      </button>
    </form>
  );
}

export default FilterBySearch;
