import errorSearch from '../templates/error-search.hbs';
import refs from './refs';

export default function errorMessage() {
  const errorMessage = errorSearch();
  refs.searchBtn.insertAdjacentHTML('afterEnd', errorMessage);
}
