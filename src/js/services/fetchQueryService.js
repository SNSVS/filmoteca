import moviesQueryOptions from './moviesQueryOptions';

const fetchQueryService = {
  page: 1,
  searchQuery: "",

  fetchMovies() {
    const url = `${moviesQueryOptions.BASE_URL}api_key=${moviesQueryOptions.API_KEY}&page=${this.page}`;

    return fetch(url)
      .then(res => res.json())
      .catch(error => console.log(error.message));
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

  getQuery() {
    return this.searchQuery;
  },
  setQuery(value) {
    this.searchQuery = value;
  },

  getUrl() {
    return `${moviesQueryOptions.BASE_URL}api_key=${moviesQueryOptions.API_KEY}&page=${this.page}`;
  },
}

export default fetchQueryService;
