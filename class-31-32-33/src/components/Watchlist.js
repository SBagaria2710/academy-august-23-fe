import { useState, useEffect } from "react";
import { IMAGE_BASE_URL } from "../constant";
import { getWatchlistFromLocalStorage } from "../util";

function Watchlist() {
  const [watchlist, setWatchlist] = useState(getWatchlistFromLocalStorage());
  return (
    <div className="mx-[20px] mb-[12px] flex flex-wrap space-x-8">
          {watchlist.map((movie, index) => {
            const { title = "", name = "", posterPath } = movie;
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
                {/* <button onClick={() => saveToLocalStorage(movie)}>
                  Add to Watchlist
                </button> */}
              </div>
            );
          })}
        </div>
  );
}

export default Watchlist;
