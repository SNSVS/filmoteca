import storagePaginateService from '../services/storagePaginateService';
import refsPaginate from '../refsPaginat';
import { handleStateBtn, generatePagesBtn } from './btnHandler';
import { clearEventsListenersPagesSearch } from './toggleListenersPagesSearch';
import { clearEventsListenersPagesTranding } from './toggleListenersPagesTranding';
import { addListenersPagesStorage } from './toggleListenersStoragePages';
import btnActiveClassToggle from './btnActiveClassToggle';
import fetchQueryService from '../services/fetchQueryService';

const handlePaginateStorage = moviesArray => {
  if (!moviesArray) {
    return;
  }
  clearEventsListenersPagesTranding();
  clearEventsListenersPagesSearch();
  // console.log('come to handle paginate');
  const totalPages = Math.ceil(moviesArray.length / 20);
  // console.log('total pages', totalPages);
  const response = {
    total_pages: totalPages,
    page: storagePaginateService.page,
  };
  storagePaginateService.resetPage();
  storagePaginateService.totalPages = totalPages;
  storagePaginateService.movies = moviesArray;
  storagePaginateService.showContent();
  handleStateBtn(response);
  generatePagesBtn(response);
  btnActiveClassToggle(
    fetchQueryService.getPage(),
    fetchQueryService.getPrevPage(),
  );
  addListenersPagesStorage();
};

export default handlePaginateStorage;
