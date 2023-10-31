import { useState } from "react";
import { IMAGE_BASE_URL, WATCHLIST_KEY } from "../constant";
import { getWatchlistFromLocalStorage } from "../util";

function Watchlist() {
  const [watchlist, setWatchlist] = useState(getWatchlistFromLocalStorage());

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

  const sortById = () => {
    const temp = [...watchlist];
    const updatedWatchlist = temp.sort((a, b) => a.id - b.id);
    setWatchlist(updatedWatchlist);
  };

  return (
    <>
      {watchlist.length === 0 ? (
        "No Watchlisted Movies"
      ) : (
        <div className="container px-4 mt-4">
          <div className="flex justify-between">
          <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => alert("WIP")}
            >
              Filter By Genre
            </button>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={sortById}
            >
              Sort by ID
            </button>
          </div>
          <div className="relative overflow-x-auto mx-auto  shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Average Rating
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Release Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Poster Link
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {watchlist.map(
                  ({
                    id,
                    title = "",
                    name = "",
                    releaseDate = "N/A",
                    voteAverage,
                    posterPath,
                  }) => (
                    <tr
                      key={id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {id}
                      </th>
                      <td className="px-6 py-4">{title || name}</td>
                      <td className="px-6 py-4">{voteAverage}</td>
                      <td className="px-6 py-4">{releaseDate}</td>
                      <td className="px-6 py-4">
                        <a
                          href={`${IMAGE_BASE_URL}/${posterPath}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Poster Link
                        </a>
                      </td>
                      <td
                        className="px-6 py-4 text-right cursor-pointer text-red-200 hover:text-red-500"
                        onClick={() => removeMediaFromLocalStorage(id)}
                      >
                        Delete 🗑️
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Watchlist;
