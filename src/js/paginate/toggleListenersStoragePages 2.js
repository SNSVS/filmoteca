import refsPaginate from '../refsPaginat';
import storagePaginateService from '../services/storagePaginateService';

export const clearListenersPagesStorage = () => {
  refsPaginate.btnNext.removeEventListener("click", storagePaginateService.showNextPage);
  refsPaginate.btnPrev.removeEventListener("click", storagePaginateService.showPrevPage);
  refsPaginate.pagesList.removeEventListener("click", storagePaginateService.showChosenPage);
}
export const addListenersPagesStorage = () => {
  refsPaginate.btnNext.addEventListener("click", storagePaginateService.showNextPage.bind(storagePaginateService));
  refsPaginate.btnPrev.addEventListener("click", storagePaginateService.showPrevPage.bind(storagePaginateService));
  refsPaginate.pagesList.addEventListener("click", storagePaginateService.showChosenPage.bind(storagePaginateService));
}
