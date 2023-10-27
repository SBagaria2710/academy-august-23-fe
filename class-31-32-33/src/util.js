import { WATCHLIST_KEY } from "./constant";

export const getWatchlistFromLocalStorage = () => {
  const watchList = localStorage.getItem(WATCHLIST_KEY);

  let value;
  if (watchList) {
    value = JSON.parse(watchList);
  } else {
    value = [];
  }

  return value;
};