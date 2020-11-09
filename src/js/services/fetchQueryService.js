import moviesQueryOptions from '../const/moviesQueryOptions';
import fetchService from './fetchService';
import renderTemplateListMovies from '../renderTemplateListMovies';
import handleMoviesMiddleWare from '../middlewares/handleMoviesMiddleware';
import {
  hiddenShowPaginateArray,
  hiddenPagination,
} from '../paginate/hiddenShowPaginate';
import errorNessege from '../errorMessage';

const fetchQueryService = {
  page: 1,
  searchQuery: '',

  fetchMoviesTrand() {
    const url = `${moviesQueryOptions.BASE_URL}${moviesQueryOptions.MOVIES_TRAND_URL}api_key=${moviesQueryOptions.API_KEY}&page=${this.page}`;
    return fetchService(url)
      .then(response => {
        hiddenShowPaginateArray(response.total_pages);
        renderTemplateListMovies(handleMoviesMiddleWare(response.results));
        return response;
      })
      .catch(error => console.log(error));
  },

  fetchMoviesQuerySearch() {
    if (!this.searchQuery) {
      return;
    }
    const url = `${moviesQueryOptions.BASE_URL}${moviesQueryOptions.MOVIES_SEARCH_URL}api_key=${moviesQueryOptions.API_KEY}&page=${this.page}&query=${this.searchQuery}`;
    return fetchService(url)
      .then(response => {
        hiddenShowPaginateArray(response.total_pages);
        renderTemplateListMovies(handleMoviesMiddleWare(response.results));
        if (response.results.length === 0) errorNessege();
        console.log('by query', response);
        return response;
      })
      .catch(error => console.log(error));
  },

  fetchMovieById(id) {
    if (!id) {
      return;
    }
    hiddenPagination();
    const url = `${moviesQueryOptions.BASE_URL}${moviesQueryOptions.MOVIE_URL}/${id}?api_key=${moviesQueryOptions.API_KEY}`;
    return fetchService(url);
  },
  setSearchQuery(query) {
    this.searchQuery = query;
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
};

export default fetchQueryService;
