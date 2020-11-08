import refsPaginate from '../refsPaginat';

const maxCountPages = 5;

const btnDisable = (btn) => {
  btn.setAttribute("disabled", "true");
}
const btnEnable = (btn) => {
  btn.removeAttribute("disabled");
}

export const handleStateBtn = (response) => {
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

export const updateBtnPagesContent = (btnPages, currentPage, toNext) => {
  let firstPage = Number(currentPage);
  if (toNext) {
    btnPages.forEach((item, ind) => item.textContent = firstPage + ind);
  }
  else {
    if (currentPage > 1) {
      firstPage -= 1;
    }
    btnPages.forEach((item, ind) => item.textContent = firstPage + ind);
  }
}

export const generatePagesBtn = (response) => {
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
