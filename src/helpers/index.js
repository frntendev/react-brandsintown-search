export const getFavorites = () => {
  return JSON.parse(localStorage.getItem("events"));
};

export const addToFavorite = data => {
  let currentEvents = getFavorites();
  localStorage.setItem("events", JSON.stringify({ ...currentEvents, ...data }));
  return getFavorites();
};

export const removeFavorite = id => {
  let currentEvents = getFavorites();
  delete currentEvents[id];
  localStorage.setItem("events", JSON.stringify(currentEvents));
  return getFavorites();
};

export const isFavorite = id => {
  let currentEvents = getFavorites();
  return currentEvents && currentEvents[id];
};

export const getSearchData = () => {
  return JSON.parse(localStorage.getItem("search_data"));
};

export const addSearchData = data => {
  let currentSearchData = getSearchData();
  localStorage.setItem(
    "search_data",
    JSON.stringify({ ...currentSearchData, ...data })
  );
  return getSearchData();
};

export const removeSearchData = () => {
  localStorage.removeItem("search_data");
  return getSearchData();
};

export const getLastArtistName = () => {
  let currentSearchData = getSearchData();
  return currentSearchData ? currentSearchData.artist.name : "";
};
