import React from "react";

function FilterByGenre({ onChange, genre }) {
  const handleFilterGenre = (values) => {
    if (onChange) {
      // setValue({...value, id: values.id});
      onChange({ with_genres: values.id });
    }
  };

  return (
    <ul
      className="dropdown-menu dropdown-menu-dark"
      aria-labelledby="navbarDarkDropdownMenuLink"
    >
      {genre.map((x) => (
        <li key={x.id} onClick={() => handleFilterGenre(x)}>
          <span className="dropdown-item" href={x.id}>
            {x.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default FilterByGenre;
