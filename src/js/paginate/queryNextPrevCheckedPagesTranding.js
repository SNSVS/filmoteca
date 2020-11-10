import fetchQueryService from '../services/fetchQueryService';
import {handleStateBtn, updateBtnPagesContent} from "./btnHandler";
import btnActiveClassToggle from './btnActiveClassToggle';

export const queryNextPage = () => {
  fetchQueryService.incrementPage();
  fetchQueryService.fetchMoviesTrand()
    .then(response => {
      handleStateBtn(response);
      const btnPages = document.querySelectorAll(".pagination-pages--item__btn");
      updateBtnPagesContent(btnPages, fetchQueryService.getPage(), true, response.total_pages);
      btnActiveClassToggle(fetchQueryService.getPage(), fetchQueryService.getPrevPage());
    })
    .catch(error => console.log(error));
}
export const queryPrevPage = () => {
  fetchQueryService.decrementPage();
  fetchQueryService.fetchMoviesTrand()
    .then(response => {
      handleStateBtn(response);
      const btnPages = document.querySelectorAll(".pagination-pages--item__btn");
      updateBtnPagesContent(btnPages, fetchQueryService.getPage(), false, response.total_pages);
      btnActiveClassToggle(fetchQueryService.getPage(), fetchQueryService.getPrevPage());
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
      handleStateBtn(response);
      btnActiveClassToggle(fetchQueryService.getPage(), fetchQueryService.getPrevPage());
    })
    .catch(error => console.log(error));
}
