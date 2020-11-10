import refs from './refs';
import buttons from '../templates/buttons.hbs';
import handlePaginateStorage from './paginate/handlePaginateStorage';
import { onMovies } from './myronovych';

function pullMyLibrary() {
  refs.myLibrary.addEventListener('click', onMyLibrary);
}
export default pullMyLibrary;

function onMyLibrary() {
  refs.myLibrary.autofocus = false;
  refs.movies.addEventListener('click', onMovies);
  refs.searchBtn.innerHTML = buttons();
  refs.movies.classList.add('movies__list');

  const watchedMovie = JSON.parse(localStorage.getItem('watched'));
  const watcherBtn = document.getElementById('watcher-btn');
  watcherBtn.autofocus = true;
  const queueBtn = document.getElementById('queue-btn');

  watcherBtn.addEventListener('click', onWatcherBtn);
  queueBtn.addEventListener('click', onQueueBtn);
  handlePaginateStorage(watchedMovie);
  return watchedMovie;
}

function onWatcherBtn(e) {
  const watchedMovie = JSON.parse(localStorage.getItem('watched'));
  handlePaginateStorage(watchedMovie);
}
function onQueueBtn() {
  const queueMovie = JSON.parse(localStorage.getItem('queue'));
  const watcherBtn = document.getElementById('watcher-btn');
  watcherBtn.autofocus = false;
  handlePaginateStorage(queueMovie);
}
