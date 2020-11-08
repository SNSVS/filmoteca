import refsPaginate from '../refsPaginat';
import handlePaginationTrand from '../paginate/handlePaginationTrand';
import fetchQueryService from '../services/fetchQueryService';
import renderTemplateListMovies from '../renderTemplateListMovies';

const getTrendingMovies = () => {
  fetchQueryService.resetPage();
  fetchQueryService.fetchMoviesTrand()
    .then(response => {
      handlePaginationTrand(response)
    })
    .catch(error => console.log(error.message));

}

export default getTrendingMovies;
