import { Box, makeStyles } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React, { useEffect, useState } from "react";
import moviesApi from "../../apis/moviesApi";

const useStyles = makeStyles(() => ({
  pagination: {
    display: "flex",
    justifyContent: "center",
    background: "white",
  },
}));

function TV(props) {
  const classes = useStyles();

  const [tvList, setTvList] = useState([]);
  const [filterTv, setFilterTv] = useState({
    page: 1,
  });
  const [pagination, setPagination] = useState({
    count: 1,
    pages: 9,
  });

  const baseUrlImg = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    (async () => {
      try {
        const data = await moviesApi.getTvPopular(filterTv);
        console.log(data);
        setTvList(data.results);
        setPagination({
          count: data.total_pages,
          pages: data.page,
        });
      } catch (error) {
        console.log("lỗi fetch", error);
      }
    })();
  }, [filterTv]);

  function getYear(x) {
    const year = x?.first_air_date?.split("-") || "";
    return year[0];
  }

  const handlePagination = (event, page) => {
    setFilterTv({
      page: page,
    });
  };

  return (
    <div className="bg-index">
      <div className="col-12">
        <div className="row row--grid">
          {tvList.map((x) => (
            <div
              className="col-6 col-sm-4 col-lg-3 col-xl-2"
              key={x.id}
              //   onClick={() => handleClick(x.id)}
            >
              <div className="card card_box">
                <img
                  className="card_img"
                  src={
                    x.poster_path
                      ? `${baseUrlImg}${x.poster_path}`
                      : "https://via.placeholder.com/90x130"
                  }
                  alt={x.title}
                />
                <button className="card_add" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"></path>
                  </svg>
                </button>
                <span className="card_rating">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"></path>
                  </svg>
                  {x.vote_average}
                </span>
                <h3 className="card_title">{x.name}</h3>
                <ul className="card_list">{getYear(x)}</ul>
              </div>
            </div>
          ))}
        </div>
        <Box className={classes.pagination}>
          <Pagination
            count={pagination.count}
            page={pagination.page}
            onChange={handlePagination}
            color="primary"
          />
        </Box>
      </div>
    </div>
  );
}

export default TV;
