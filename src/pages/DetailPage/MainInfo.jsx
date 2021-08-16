import React from "react";

function MainInfo({ movie }) {
  return (
    <div className="container container_grid">
      <div className="row">
        <div className="col-12 col-xl-8">
          <a
            href="https://www.youtube.com/watch?v=Jdp69o_ZsTg"
            className="article_trailer"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>

          <div className="article_content">
            <h1 className="article_title">{movie.title}</h1>

            <ul className="article_list">
              <li>{movie.vote_average}</li>
              <li>{movie.status}</li>
              <li>{movie.popularity}</li>
              <li>{movie.vote_count}</li>
            </ul>

            <p className="article_desc">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainInfo;
