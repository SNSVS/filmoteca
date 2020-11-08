// import 'gulp-rigger'
import './sass/styles.scss';
import './js/myronovych.js'
import withLocalStorage from "./js/temp/withLocalStorage"
import getMoviesByQuery from './js/requestsToServer/getMoviesByQuery';
import getTrendingMovies from './js/requestsToServer/getTrendingMovies';
import getMovieById from './js/requestsToServer/getMovieById';
import debouncedInputQuery from './js/homePage';
import myLibrary from './js/myLibrary';

getTrendingMovies();
// getMoviesByQuery("Ten");
// withLocalStorage();
myLibrary();

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
