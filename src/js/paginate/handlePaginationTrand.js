import refsPaginate from '../refsPaginat';
import {handleStateBtn, generatePagesBtn} from "./btnHandler"
import {addEventListenersPagesTranding} from "./toggleListenersPagesTranding";
import {clearEventsListenersPagesSearch} from "./toggleListenersPagesSearch";
import {clearListenersPagesStorage} from "./toggleListenersStoragePages";
import btnActiveClassToggle from './btnActiveClassToggle';
import fetchQueryService from '../services/fetchQueryService';

const handlePaginationTrand = (response) => {
  clearEventsListenersPagesSearch();
  clearListenersPagesStorage();

  refsPaginate.pagesList.innerHTML = "";
  handleStateBtn(response);
  generatePagesBtn(response);
  btnActiveClassToggle(fetchQueryService.getPage(), fetchQueryService.getPrevPage());
  addEventListenersPagesTranding();
}

export default handlePaginationTrand;
