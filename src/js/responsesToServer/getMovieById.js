import fetchQueryService from '../services/fetchQueryService';

const getMovieById = (id) => {

  fetchQueryService.fetchMovieById(id)
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log(error.message));

}

export default getMovieById;
