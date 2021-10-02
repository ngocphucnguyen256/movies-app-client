import { useState, useEffect } from "react";
import axios from "axios";
import env from "react-dotenv";
import MovieCard from "./MovieCard";
import expand from "../img/expand-down.png"

const MoviesList = (props) => {
  const apiUrl = env.API_URL
  const apiKey = env.API_KEY
  const [data, setData] = useState(null);
  const moviesPerPageConst = 15
  const [moviesPerPage, setMoviesPerPage] = useState(moviesPerPageConst);
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

  const handleExpandClick = () =>{
        if (moviesPerPage ===moviesPerPageConst){
          setMoviesPerPage(data.length)
        }
        else{
          setMoviesPerPage(moviesPerPageConst)
        }
  }


  return (
    <div className="mb-10 relative">
         <h2 className="text-3xl mb-10">{props.type.title}</h2>
      {data === null ? (
        <h2>Loading...</h2>
      ) : data.length === 0 ? (
        <h2>No movies available</h2>
      ) : (
        <>
          <div className="grid grid-cols-5 gap-8 ">
            {data.slice(0, moviesPerPage).map((item, index) => (
              <MovieCard key={index} props={item} />
            ))}
          </div>
          <button className="absolute left-1/2 -bottom-10 w-20 p-2 h-auto transform -translate-x-1/2 " onClick={handleExpandClick}>
            <img className={`w-full h-auto ${moviesPerPage!==moviesPerPageConst?(" transform rotate-180"):("")} `} src={expand} alt="expand" />
            </button>
        </>
      )}
    </div>
  );
};

export default MoviesList;
