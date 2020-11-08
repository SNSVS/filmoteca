import refsPaginate from '../refsPaginat';
import {handleStateBtn, generatePagesBtn} from "./btnHandler"
import {addEventListenersPagesTranding} from "./toggleListenersPagesTranding";
import {clearEventsListenersPagesSearch} from "./toggleListenersPagesSearch";

const handlePaginationTrand = (response) => {
  clearEventsListenersPagesSearch();
  refsPaginate.pagesList.innerHTML = "";
  handleStateBtn(response);
  generatePagesBtn(response);
  addEventListenersPagesTranding();
}

export default handlePaginationTrand;
