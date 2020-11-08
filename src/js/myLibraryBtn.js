import refs from './refs';
import buttons from '../templates/buttons.hbs';
// console.log(refs);

function pullMyLibrary() {
  refs.myLibrary.addEventListener('click', onMyLibrary);
}
export default pullMyLibrary;

function onMyLibrary() {
  refs.searchBtn.innerHTML = buttons();

  const watchedMovie = JSON.parse(localStorage.getItem('watched'));

  const watcherBtn = document.getElementById('watcher-btn');
  const queueBtn = document.getElementById('queue-btn');

  //   console.log(watchedMovie);

  watcherBtn.addEventListener('click', onWatcherBtn);
  queueBtn.addEventListener('click', onQueueBtn);
  return watchedMovie;
  //   console.log(watchedMovie);
}

function onWatcherBtn() {
  const watchedMovie = JSON.parse(localStorage.getItem('watched'));
  //   console.log(watchedMovie);
  //   res = watchedMovie;
  return watchedMovie;
}
function onQueueBtn() {
  const queueMovie = JSON.parse(localStorage.getItem('queue'));
  //   console.log(queueMovie);
  return queueMovie;
}
