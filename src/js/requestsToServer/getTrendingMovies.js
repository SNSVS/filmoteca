import refsPaginate from '../refsPaginat';
import handlePaginationTrand from '../paginate/handlePaginationTrand';
import fetchQueryService from '../services/fetchQueryService';
import renderTemplateListMovies from '../renderTemplateListMovies';
import spinner from '../spinner';

const getTrendingMovies = () => {
  fetchQueryService.resetPage();
  fetchQueryService
    .fetchMoviesTrand()
    .then(response => {
      spinner.start();
      handlePaginationTrand(response);
    })
    .catch(error => console.log(error.message))
    .finally(() => {
      spinner.stop();
    });
};

export default getTrendingMovies;
