// import 'gulp-rigger'
import './sass/styles.scss';

import './js/myronovych.js';
import getMoviesByQuery from './js/requestsToServer/getMoviesByQuery';
import getTrendingMovies from './js/requestsToServer/getTrendingMovies';
import getMovieById from './js/requestsToServer/getMovieById';
import debouncedInputQuery from './js/homePage';
import myLibrary from './js/myLibrary';

getTrendingMovies();
// getMoviesByQuery("Ten");
myLibrary();
