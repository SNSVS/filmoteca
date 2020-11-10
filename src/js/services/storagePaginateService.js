import renderTemplateListMovies from '../renderTemplateListMovies';
import handleMoviesStorageMiddleWare from '../middlewares/handleMoviesStorageMiddleware';
import {hiddenShowPaginateArray} from "../paginate/hiddenShowPaginate";
import btnActiveClassToggle from '../paginate/btnActiveClassToggle';

export default {
  _page: 1,
  _prevPage: 1,
  _perPage: 20,
  _skip: 0,
  _before: 20,
  _totalPages: 0,
  _movies: [],

  updateVariables() {
    this._skip = (this._page - 1) * this._perPage;
    this._before = this._skip + this._perPage;
  },
  updatePrevPage() {
    this._prevPage = this._page;
  },

  showNextPage() {
    if (this._page >= this._totalPages) {
      return;
    }
    this.updatePrevPage();
    this.incrementPage();
    this.showContent();
  },

  showPrevPage() {
    if (this._page < 2) {
      return;
    }
    this.updatePrevPage();
    this.decrementPage();
    this.showContent();
  },

  showChosenPage(event) {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      return;
    }
    const chosenPage = Number(target.textContent);
    if (chosenPage > this.totalPages || chosenPage < 1) {
      return;
    }
    this.updatePrevPage();
    this.page = chosenPage;
    this.showContent();
  },

  set totalPages(total) {
    this._totalPages = total;
  },
  get totalPages() {
    return this._totalPages;
  },

  set page(page) {
    this.updatePrevPage();
    this._page = page;
    this.updateVariables();
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
    this.updatePrevPage();
    this._page = 1;
  },

  incrementPage() {
    if (this._page >= this._totalPages) {
      return;
    }
    this.updatePrevPage();
    this._page++;
    this.updateVariables();
  },

  decrementPage() {
    if (this._page < 2) {
      return;
    }
    this.updatePrevPage();
    this.page -= 1;
    this.updateVariables();
  },

  showContent() {
    const moviesToShow = this._movies.slice(this._skip, this._before);
    hiddenShowPaginateArray(this._totalPages);
    btnActiveClassToggle(this._page, this._prevPage);
    renderTemplateListMovies(handleMoviesStorageMiddleWare(moviesToShow));
  },


};
