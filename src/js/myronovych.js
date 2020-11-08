import onefilmTpl from '../templates/onefilm.hbs'
import renderTemplate from './renderTemplate.js'
import refs from './refs.js'
import getTrendingMovies from './requestsToServer/getTrendingMovies';
import getMovieById from './requestsToServer/getMovieById';
import searchForm from '../templates/searchForm.hbs'
// const single = document.querySelector('.single');

const apiKey = '0582d3f510963f6ac84a3c592afe6834';
// const id = 12763
// const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`;



// const cardsList = document.querySelector('.cards-list');

// const moviesList = document.querySelector('.js-movies__list');
// console.log(cardsList);
refs.movies.addEventListener('click', onMovies);
// refs.homePage.addEventListener('click', onHomePage)

function onMovies(e) {
    if (e.target.nodeName !== "IMG") {
        return;
    };
    let id = +e.target.id;
    const baseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    fetch(baseUrl).then(res => res.json()).then(data => {
        renderTemplate(data, onefilmTpl, refs.movies);
        refs.movies.removeEventListener('click', onMovies);
        refs.movies.classList.remove('movies__list')
        refs.searchBtn.innerHTML = ""
refs.homePage.addEventListener('click', onHomePage)

    }
    )
}

function onHomePage() {
    // renderTemplate(data, onefilmTpl, refs.movies);
    getTrendingMovies();
    refs.movies.classList.add('movies__list')
    refs.movies.addEventListener('click', onMovies);
    console.log(searchForm());
    refs.searchBtn.innerHTML=searchForm()
refs.homePage.removeEventListener('click', onHomePage)
    // refs.movies.classList.remove('movies__list')


}

