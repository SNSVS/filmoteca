import handlePaginationSearchQuery from '../paginate/handlePaginateSearchQuery';
import fetchQueryService from '../services/fetchQueryService';
import renderTemplateListMovies from '../renderTemplateListMovies';
import spinnner from '../spinner';

const getMoviesByQuery = query => {
  fetchQueryService.resetPage();
  fetchQueryService.setSearchQuery(query);
  fetchQueryService
    .fetchMoviesQuerySearch()
    .then(response => {
      spinnner.start();

      handlePaginationSearchQuery(response);
    })
    .catch(error => console.log(error.message))
    .finally(() => {
      spinnner.stop();
    });
};

export default getMoviesByQuery;
