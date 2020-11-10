import fetchQueryService from '../services/fetchQueryService';

const addToLocalStorage = () => {
  for (let i = 1; i < 12; i++) {
    fetchQueryService.setPage(i);
    fetchQueryService.fetchMoviesTrand().then(response => {
      const itemsToStorage = [];
      const itemsInStorage = JSON.parse(localStorage.getItem('watched'));
      if (itemsInStorage) {
        itemsToStorage.push(...itemsInStorage, ...response.results);
      }
      localStorage.setItem('watched', JSON.stringify(itemsToStorage));
    });
  }
};

export default addToLocalStorage;
