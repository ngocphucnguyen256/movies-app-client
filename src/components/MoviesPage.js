import { useState, useEffect } from "react";
import axios from "axios";
import env from "react-dotenv";
import Pagination from "react-js-pagination";
import MovieCard from "./MovieCard";

const MoviesPage = (props) => {
  const apiUrl = env.API_URL
  const apiKey = env.API_KEY
  const [data, setData] = useState(null);
  const [activePage, setActivePage] = useState(1)

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


 
  const handlePageChange=(pageNumber)=> {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber)
  }


  return (
    <div className="m-10">
         <h2 className="text-3xl mb-10 mt-10">{props.type.title}</h2>
      {data === null ? (
        <h2>Loading...</h2>
      ) : data.length === 0 ? (
        <h2>No movies available</h2>
      ) : (
        <>
          <div className="grid grid-cols-10 gap-8">
            {data.map((item, index) => (
              <MovieCard props={item} />
            ))}
          </div>
          <Pagination
          activePage={activePage}
          itemsCountPerPage={50}
          totalItemsCount={250}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
        </>
      )}
    </div>
  );
};

export default MoviesPage;
