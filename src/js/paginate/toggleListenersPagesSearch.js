import refsPaginate from '../refsPaginat';
import { queryNextPage, queryPrevPage, queryCheckedPage } from './queryNextPrevCheckedPagesSearch';

export const clearEventsListenersPagesSearch = () => {
  refsPaginate.btnNext.removeEventListener("click", queryNextPage);
  refsPaginate.btnPrev.removeEventListener("click", queryPrevPage);
  refsPaginate.pagesList.removeEventListener("click", queryCheckedPage);
}
export const addEventListenersPagesSearch = () => {
  refsPaginate.btnNext.addEventListener("click", queryNextPage);
  refsPaginate.btnPrev.addEventListener("click", queryPrevPage);
  refsPaginate.pagesList.addEventListener("click", queryCheckedPage);
}
