import refsPaginate from '../refsPaginat';
import { queryNextPage, queryPrevPage, queryCheckedPage } from './queryNextPrevCheckedPagesTranding';

export const clearEventsListenersPagesTranding = () => {
  refsPaginate.btnNext.removeEventListener("click", queryNextPage);
  refsPaginate.btnPrev.removeEventListener("click", queryPrevPage);
  refsPaginate.pagesList.removeEventListener("click", queryCheckedPage);
}
export const addEventListenersPagesTranding = () => {
  refsPaginate.btnNext.addEventListener("click", queryNextPage);
  refsPaginate.btnPrev.addEventListener("click", queryPrevPage);
  refsPaginate.pagesList.addEventListener("click", queryCheckedPage);
}
