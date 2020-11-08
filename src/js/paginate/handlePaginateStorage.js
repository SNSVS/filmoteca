import storagePaginateService from '../services/storagePaginateService';
import refsPaginate from '../refsPaginat';
import {handleStateBtn, generatePagesBtn} from "./btnHandler"


const handlePaginateStorage = (moviesArray) => {
  const totalPages = moviesArray / 20 !== 0? moviesArray / 20: 1;
  const response = {
    total_pages: totalPages, page: storagePaginateService.page
  }
  storagePaginateService.totalPages = totalPages;
  handleStateBtn(response);
  generatePagesBtn(response);


}

export default handlePaginateStorage;
