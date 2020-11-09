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

const generateCountPages = (response, isPrev) => {
  let capasityCount, countPages;
  if (!isPrev) {
    if (response.total_pages < 3) {
      return;
    }
    capasityCount = response.total_pages - response.page + 1;
    if (capasityCount <= maxCountPages) {
      countPages = capasityCount;
    }
    else {
      countPages = maxCountPages;
    }
  }
  else {
    capasityCount = response.page;
    countPages = capasityCount;
    if (capasityCount >= maxCountPages) {
      countPages = maxCountPages;
    }
  }
  return countPages;
}

export const updateBtnPagesContent = (btnPages, currentPage, toNext, totalPages) => {
  let firstPage = Number(currentPage);
  if (totalPages - currentPage < btnPages.length) {
    generatePagesBtn({page: currentPage, total_pages: totalPages}, false);
    return;
  }
  if (toNext) {
    btnPages.forEach((item, ind) => item.textContent = firstPage + ind);
  }
  else {
    if (currentPage > 1) {
      firstPage -= 1;
    }
    if (btnPages.length < maxCountPages) {
      generatePagesBtn({page: currentPage, total_pages: totalPages}, true);
      return;
    }
    btnPages.forEach((item, ind) => item.textContent = firstPage + ind);
  }
}

export const generatePagesBtn = (response) => {
  const countPages = generateCountPages(response);
  console.log("generate count", countPages);

  const pageItems = [];
  const {page} = response;
  for (let i = 0; i < countPages; i++) {
    const liItem = document.createElement("li");
    liItem.classList.add("pagination-pages--item");
    liItem.innerHTML = `<button class="pagination-pages--item__btn">${page + i}</button>`;
    pageItems.push(liItem);
  }
  if (countPages !== maxCountPages || refsPaginate.pagesList.childNodes.length + pageItems.length > maxCountPages) {
    refsPaginate.pagesList.innerHTML = "";
  }
  refsPaginate.pagesList.append(...pageItems);
}
