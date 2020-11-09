import refsPaginate from '../refsPaginat';
import {handleStateBtn, generatePagesBtn} from "./btnHandler"
import {addEventListenersPagesTranding} from "./toggleListenersPagesTranding";
import {clearEventsListenersPagesSearch} from "./toggleListenersPagesSearch";
import {clearListenersPagesStorage} from "./toggleListenersStoragePages"

const handlePaginationTrand = (response) => {
  clearEventsListenersPagesSearch();
  clearListenersPagesStorage();

  refsPaginate.pagesList.innerHTML = "";
  handleStateBtn(response);
  generatePagesBtn(response);
  addEventListenersPagesTranding();
}

export default handlePaginationTrand;
