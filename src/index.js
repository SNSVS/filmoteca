import './sass/styles.scss';
import './js/myronovych.js';
import withLocalStorage from './js/temp/withLocalStorage';
import getMoviesByQuery from './js/requestsToServer/getMoviesByQuery';
import getTrendingMovies from './js/requestsToServer/getTrendingMovies';
import getMovieById from './js/requestsToServer/getMovieById';
import debouncedInputQuery from './js/homePage';
import pullMyLibrary from './js/myLibraryBtn';

getTrendingMovies();
// getMoviesByQuery("Ten");
// withLocalStorage();
pullMyLibrary();
