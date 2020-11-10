import refsPaginate from '../refsPaginat';

const btnActiveClassToggle = (currentPage, prevPage) => {
  const btnPaginateNodeList = document.querySelectorAll(".pagination-pages--item__btn");
  if (!btnPaginateNodeList.length || refsPaginate.paginateDiv.classList.contains("pagination-hidden")) {
    return;
  }
  const btnPaginate = Array.prototype.slice.call(btnPaginateNodeList);

  const prevCheckedBtn = btnPaginate.find(item => +item.textContent === prevPage);
  if (prevCheckedBtn) {
    prevCheckedBtn.classList.remove("active-btn");
  }
  const checkedBtn = btnPaginate.find(item => +item.textContent === currentPage);
  btnPaginate.forEach(item => {
    if (item !== checkedBtn && item.classList.contains("active-btn")) {
      item.classList.remove("active-btn");
    }
  });
  checkedBtn.classList.add("active-btn");
}

export default btnActiveClassToggle;
