import refsPaginate from '../refsPaginat';
import {handleStateBtn, generatePagesBtn} from "./btnHandler";
import {clearEventsListenersPagesTranding} from "./toggleListenersPagesTranding";
import {addEventListenersPagesSearch} from "./toggleListenersPagesSearch";

const handlePaginationSearchQuery = (response) => {
  clearEventsListenersPagesTranding();
  refsPaginate.pagesList.innerHTML = "";
  handleStateBtn(response);
  generatePagesBtn(response);
  addEventListenersPagesSearch();
}


export default handlePaginationSearchQuery;
