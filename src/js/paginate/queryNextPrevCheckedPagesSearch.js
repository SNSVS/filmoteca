import fetchQueryService from '../services/fetchQueryService';
import {handleStateBtn, updateBtnPagesContent} from "./btnHandler"

export const queryNextPage = () => {
  fetchQueryService.incrementPage();
  fetchQueryService.fetchMoviesQuerySearch()
    .then(response => {
      handleStateBtn(response);
      const btnPages = document.querySelectorAll(".pagination-pages--item__btn");
      updateBtnPagesContent(btnPages, fetchQueryService.getPage(), true, response.total_pages);
    })
    .catch(error => console.log(error));
}
export const queryPrevPage = () => {
  fetchQueryService.decrementPage();
  fetchQueryService.fetchMoviesQuerySearch()
    .then(response => {
      handleStateBtn(response);
      const btnPages = document.querySelectorAll(".pagination-pages--item__btn");
      updateBtnPagesContent(btnPages, fetchQueryService.getPage(), false, response.total_pages);
    })
    .catch(error => console.log(error));
}

export const queryCheckedPage = (event) => {
  const {target, currentTarget} = event;
  if (target === currentTarget) {
    return;
  }
  const page = Number(target.textContent);
  fetchQueryService.setPage(page);
  fetchQueryService.fetchMoviesQuerySearch()
    .then(response => {
      handleStateBtn(response)
    })
    .catch(error => console.log(error));
}
