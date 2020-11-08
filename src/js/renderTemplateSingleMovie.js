import template from '../templates/onefilm.hbs';
// import handlePagination from './handlePagination';
import refs from './refs';

function renderTemplateSingleMovie(data) {
  const movieTemplate = template(data);
  refs.movies.innerHTML = movieTemplate;

  handleCheckWatchedLocalStorage(data);
  onWatchedBtnHandler(data);
}

function handleCheckWatchedLocalStorage(data) {
  const watchedBtn = document.querySelector('.watched-js');
  let id = data.id;
  const newValues = JSON.parse(localStorage.getItem('watched'));
  if (newValues === null) {
    return;
  } else {
    const isNotEmpty = newValues.some(e => e.id === id);
    console.log(isNotEmpty);
    if (isNotEmpty) {
      console.log('вже є');
      watchedBtn.innerHTML = 'del from watched';
      return;
    }
  }
}

function onWatchedBtnHandler(data) {
  const watchedBtn = document.querySelector('.watched-js');
  const localeWatchedValueArray = [];
  let id = data.id;
  watchedBtn.addEventListener('click', () => {
    console.log(data);
    const newValues = JSON.parse(localStorage.getItem('watched'));
    console.log(newValues);

    if (newValues === null) {
      // FIRST CLICK
      localeWatchedValueArray.push(data);
      console.log(localeWatchedValueArray);

      localStorage.setItem('watched', JSON.stringify(localeWatchedValueArray));
      localeWatchedValueArray.splice(0);
      watchedBtn.innerHTML = 'del from watched';
    } else {
      const isNotEmpty = newValues.some(e => e.id === id);
      console.log(isNotEmpty);
      if (isNotEmpty) {
        // ВЖЕ ДОДАНО В ЛОКАЛ СТРОІДЖ
        watchedBtn.innerHTML = 'add to watched';
        const arrWithoutDeletedMovie = newValues.filter(e => e.id !== id);
        console.log(arrWithoutDeletedMovie);
        localeWatchedValueArray.push(...arrWithoutDeletedMovie);
        localStorage.setItem(
          'watched',
          JSON.stringify(localeWatchedValueArray),
        );
        localeWatchedValueArray.splice(0);
      } else {
        watchedBtn.innerHTML = 'del from watched';
        localeWatchedValueArray.push(...newValues);

        localeWatchedValueArray.push(data);
        console.log(localeWatchedValueArray);

        localStorage.setItem(
          'watched',
          JSON.stringify(localeWatchedValueArray),
        );
        localeWatchedValueArray.splice(0);
      }
    }
  });
}

export default renderTemplateSingleMovie;
