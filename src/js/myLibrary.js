import refs from './refs';
import buttons from '../templates/buttons.hbs';
import handlePaginateStorage from './paginate/handlePaginateStorage';

console.log(refs);
function pullMyLibrary() {
  refs.myLibrary.addEventListener('click', onMyLibrary);
}
export default pullMyLibrary;

function onMyLibrary() {
  refs.searchBtn.innerHTML = buttons();
  const watchedMovie = JSON.parse(localStorage.getItem('watched'));
  console.log(watcherBtn);
  const watcherBtn = document.getElementById('watcher-btn');
  watcherBtn.addEventListener('click', onWatcherBtn);
  // console.log(watchedMovie);
  handlePaginateStorage(watchedMovie)
  return watchedMovie;
}

function onWatcherBtn() {
  console.log('lfhbgailefb');
}
