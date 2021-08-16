import { Box, LinearProgress } from "@material-ui/core";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import Background from "./Background";
import useMovieDetail from "./hooks/useMovieDetail";
import "./index.css";
import MainInfo from "./MainInfo";

// const useStyles = makeStyles(() => ({
//   root: {
//     paddingTop: "80px",
//     position: "relative",
//   },
// }));

function DetailPage(props) {
  //const classes = useStyles();

  const {
    params: { movieID },
  } = useRouteMatch();

  //   const match = useRouteMatch();
  //   console.log(match);

  const { movie, loading } = useMovieDetail(movieID);

  if (loading) {
    return (
      <Box>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <div style={{ paddingTop: "80px", position: "relative" }}>
      {/* <Navbar style={{ backgroundColor: "black" }} /> */}
      <Background movie={movie} />
      <MainInfo movie={movie} />
    </div>
  );
}

export default DetailPage;
