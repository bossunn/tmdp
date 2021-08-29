import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import moviesApi from "../../apis/moviesApi";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../components/Navbar";
import Pagination from "@material-ui/lab/Pagination";
import { Box } from "@material-ui/core";

const useStyle = makeStyles({
  pagination: {
    display: "flex",
    justifyContent: "center",
    background: "white",
  },
});

function Search(props) {
  const [queryFilter, setQueryFilter] = useState({
    page: 1,
  });
  const [movieSearch, setMovieSearch] = useState([]);

  const [pagination, setPagination] = useState({
    count: 1,
    pages: 1,
  });

  const history = useHistory();

  const classes = useStyle();

  const baseUrlImg = "https://image.tmdb.org/t/p/w500";

  function getYear(x) {
    const year = x?.release_date?.split("-") || "";
    return <li>{year[0]}</li>;
  }

  useEffect(() => {
    (async () => {
      try {
        const data = await moviesApi.getMovieSearch(queryFilter);
        console.log(data);
        setMovieSearch(data.results);
        setPagination({
          count: data.total_pages,
          pages: data.page,
        });
      } catch (error) {
        console.log("lỗi fetch", error);
      }
    })();
  }, [queryFilter]);

  const handleSearch = (values) => {
    setQueryFilter((prev) => ({
      ...prev,
      ...values,
    }));
  };

  const handleClick = (id) => {
    history.push(`/${id}`);
  };

  const handlePagination = (event, pages) => {
    setQueryFilter((prev) => ({
      ...prev,
      page: pages,
    }));
  };

  return (
    <div className="bg-index">
      <Navbar onChange={handleSearch} />
      {movieSearch.length > 0 ? (
        <div className="col-12">
          <div className="row row--grid">
            {movieSearch.map((x) => (
              <div
                className="col-6 col-sm-4 col-lg-3 col-xl-2"
                key={x.id}
                onClick={() => handleClick(x.id)}
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
                  <h3 className="card_title">{x.title}</h3>
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
      ) : (
        <div>
          <video
            type="video/webm"
            autoplay
            src="https://video-hkt1-1.xx.fbcdn.net/v/t42.27313-2/10000000_585709165804733_7823318472114980789_n.mp4?_nc_cat=107&vs=1e9ce4a6240ed91f&_nc_vs=HBksFQAYJEdJQ1dtQUM5LU1RS3N4UUNBTFZIS2xfekFwSnNickZxQUFBRhUAAsgBABUAGCRHSUNXbUFDeHU2RTRoeUFEQUF6VnliSmg2MlE3YnFkQkFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATEgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzAA1zdWJzYW1wbGVfZnBzABB2bWFmX2VuYWJsZV9uc3ViABUAJQAcAAAmzpbYmtSwcBUCKAJDMxgLdnRzX3ByZXZpZXccF0Cz7wDEm6XjGDJkYXNoX2dlbjNiYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsIiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMNMTYyOTc3OTYyNTc2MQxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATAMb2VtX3ZpZGVvX2lkDzI0NzEyNjU1Mzk1MDQ1ORJvZW1fdmlkZW9fYXNzZXRfaWQPMjQ3MTI2NTQzOTUwNDYwFW9lbV92aWRlb19yZXNvdXJjZV9pZA8yNDcxMjY1NDA2MTcxMjccb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZA8yMDI1ODg1OTUyNTUzNzklAhwAJcQBGweIAXMDMjg3AmNkCjIwMjEtMDgtMjIDcmNiATADYXBwBVZpZGVvAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwc1MTAyLjkxAnRzD29lcF9wcm9ncmVzc2l2ZQA%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=3SDFC1a2bFMAX-sOF-P&_nc_oc=AQn29qJpvgseOa5131mafrIJEcqy_pJ7QG9dh4wvdNLw16VAT3wLCFKKJtafe8SjtPVNVRSrSbwzGsqRsG3oyuGj&_nc_ht=video-hkt1-1.xx&edm=APRAPSkEAAAA&oh=20ddf0c19e520c0da4b2e1ded73b7c5b&oe=61265FDA&_nc_rid=bce630f559a3404&_nc_vts_prog=1&_nc_vts_internal=1"
          ></video>
        </div>
      )}
    </div>
  );
}

export default Search;
