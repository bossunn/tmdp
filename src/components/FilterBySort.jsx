import React from "react";

function FilterBySort({ onChange }) {
  const handleClickAsc = () => {
    if (onChange) {
      onChange({ sort_by: "popularity.asc" });
    }
  };

  const handleClickDesc = () => {
    if (onChange) {
      onChange({ sort_by: "popularity.desc" });
    }
  };

  return (
    <ul
      className="dropdown-menu dropdown-menu-dark"
      aria-labelledby="navbarDarkDropdownMenuLink"
    >
      <li value="vote_average.asc" onClick={handleClickAsc}>
        <span className="dropdown-item" href={{}}>
          Tăng
        </span>
      </li>
      <li value="vote_average.desc" onClick={handleClickDesc}>
        <span className="dropdown-item" href={{}}>
          Giảm
        </span>
      </li>
    </ul>
  );
}

export default FilterBySort;
