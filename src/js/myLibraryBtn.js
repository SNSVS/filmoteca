import refs from './refs';
import buttons from '../templates/buttons.hbs';
import handlePaginateStorage from './paginate/handlePaginateStorage';
// console.log(refs);

function pullMyLibrary() {
  refs.myLibrary.addEventListener('click', onMyLibrary);
}
export default pullMyLibrary;

function onMyLibrary() {
  refs.searchBtn.innerHTML = buttons();
  refs.movies.classList.add('movies__list');

  const watchedMovie = JSON.parse(localStorage.getItem('watched'));

  const watcherBtn = document.getElementById('watcher-btn');
  const queueBtn = document.getElementById('queue-btn');

  //   console.log(watchedMovie);

  watcherBtn.addEventListener('click', onWatcherBtn);
  queueBtn.addEventListener('click', onQueueBtn);
  handlePaginateStorage(watchedMovie);
  return watchedMovie;
  //   console.log(watchedMovie);
}

function onWatcherBtn() {
  const watchedMovie = JSON.parse(localStorage.getItem('watched'));
  console.log("click by watched");
  //   console.log(watchedMovie);
  //   res = watchedMovie;
  handlePaginateStorage(watchedMovie);
}
function onQueueBtn() {
  const queueMovie = JSON.parse(localStorage.getItem('queue'));
  console.log(queueMovie);
  console.log("click by queue");
  //   console.log(queueMovie);
  handlePaginateStorage(queueMovie);
}
