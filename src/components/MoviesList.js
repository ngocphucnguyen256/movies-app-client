import { useState, useEffect } from "react";
import axios from "axios";
import env from "react-dotenv";
import MovieCard from "./MovieCard";

const MoviesList = (props) => {
  const apiKey = env.API_KEY;
  const [inTheaters, setInTheaters] = useState(null);




  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/${props.type.url}/${apiKey}`)
      .then((response) => {
        setInTheaters(response.data.items);
        console.log(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {inTheaters === null ? (
        <h2>Loading...</h2>
      ) : inTheaters.length === 0 ? (
        <h2>No movies available</h2>
      ) : (
        <>
          <h2>{props.type.title}</h2>
          <div>
            {inTheaters.map((item, index) => (
              <MovieCard props={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MoviesList;
