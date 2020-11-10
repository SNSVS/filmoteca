import refsPaginate from './refsPaginat';
import debounce from 'lodash.debounce';
import getMoviesByQuery from './requestsToServer/getMoviesByQuery';

const debouncedInputQuery = debounce(event => {
  const query = event.target.value;
  if (!query) {
    return;
  }
  getMoviesByQuery(query);
}, 500);

refsPaginate.searchQuery.addEventListener('input', debouncedInputQuery);

export default debouncedInputQuery;
