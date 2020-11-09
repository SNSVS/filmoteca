// import 'gulp-rigger'
import './sass/styles.scss';

import './js/index.js';
import './js/myronovych.js';
import './js/index.js';
import getMoviesByQuery from './js/requestsToServer/getMoviesByQuery';
import getTrendingMovies from './js/requestsToServer/getTrendingMovies';
import getMovieById from './js/requestsToServer/getMovieById';
import debouncedInputQuery from './js/homePage';
import headerClassToggle from './js/headerClassToggle.js';

getTrendingMovies();
// getMoviesByQuery("Ten");
