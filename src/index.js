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

// Для встраивания спинера
// import spinner from './js/spinner'; // подключить файл
// spinnner.start();  // вызвать в нужном месте для старта
// spinnner.stop();   // вызвать в нужном месте для остановки

// import { Spinner } from 'spin.js';
// import spinerOpts from './js/spinerOpts'
getTrendingMovies();
// getMoviesByQuery("Ten");
// withLocalStorage();
// const myLibruaryRef = document.querySelector("#myLibrary");
// myLibruaryRef.addEventListener("click", () => {console.log("event event")})
//
// const movieItems = JSON.parse(localStorage.getItem("watched"));
//
// const afterPaginate = handlePaginateStorage(movieItems);
//
// console.log("after paginate", afterPaginate);
//
// console.log("ref my", myLibruaryRef);

pullMyLibrary();
