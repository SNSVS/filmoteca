import refsPaginate from '../refsPaginat';
import {handleStateBtn, generatePagesBtn} from "./btnHandler";
import {clearEventsListenersPagesTranding} from "./toggleListenersPagesTranding";
import {clearListenersPagesStorage} from "./toggleListenersStoragePages"
import {addEventListenersPagesSearch} from "./toggleListenersPagesSearch";

const handlePaginationSearchQuery = (response) => {
  clearEventsListenersPagesTranding();
  clearListenersPagesStorage();
  refsPaginate.pagesList.innerHTML = "";
  handleStateBtn(response);
  generatePagesBtn(response);
  addEventListenersPagesSearch();
}


export default handlePaginationSearchQuery;
