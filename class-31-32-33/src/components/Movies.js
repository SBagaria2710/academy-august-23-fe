/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { API_KEY, IMAGE_BASE_URL, WATCHLIST_KEY } from "../constant";
import { getWatchlistFromLocalStorage } from "../util";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  const handleNextPage = () => {
    if (pageNumber === 500) return;
    setPageNumber(pageNumber + 1);
  };

  const handlePrevPage = () => {
    if (pageNumber === 0) return;
    setPageNumber(pageNumber - 1);
  };

  const isMediaAlreadyPresentInWatchlist = (mediaId, watchlistMovies) => {
    return watchlistMovies.find((movie) => movie.id === mediaId);
  };

  const saveToLocalStorage = (movieObj) => {
    let currentWatchList = getWatchlistFromLocalStorage();

    if (isMediaAlreadyPresentInWatchlist(movieObj.id, currentWatchList)) return;

    currentWatchList = [
      ...currentWatchList,
      {
        id: movieObj.id,
        title: movieObj.title,
        name: movieObj.name,
        posterPath: movieObj.poster_path,
      },
    ];

    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(currentWatchList));
  };

  const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${API_KEY}&page=${pageNumber}`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  const getMovies = () => {
    setIsLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch((err) => console.err(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getMovies();
  }, [pageNumber]);

  return (
    <div>
      <div className="text-2xl my-8 font-bold text-center underline">
        Trending Movies
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="mx-[20px] mb-[12px] flex flex-wrap space-x-8">
          {movies.map((movie, index) => {
            const { title = "", name = "", poster_path: posterPath } = movie;
            return (
              <div className="mb-3">
                <div
                  key={index}
                  className="w-[160px] h-[30vh] bg-cover rounded-xl m-4 md:h-[40vh] md:w-[180px] hover:scale-110 duration-300"
                  style={{
                    backgroundImage: `url(${IMAGE_BASE_URL}/${posterPath})`,
                  }}
                >
                  <div className="text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 text-white w-full rounded-lg">
                    {title || name}
                  </div>
                </div>
                <button onClick={() => saveToLocalStorage(movie)}>
                  Add to Watchlist
                </button>
              </div>
            );
          })}
        </div>
      )}
      <div className="flex justify-around space-x-2 my-5">
        <button
          disabled={pageNumber === 0 || isLoading}
          onClick={handlePrevPage}
        >
          Previous
        </button>
        <p>{pageNumber}</p>
        <button
          disabled={pageNumber === 500 || isLoading}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Movies;
