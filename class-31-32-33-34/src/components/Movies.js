/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { API_KEY, IMAGE_BASE_URL, WATCHLIST_KEY } from "../constant";
import { getWatchlistFromLocalStorage } from "../util";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [watchlist, setWatchlist] = useState(getWatchlistFromLocalStorage());

  const handleNextPage = () => {
    if (pageNumber === 500) return;
    setPageNumber(pageNumber + 1);
  };

  const handlePrevPage = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };

  const isMediaAlreadyPresentInWatchlist = (mediaId, watchlistMovies) => {
    return watchlistMovies.find((movie) => movie.id === mediaId);
  };

  const saveMediaToLocalStorage = (movieObj) => {
    let currentWatchList = getWatchlistFromLocalStorage();

    if (isMediaAlreadyPresentInWatchlist(movieObj.id, currentWatchList)) return;

    currentWatchList = [
      ...currentWatchList,
      {
        id: movieObj.id,
        title: movieObj.title,
        posterPath: movieObj.poster_path,
        voteAverage: movieObj.vote_average,
        genreIds: movieObj.genre_ids
      },
    ];

    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(currentWatchList));
    setWatchlist(currentWatchList);
  };

  const removeMediaFromLocalStorage = (mediaId) => {
    if (watchlist.length === 1) {
      localStorage.removeItem(WATCHLIST_KEY);
      setWatchlist([]);
      return;
    }

    let updatedWatchlist = watchlist.filter((media) => media.id !== mediaId);
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(updatedWatchlist));
    setWatchlist(updatedWatchlist);
  };

  const handleMovieClick = (movieObj = {}) => {
    const { id: mediaId } = movieObj || {};

    if (isMediaAlreadyPresentInWatchlist(mediaId, watchlist)) {
      removeMediaFromLocalStorage(mediaId);
    } else {
      saveMediaToLocalStorage(movieObj);
    }
  };

  const trendingMovieUrl = `https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${API_KEY}&page=${pageNumber}`;
  const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?language=en-US&api_key=${API_KEY}&query=${searchQuery}&page=${pageNumber}`;

  const options = { method: "GET", headers: { accept: "application/json" } };

  const getMovies = () => {
    setIsLoading(true);
    fetch(trendingMovieUrl, options)
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch((err) => console.err(err))
      .finally(() => setIsLoading(false));
  };

  const searchMovie = (searchText) => {
    setIsLoading(true);
    fetch(searchMovieUrl, options)
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch((err) => console.err(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (searchQuery) {
      searchMovie(searchQuery);
    } else {
      getMovies();
    }
  }, [pageNumber, searchQuery]);

  return (
    <div>
      <div className="text-2xl my-8 font-bold text-center underline">
        Trending Movies
      </div>
      <div className="flex justify-end px-11 mb-5">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="border"
        />
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="mx-[20px] mb-[12px] flex flex-wrap">
          {movies.map((movie, index) => {
            const { title = "", name = "", poster_path: posterPath } = movie;
            return (
              <div className="mb-3 cursor-pointer">
                <div
                  key={index}
                  className="w-[160px] h-[30vh] bg-cover rounded-xl m-4 md:h-[40vh] md:w-[180px] hover:scale-110 duration-300 relative"
                  style={{
                    backgroundImage: `url(${IMAGE_BASE_URL}/${posterPath})`,
                  }}
                >
                  <div
                    className="p-2 absolute right-0 text-xl bg-gray-900 rounded-xl"
                    onClick={() => handleMovieClick(movie)}
                  >
                    {isMediaAlreadyPresentInWatchlist(movie.id, watchlist)
                      ? "❤️"
                      : "🤍"}
                  </div>
                  <div className="text-xl bg-gray-900 bg-opacity-60 p-4 text-white w-full rounded-b-lg absolute bottom-0">
                    {title || name}
                  </div>
                </div>
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
