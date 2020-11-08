// import 'gulp-rigger'
import './sass/styles.scss';
import './js/index.js';


import getMoviesByQuery from './js/requestsToServer/getMoviesByQuery';
import getTrendingMovies from './js/requestsToServer/getTrendingMovies';
import getMovieById from './js/requestsToServer/getMovieById';

// getMoviesByQuery("ten");
getTrendingMovies();
// getMovieById(6844);
