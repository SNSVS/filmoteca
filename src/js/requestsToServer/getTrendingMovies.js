import handlePaginationTrand from '../paginate/handlePaginationTrand';
import fetchQueryService from '../services/fetchQueryService';

const getTrendingMovies = () => {
  fetchQueryService.resetPage();
  fetchQueryService
    .fetchMoviesTrand()
    .then(response => {
      handlePaginationTrand(response);
    })
    .catch(error => console.log(error.message));
};

export default getTrendingMovies;
