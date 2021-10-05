import { useState, useEffect } from "react";
import axios from "axios";
import env from "react-dotenv";
import LazyLoad from "react-lazyload";
import MovieCard from "./MovieCard";
import Loading  from "./Loading";

const MoviesPage = (props) => {
  const apiUrl = env.API_URL
  const apiKey = env.API_KEY
  const [data, setData] = useState(null);

  const type = props.type



  useEffect(() => {
    axios
      .get(`${apiUrl}${type.url}/${apiKey}`)
      .then((response) => {
        setData(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiKey, apiUrl, type.url]);


 


  return (
    <div className="m-10">
         <h2 className="text-3xl mb-10 mt-10">{props.type.title}</h2>
      {data === null ? (
        <h2>Loading...</h2>
      ) : data.length === 0 ? (
        <h2>No movies available</h2>
      ) : (
        <>
          <div className="grid grid-cols-7 gap-8">
            {data.map((item, index) => (
                <LazyLoad key={index} placeholder={<Loading/>} height={100} offset={[-100,100]}>
                     <MovieCard props={item} key={index}/>
                </LazyLoad>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MoviesPage;
