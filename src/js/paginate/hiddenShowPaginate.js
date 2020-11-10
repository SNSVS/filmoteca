import refsPaginate from '../refsPaginat';

export const hiddenShowPaginateArray = (pages) => {
  if (pages < 2) {
    refsPaginate.paginateDiv.classList.add("pagination-hidden");
  }
  else {
    refsPaginate.paginateDiv.classList.remove("pagination-hidden");
  }
}

export const hiddenPagination = () => {
  refsPaginate.paginateDiv.classList.add("pagination-hidden");
}
