import { useEffect, useState } from "react";
import moviesApi from "../../../apis/moviesApi";

export default function useMovieDetail(movieId) {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await moviesApi.get(movieId);
        setMovie(data);
      } catch (error) {
        console.log("Lỗi fetch", error);
      }
      setLoading(false);
    })();
  }, [movieId]);

  return { movie, loading };
}
