import refs from './refs.js';

refs.homePage.addEventListener('click', homePageHeaderToggleClassHandler);
refs.myLibrary.addEventListener('click', libraryHeaderToggleClassHandler); //змінити кнопку
refs.movies.addEventListener('click', oneFilmCardHeaderToggleClassHandler);

function homePageHeaderToggleClassHandler() {
  refs.header.classList.add('header-home');
  refs.header.classList.remove('header-one-film');
  refs.header.classList.remove('header-library');
}

function libraryHeaderToggleClassHandler() {
  refs.header.classList.add('header-library');
  refs.header.classList.remove('header-home');
  refs.header.classList.remove('header-one-film');
}

function oneFilmCardHeaderToggleClassHandler(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  refs.header.classList.add('header-one-film');
  refs.header.classList.remove('header-home');
  refs.header.classList.remove('header-library');
}
