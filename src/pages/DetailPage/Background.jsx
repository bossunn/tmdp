import React from "react";

function Background({ movie }) {
  const baseUrlBg = "https://image.tmdb.org/t/p/original";

  return (
    <div className="section_bg" style={{ backgroundColor: "rgb(19, 23, 32)" }}>
      <img src={`${baseUrlBg}${movie.backdrop_path}`} alt="" />
    </div>
  );
}

export default Background;
