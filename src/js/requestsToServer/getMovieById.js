import fetchQueryService from '../services/fetchQueryService';
import spinner from '../spinner';
import spinnner from '../spinner';

const getMovieById = id => {
  fetchQueryService
    .fetchMovieById(id)
    .then(response => {
      spinner.start();
      console.log(response);
      return response;
    })
    .catch(error => console.log(error.message))
    .finally(() => {
      spinner.stop();
    });
};

export default getMovieById;
