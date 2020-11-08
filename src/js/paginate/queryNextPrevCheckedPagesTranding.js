import fetchQueryService from '../services/fetchQueryService';
import {handleStateBtn, updateBtnPagesContent} from "./btnHandler"

export const queryNextPage = () => {
  fetchQueryService.incrementPage();
  fetchQueryService.fetchMoviesTrand()
    .then(response => {
      handleStateBtn(response);
      const btnPages = document.querySelectorAll(".pagination-pages--item__btn");
      updateBtnPagesContent(btnPages, fetchQueryService.getPage(), true);
    })
    .catch(error => console.log(error));
}
export const queryPrevPage = () => {
  fetchQueryService.decrementPage();
  fetchQueryService.fetchMoviesTrand()
    .then(response => {
      handleStateBtn(response);
      const btnPages = document.querySelectorAll(".pagination-pages--item__btn");
      updateBtnPagesContent(btnPages, fetchQueryService.getPage(), false);
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
  fetchQueryService.fetchMoviesTrand()
    .then(response => {
      handleStateBtn(response)
    })
    .catch(error => console.log(error));
}