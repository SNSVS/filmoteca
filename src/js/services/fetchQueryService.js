import moviesQueryOptions from '../const/moviesQueryOptions';
import fetchService from './fetchService';

const fetchQueryService = {
  page: 1,

  fetchMoviesTrand() {
    const url = `${moviesQueryOptions.BASE_URL}${moviesQueryOptions.MOVIES_TRAND_URL}api_key=${moviesQueryOptions.API_KEY}&page=${this.page}`;

    return fetchService(url);
  },
  fetchMoviesQuerySearch(querySearch) {
    if (!querySearch) {
      return;
    }
    const url = `${moviesQueryOptions.BASE_URL}${moviesQueryOptions.MOVIES_SEARCH_URL}api_key=${moviesQueryOptions.API_KEY}&page=${this.page}&query=${querySearch}`;
    return fetchService(url);
  },

  fetchMovieById(id) {
    if(!id) {
      return;
    }

    const url = `${moviesQueryOptions.BASE_URL}${moviesQueryOptions.MOVIE_URL}/${id}?api_key=${moviesQueryOptions.API_KEY}`;
    return fetchService(url);
  },

  resetPage() {
    this.page = 1;
  },
  setPage(value) {
    this.page = value;
  },

  getPage() {
    return this.page;
  },

  incrementPage() {
    this.page += 1;
  },
  decrementPage() {
    if (this.page < 2) {
      return;
    }
    this.page -= 1;
  },
}

export default fetchQueryService;
