import refsPaginate from './refsPaginat';
import fetchQueryService from './services/fetchQueryService';

const maxCountPages = 5;

const btnDisable = (btn) => {
  btn.setAttribute("disabled", "true");
}
const btnEnable = (btn) => {
  btn.removeAttribute("disabled");
}

const handleStateBtn = (response) => {
  if (response.page === 1) {
    btnDisable(refsPaginate.btnPrev);
  }
  else {
    btnEnable(refsPaginate.btnPrev)
  }

  if (response.page === response.total_pages) {
    btnDisable(refsPaginate.btnNext);
  }
  else {
    btnEnable(refsPaginate.btnNext);
  }
}
const generateCountPages = (response) => {
  if (response.total_pages < 3) {
    return;
  }
  let capasityCount = response.total_pages - 2;
  let countPages;
  if (capasityCount <= maxCountPages) {
    countPages = capasityCount;
  }
  else {
    capasityCount -= maxCountPages;
    countPages = maxCountPages;
  }
  return countPages;
}

const queryNextPage = () => {
  fetchQueryService.incrementPage();
  fetchQueryService.fetchMoviesTrand()
    .then(response => {
      console.log(response);
      handleStateBtn(response);
      const btnPages = document.querySelectorAll(".pagination-pages--item__btn");
      updateBtnPagesContent(btnPages, fetchQueryService.getPage(), true);
    })
    .catch(error => console.log(error));
}
const queryPrevPage = () => {
  fetchQueryService.decrementPage();
  fetchQueryService.fetchMoviesTrand()
    .then(response => {
      console.log(response);
      handleStateBtn(response);
      const btnPages = document.querySelectorAll(".pagination-pages--item__btn");
      updateBtnPagesContent(btnPages, fetchQueryService.getPage(), false);
    })
    .catch(error => console.log(error));
}
const queryCheckedPage = (event) => {
  const {target, currentTarget} = event;
  if (target === currentTarget) {
    return;
  }
  const page = Number(target.textContent);
  fetchQueryService.setPage(page);
  fetchQueryService.fetchMoviesTrand()
    .then(response => {
      console.log(response);
      handleStateBtn(response)
  })
    .catch(error => console.log(error));
}

const updateBtnPagesContent = (btnPages, currentPage, toNext) => {
  let firstPage = Number(btnPages[0].textContent);
  console.log(firstPage);
  if (toNext) {
    firstPage += 1;
    btnPages.forEach((item, ind) => item.textContent = firstPage + ind);
  }
  else {
    firstPage -= 1;
    btnPages.forEach((item, ind) => item.textContent = firstPage + ind);
  }
}

const generatePagesBtn = (response) => {
  const countPages = generateCountPages(response);

  const pageItems = [];
  const {page} = response;
  for (let i = 0; i < countPages; i++) {
    const liItem = document.createElement("li");
    liItem.classList.add("pagination-pages--item");
    liItem.innerHTML = `<button class="pagination-pages--item__btn">${page + i}</button>`;
    pageItems.push(liItem);
  }
  refsPaginate.pagesList.append(...pageItems);
}


const handlePagination = (response) => {
  console.log("handle pagination", response);
  handleStateBtn(response);
  generatePagesBtn(response);

  refsPaginate.btnNext.addEventListener("click", queryNextPage);
  refsPaginate.btnPrev.addEventListener("click", queryPrevPage);
  refsPaginate.pagesList.addEventListener("click", queryCheckedPage);
}


export default handlePagination;
