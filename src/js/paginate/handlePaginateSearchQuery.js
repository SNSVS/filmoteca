import refsPaginate from '../refsPaginat';
import {handleStateBtn, generatePagesBtn} from "./btnHandler";
import {clearEventsListenersPagesTranding} from "./toggleListenersPagesTranding";
import {clearListenersPagesStorage} from "./toggleListenersStoragePages"
import {addEventListenersPagesSearch} from "./toggleListenersPagesSearch";
import btnActiveClassToggle from './btnActiveClassToggle';
import fetchQueryService from '../services/fetchQueryService';

const handlePaginationSearchQuery = (response) => {
  clearEventsListenersPagesTranding();
  clearListenersPagesStorage();
  refsPaginate.pagesList.innerHTML = "";
  handleStateBtn(response);
  generatePagesBtn(response);
  btnActiveClassToggle(fetchQueryService.getPage(), fetchQueryService.getPrevPage());
  addEventListenersPagesSearch();
}


export default handlePaginationSearchQuery;
