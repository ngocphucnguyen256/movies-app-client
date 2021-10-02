import { useState, useEffect } from "react";
import axios from "axios";
import env from "react-dotenv";
import MovieCard from "./MovieCard";

const MoviesList = (props) => {
  const apiUrl = env.API_URL
  const apiKey = env.API_KEY
  const [data, setData] = useState(null);
  const type = props.type



  useEffect(() => {
    axios
      .get(`${apiUrl}${type.url}/${apiKey}`)
      .then((response) => {
        setData(response.data.items);
        console.log(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiKey, apiUrl, type.url]);

  return (
    <div className="mb-10">
         <h2 className="text-3xl mb-10">{props.type.title}</h2>
      {data === null ? (
        <h2>Loading...</h2>
      ) : data.length === 0 ? (
        <h2>No movies available</h2>
      ) : (
        <>
          <div className="grid grid-cols-5 gap-8">
            {data.map((item, index) => (
              <MovieCard key={index} props={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MoviesList;
