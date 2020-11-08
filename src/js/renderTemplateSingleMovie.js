import template from '../templates/onefilm.hbs';
import refs from './refs';

function renderTemplateSingleMovie(data) {
  const movieTemplate = template(data);
  refs.movies.innerHTML = movieTemplate;

  handleCheckWatchedLocalStorage(data);
  handleCheckQueueLocalStorage(data);
  onWatchedBtnHandler(data);
  onQueueBtnHandler(data);
}

function handleCheckWatchedLocalStorage(data) {
  const watchedBtn = document.querySelector('.watched-js');
  let id = data.id;
  const newValues = JSON.parse(localStorage.getItem('watched'));
  if (newValues === null) {
    return;
  } else {
    const isNotEmpty = newValues.some(e => e.id === id);
    if (isNotEmpty) {
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
    const newValues = JSON.parse(localStorage.getItem('watched'));

    if (newValues === null) {
      // FIRST CLICK
      localeWatchedValueArray.push(data);

      localStorage.setItem('watched', JSON.stringify(localeWatchedValueArray));
      localeWatchedValueArray.splice(0);
      watchedBtn.innerHTML = 'del from watched';
    } else {
      const isNotEmpty = newValues.some(e => e.id === id);
      if (isNotEmpty) {
        // ВЖЕ ДОДАНО В ЛОКАЛ СТРОІДЖ
        watchedBtn.innerHTML = 'add to watched';
        const arrWithoutDeletedMovie = newValues.filter(e => e.id !== id);
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

        localStorage.setItem(
          'watched',
          JSON.stringify(localeWatchedValueArray),
        );
        localeWatchedValueArray.splice(0);
      }
    }
  });
}

// ==========QUEUE BTN =============================

function handleCheckQueueLocalStorage(data) {
  const queueBtn = document.querySelector('.queue-js');
  let id = data.id;
  const newValues = JSON.parse(localStorage.getItem('queue'));
  if (newValues === null) {
    return;
  } else {
    const isNotEmpty = newValues.some(e => e.id === id);
    if (isNotEmpty) {
      queueBtn.innerHTML = 'del from queue';
      return;
    }
  }
}

function onQueueBtnHandler(data) {
  const queueBtn = document.querySelector('.queue-js');
  const localeQueueValueArray = [];
  let id = data.id;
  queueBtn.addEventListener('click', () => {
    const newValues = JSON.parse(localStorage.getItem('queue'));

    if (newValues === null) {
      // FIRST CLICK
      localeQueueValueArray.push(data);

      localStorage.setItem('queue', JSON.stringify(localeQueueValueArray));
      localeQueueValueArray.splice(0);
      queueBtn.innerHTML = 'del from queue';
    } else {
      // ВЖЕ ДОДАНО В ЛОКАЛ СТРОІДЖ
      const isNotEmpty = newValues.some(e => e.id === id);
      if (isNotEmpty) {
        queueBtn.innerHTML = 'add to queue';
        const arrWithoutDeletedMovie = newValues.filter(e => e.id !== id);
        localeQueueValueArray.push(...arrWithoutDeletedMovie);
        localStorage.setItem('queue', JSON.stringify(localeQueueValueArray));
        localeQueueValueArray.splice(0);
      } else {
        queueBtn.innerHTML = 'del from queue';
        localeQueueValueArray.push(...newValues);

        localeQueueValueArray.push(data);

        localStorage.setItem('queue', JSON.stringify(localeQueueValueArray));
        localeQueueValueArray.splice(0);
      }
    }
  });
}

export default renderTemplateSingleMovie;
