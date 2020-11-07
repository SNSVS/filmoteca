import fetchWithQueryService from './services/fetchQueryMoviesService';

const getTrendingMovies = (page = "") => {
  fetchWithQueryService(page)
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log(error));
}


export default getTrendingMovies;
