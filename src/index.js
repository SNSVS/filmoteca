import './sass/styles.scss';
import './js/myronovych.js';
import withLocalStorage from './js/temp/withLocalStorage';
import getMoviesByQuery from './js/requestsToServer/getMoviesByQuery';
import getTrendingMovies from './js/requestsToServer/getTrendingMovies';
import getMovieById from './js/requestsToServer/getMovieById';
import debouncedInputQuery from './js/homePage';
import pullMyLibrary from './js/myLibraryBtn';
// import spinRef from './js/spin' //Вызвать в нужном месте. Спиннер

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


