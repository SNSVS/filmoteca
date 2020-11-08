export default {
  _page: 1,
  _skip: 0,
  _before: 20,
  _totalPages: 0,
  _movies: [],

  getNextPage() {
    if (this._page >= this._totalPages) {
      return;
    }
    this._page++;
  },

  set totalPages(total) {
    this._totalPages = total;
  },
  get totalPages() {
    return this._totalPages;
  },

  set page(page) {
    this._page = page;
  },
  get page() {
    return this._page;
  },

  set movies(movies) {
    this._movies = movies;
  },
  get movies() {
    return this._movies;
  },

  resetPage() {
    this._page = 1;
  },

  incrementPage() {
    if (this._page >= this._totalPages) {
      return;
    }
    this._page++;
  },

  decrementPage() {
    if (this._page < 2) {
      return;
    }

    this.page -= 1;
  }
}
