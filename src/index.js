import './sass/styles.scss';
import './js/myronovych.js';
import withLocalStorage from './js/temp/withLocalStorage';
import getMoviesByQuery from './js/requestsToServer/getMoviesByQuery';
import getTrendingMovies from './js/requestsToServer/getTrendingMovies';
import getMovieById from './js/requestsToServer/getMovieById';
import debouncedInputQuery from './js/homePage';
import headerClassToggle from './js/headerClassToggle.js';
import pullMyLibrary from './js/myLibraryBtn';
import studentOneCardMarkap from './js/studentOneCardMarkap';
import './js/ourTeam';
import onHomePageClick from './js/onHomePageClick';

getTrendingMovies();
onHomePageClick();
pullMyLibrary();
